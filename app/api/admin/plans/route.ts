import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

const planSchema = z.object({
  name: z.string().min(1, "Plan name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be non-negative"),
  duration: z.number().int().min(1, "Duration must be at least 1"),
  services: z.array(z.string()).min(1, "At least one service is required"),
  features: z.array(z.string()),
});

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session!.user!.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Get pagination parameters from URL
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
    const skip = (page - 1) * pageSize;

    // Get total count for pagination
    const totalPlans = await db.plan.count();

    // Get paginated plans
    const plans = await db.plan.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take: pageSize,
    });

    const formattedPlans = plans.map((plan) => ({
      id: plan.id,
      name: plan.name,
      description: plan.description,
      price: plan.price,
      duration: plan.duration,
      services: plan.services,
      features: plan.features || [],
    }));

    return NextResponse.json({
      plans: formattedPlans,
      pagination: {
        total: totalPlans,
        pageCount: Math.ceil(totalPlans / pageSize),
        currentPage: page,
        pageSize,
      },
    });
  } catch (error) {
    console.error("Error fetching plans:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session!.user!.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const json = await req.json();

    // transform price and duration to numbers from strings
    json.price = parseFloat(json.price);
    json.duration = parseInt(json.duration);
    const body = planSchema.parse(json);

    console.log("body", body);

    const plan = await db.plan.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(plan);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" + error },
      { status: 500 }
    );
  }
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

type Plan = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const plans: Plan[] = [
  {
    id: "1",
    name: "Basic",
    description: "Essential mentorship services",
    price: 49.99,
  },
  {
    id: "2",
    name: "Pro",
    description: "Advanced mentorship and resources",
    price: 99.99,
  },
  {
    id: "3",
    name: "Enterprise",
    description: "Comprehensive career development suite",
    price: 199.99,
  },
];

export function SubscribePlan() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPaymentProof(e.target.files[0]);
    }
  };

  const handleSubscribe = () => {
    if (!selectedPlan || !paymentProof) {
      toast({
        title: "Error",
        description: "Please select a plan and upload payment proof.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the subscription request and payment proof to your backend
    console.log("Subscribing to plan:", selectedPlan);
    console.log("Payment proof:", paymentProof);

    toast({
      title: "Subscription Submitted",
      description: "Your subscription request has been submitted for approval.",
    });

    setSelectedPlan(null);
    setPaymentProof(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Plans</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.id}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                ${plan.price.toFixed(2)}/month
              </p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedPlan(plan)}>
                    Subscribe
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Subscribe to {plan.name} Plan</DialogTitle>
                    <DialogDescription>
                      Please upload proof of payment to complete your
                      subscription.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="payment-proof">Payment Proof</Label>
                    <Input
                      id="payment-proof"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  <DialogFooter>
                    <Button onClick={handleSubscribe}>
                      Complete Subscription
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
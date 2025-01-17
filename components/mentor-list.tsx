import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mentors = [
  {
    id: 1,
    name: "Abel Wilson Walekhwa",
    title: "Founder & Lead Mentor",
    image: "/mentors/banner-image.jpeg",
    expertise: ["Career Development", "4WFramework", "Leadership"],
    bio: "Walekhwa is the founder of African Centre for Career Mentorship and developer of the 4WFramework. With over 15 years of experience in career counseling, he has helped thousands of professionals across Africa realize their potential.",
  },
  {
    id: 2,
    name: "Birungi Evelyne",
    title: "Learning & Development Specialist",
    image: "/mentors/picture2.png",
    expertise: [
      "financial literacy",
      "Trainer of trainees",
      "HR-Learning and Development",
    ],
    bio: "Evelyne is a Learning and Development specialist currently serving as lead HR-Learning and Development at Wagagai Limited, one of the largest Horticulture farms in Uganda.She has a passion for financial literacy and has trained over 5000 employees in the last 10 years.",
  },
  {
    id: 3,
    name: "Harriet Ocitti",
    title: "A proficient communication coach",
    image: "/mentors/harriet.jpg",
    expertise: [
      "public speaking",
      "leadership skills",
      "communication coaching",
    ],
    bio: "Harriet Ocitti serves as the Executive Director at the Institute for National Transformation (INT), whose mission is to develop no-excuse leaders who will transform their spheres of influence to greater levels of performance and excellence.she brings a wealth of experience in communication and leadership coaching.",
  },
];

export function MentorList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mentors.map((mentor) => (
        <Card key={mentor.id} className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Image
                src={mentor.image}
                alt={mentor.name}
                className="rounded-full"
                width={50}
                height={50}
              />
              <div>
                <CardTitle>{mentor.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{mentor.title}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <p className="text-sm mb-4 flex-grow">{mentor.bio}</p>
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// components/need-review.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface Review {
  name: string;
  role: string;
  initials: string;
}

const reviews: Review[] = [
  {
    name: "Wade Warren",
    role: "Marketing coordinator",
    initials: "WW",
  },
  {
    name: "Jakob Jones",
    role: "Web designer",
    initials: "JJ",
  },
  {
    name: "Leslie Wonderwid",
    role: "PM manager",
    initials: "LW",
  },
];

export function NeedReview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Need review</CardTitle>
        <Button variant="link" className="text-purple-600 p-0">
          See all
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {reviews.map((review) => (
          <div key={review.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{review.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{review.name}</div>
                <div className="text-sm text-muted-foreground">
                  {review.role}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          variant="ghost"
          className="w-full text-muted-foreground hover:text-foreground"
        >
          Manage personal
        </Button>
      </CardContent>
    </Card>
  );
}

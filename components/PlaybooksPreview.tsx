"use client"

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const playbooks = [
  {
    id: 1,
    title: "Optimizing Sleep for Longevity",
    description: "A comprehensive guide to improving sleep quality and its impact on overall health and longevity.",
    category: "Sleep",
  },
  {
    id: 2,
    title: "Nutrition Strategies for Healthy Aging",
    description: "Evidence-based dietary approaches to support cellular health and slow down the aging process.",
    category: "Nutrition",
  },
  {
    id: 3,
    title: "Stress Management and Longevity",
    description: "Techniques and practices to reduce chronic stress and its negative effects on lifespan.",
    category: "Mental Health",
  },
  // Add more playbooks as needed
];

export default function PlaybooksPreview() {
  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Playbooks</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Longevity Guides
          </p>
          <p className="mt-4 max-w-2xl text-xl text-foreground lg:mx-auto">
            In-depth resources summarizing the main scientific findings for specific longevity topics.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {playbooks.map((playbook) => (
              <Card key={playbook.id}>
                <CardHeader>
                  <CardTitle>{playbook.title}</CardTitle>
                  <CardDescription>
                    <Badge>{playbook.category}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{playbook.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/playbooks/${playbook.id}`} className="text-primary hover:underline">
                    Read playbook
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/playbooks" className="text-primary hover:underline">
            View all playbooks
          </Link>
        </div>
      </div>
    </section>
  );
}
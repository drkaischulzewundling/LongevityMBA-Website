"use client"

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const insights = [
  {
    id: 1,
    title: "The Impact of Intermittent Fasting on Longevity",
    description: "A comprehensive look at how intermittent fasting affects cellular repair and longevity markers.",
    university: "Harvard Medical School",
    isFree: true,
  },
  {
    id: 2,
    title: "Exercise and Telomere Length: A Key to Aging",
    description: "Exploring the relationship between regular exercise and the length of telomeres, crucial for cellular aging.",
    university: "Stanford University",
    isFree: true,
  },
  {
    id: 3,
    title: "Nutrition and Cognitive Decline: Latest Findings",
    description: "Analyzing the role of specific nutrients in preventing age-related cognitive decline.",
    university: "MIT",
    isFree: false,
  },
  // Add more insights as needed
];

export default function InsightsPreview() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Insights</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Latest Longevity Research
          </p>
          <p className="mt-4 max-w-2xl text-xl text-foreground lg:mx-auto">
            Dive into our curated collection of the most recent and impactful longevity studies.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <Card key={insight.id}>
                <CardHeader>
                  <CardTitle>{insight.title}</CardTitle>
                  <CardDescription>{insight.university}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{insight.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Badge variant={insight.isFree ? "default" : "secondary"}>
                    {insight.isFree ? "Free" : "Member Exclusive"}
                  </Badge>
                  <Link href={`/insights/${insight.id}`} className="text-primary hover:underline">
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/insights" className="text-primary hover:underline">
            View all insights
          </Link>
        </div>
      </div>
    </section>
  );
}
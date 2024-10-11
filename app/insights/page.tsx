"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

const insights = [
  {
    id: 1,
    title: "The Impact of Intermittent Fasting on Longevity",
    description: "A comprehensive look at how intermittent fasting affects cellular repair and longevity markers.",
    university: "Harvard Medical School",
    isFree: true,
    topic: "Nutrition",
  },
  {
    id: 2,
    title: "Exercise and Telomere Length: A Key to Aging",
    description: "Exploring the relationship between regular exercise and the length of telomeres, crucial for cellular aging.",
    university: "Stanford University",
    isFree: true,
    topic: "Exercise",
  },
  {
    id: 3,
    title: "Nutrition and Cognitive Decline: Latest Findings",
    description: "Analyzing the role of specific nutrients in preventing age-related cognitive decline.",
    university: "MIT",
    isFree: false,
    topic: "Nutrition",
  },
  {
    id: 4,
    title: "Sleep Quality and Its Effect on Cellular Regeneration",
    description: "Investigating how sleep patterns influence cellular repair mechanisms and overall longevity.",
    university: "University of California, Berkeley",
    isFree: false,
    topic: "Sleep",
  },
  {
    id: 5,
    title: "The Role of Stress Management in Extending Lifespan",
    description: "Examining the physiological impacts of chronic stress and effective strategies for mitigation.",
    university: "Yale University",
    isFree: true,
    topic: "Mental Health",
  },
  // Add more insights as needed
];

const topics = [...new Set(insights.map(insight => insight.topic))];

export default function InsightsPage() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const filteredInsights = selectedTopics.length > 0
    ? insights.filter(insight => selectedTopics.includes(insight.topic))
    : insights;

  const handleTopicChange = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Insights</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Filter by Topic</h2>
          {topics.map(topic => (
            <div key={topic} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={topic}
                checked={selectedTopics.includes(topic)}
                onCheckedChange={() => handleTopicChange(topic)}
              />
              <label
                htmlFor={topic}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {topic}
              </label>
            </div>
          ))}
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredInsights.map((insight) => (
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
      </div>
    </div>
  );
}
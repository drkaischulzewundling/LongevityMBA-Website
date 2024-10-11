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
  {
    id: 4,
    title: "Exercise Protocols for Longevity",
    description: "Scientifically-backed exercise routines designed to promote healthy aging and increase lifespan.",
    category: "Exercise",
  },
  {
    id: 5,
    title: "Cognitive Health and Brain Longevity",
    description: "Strategies to maintain and improve cognitive function as we age, based on the latest neuroscience research.",
    category: "Brain Health",
  },
  {
    id: 6,
    title: "Hormonal Balance for Healthy Aging",
    description: "Understanding and optimizing hormonal health for longevity, including natural and medical interventions.",
    category: "Endocrinology",
  },
  // Add more playbooks as needed
];

export default function PlaybooksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Playbooks</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
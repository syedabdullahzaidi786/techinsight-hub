import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Brain, Globe, Shield, Cloud, Cpu, Code, Database, Network } from 'lucide-react'
import Link from "next/link"

const categories = [
  {
    title: "Artificial Intelligence",
    description: "Latest developments in AI, machine learning, and neural networks",
    icon: Brain,
    posts: 42,
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Web Development",
    description: "Modern web technologies, frameworks, and best practices",
    icon: Globe,
    posts: 38,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Cybersecurity",
    description: "Security trends, threats, and protection strategies",
    icon: Shield,
    posts: 25,
    gradient: "from-emerald-500 to-green-500"
  },
  {
    title: "Cloud Computing",
    description: "Cloud platforms, services, and infrastructure solutions",
    icon: Cloud,
    posts: 31,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Hardware & IoT",
    description: "Latest in hardware technology and Internet of Things",
    icon: Cpu,
    posts: 19,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Programming",
    description: "Programming languages, tools, and development practices",
    icon: Code,
    posts: 45,
    gradient: "from-violet-500 to-purple-500"
  },
  {
    title: "Data Science",
    description: "Data analysis, visualization, and statistical modeling",
    icon: Database,
    posts: 28,
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    title: "Networking",
    description: "Network architecture, protocols, and infrastructure",
    icon: Network,
    posts: 22,
    gradient: "from-cyan-500 to-blue-500"
  }
]

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Categories</h1>
          <p className="text-muted-foreground max-w-[600px]">
            Browse our articles by topic to find exactly what you&apos;re looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <Link key={i} href={`/categories/${category.title.toLowerCase()}`}>
              <Card className="group relative overflow-hidden hover:shadow-lg transition-all h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity group-hover:opacity-10`} />
                <CardHeader className="flex flex-row items-center gap-4 pt-6">
                  <div className="rounded-full p-2 bg-muted">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.posts} articles
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


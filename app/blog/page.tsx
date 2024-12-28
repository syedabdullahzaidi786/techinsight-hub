import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Timer, MessageSquare, Filter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "The Evolution of Artificial Intelligence in 2024",
    excerpt: "Exploring the latest developments in AI and their impact on various industries.",
    category: "Artificial Intelligence",
    image: "/ai.jpeg",
    date: "2024-01-26",
    readTime: "5 min read",
    comments: 12,
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Understanding Large Language Models",
    excerpt: "A deep dive into the architecture and capabilities of modern LLMs.",
    category: "Machine Learning",
    image: "/machine.jpeg",
    date: "2024-01-25",
    readTime: "7 min read",
    comments: 18,
    gradient: "from-green-500 to-emerald-500"
  },
  // Add more posts...
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="space-y-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tighter">Latest Articles</h1>
          <p className="text-muted-foreground max-w-[600px]">
            Explore our collection of in-depth articles about technology, AI, and innovation.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search articles..."
            className="sm:max-w-[300px]"
          />
          <Select defaultValue="latest">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Card key={i} className="group relative overflow-hidden hover:shadow-lg transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 transition-opacity group-hover:opacity-10`} />
              <CardContent className="p-4">
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                  />
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-background/95 backdrop-blur-sm">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Timer className="h-4 w-4" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                <div className="flex items-center justify-between w-full">
                  <Link href={`/blog/post-${i + 1}`}>
                    <Button variant="ghost" className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                  <div className="flex items-center text-muted-foreground">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  )
}


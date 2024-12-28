import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, MessageSquare, Sparkles, Shield, Cloud, Zap, Rocket, Brain, Timer } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const featuredPosts = [
  {
    title: "Revolutionary AI Models Transforming Healthcare",
    excerpt: "How artificial intelligence is revolutionizing medical diagnosis and treatment planning.",
    category: "AI in Healthcare",
    image: "/ai-health.jpg",
    date: "2024-01-26",
    readTime: "5 min read",
    comments: 12,
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "The Rise of Quantum Computing",
    excerpt: "Understanding quantum supremacy and its implications for future technology.",
    category: "Quantum Tech",
    image: "/quantum.jpg",
    date: "2024-01-25",
    readTime: "4 min read",
    comments: 8,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Web3 and the Future of Internet",
    excerpt: "Exploring decentralized technologies and their impact on digital experiences.",
    category: "Web3",
    image: "/web3.jpeg",
    date: "2024-01-24",
    readTime: "6 min read",
    comments: 15,
    gradient: "from-orange-500 to-red-500"
  }
]

const features = [
  {
    icon: Brain,
    title: "AI & Deep Learning",
    description: "Cutting-edge developments in neural networks and deep learning architectures.",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    icon: Rocket,
    title: "Future Tech",
    description: "Emerging technologies shaping the future of digital innovation.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced security protocols and threat prevention strategies.",
    gradient: "from-emerald-500 to-green-500"
  },
  {
    icon: Cloud,
    title: "Cloud Innovation",
    description: "Next-generation cloud solutions and serverless architecture.",
    gradient: "from-blue-500 to-cyan-500"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5" />
        <div className="absolute inset-0 bg-grid-white/10 dark:bg-grid-black/10" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Sparkles className="mr-2 h-4 w-4 text-primary" />
                  Discover the Future of Tech
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-gradient">
                  Where Innovation Meets Insight
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Dive into the world of cutting-edge technology, AI breakthroughs, 
                  and digital transformation. Stay ahead with expert analysis and deep insights.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Explore Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10">Watch Tech Insights</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-foreground/20 transform translate-y-full transition-transform group-hover:translate-y-0" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-[600px] transform perspective-1000 hover:rotate-y-12 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg" />
                <Image
                  src="/vr.jpg"
                  alt="Hero illustration"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts with Hover Effects */}
      <section className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Insights</h2>
            <p className="text-muted-foreground">The latest breakthroughs in technology</p>
          </div>
          <Link href="/blog">
            <Button variant="ghost" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, i) => (
            <Card key={i} className="group relative overflow-hidden transition-all hover:shadow-lg">
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
      </section>

      {/* Features Grid with Animated Cards */}
      <section className="container px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Exploring Tomorrow&apos;s Tech</h2>
          <p className="text-muted-foreground md:text-lg max-w-[600px] mx-auto">
            Discover comprehensive insights into the technologies shaping our future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card 
              key={i} 
              className="group relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full p-3 bg-muted mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section with Interactive Elements */}
      <section className="container px-4 md:px-6 py-12">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground opacity-90" />
          <CardContent className="relative z-10 flex flex-col items-center text-center p-8 md:p-12">
            <div className="rounded-full bg-background/10 p-3 mb-4">
              <Zap className="h-6 w-6 text-background" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-background">
              Stay Ahead of the Curve
            </h2>
            <p className="mb-6 max-w-[600px] text-background/90">
              Get weekly tech insights delivered straight to your inbox. Join our community 
              of tech enthusiasts and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/70"
              />
              <Button 
                variant="secondary"
                className="bg-background text-primary hover:bg-background/90"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


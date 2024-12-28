import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Clock, MessageSquare, ThumbsUp } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { CommentForm } from "@/components/comment-form"
import { ShareButtons } from "@/components/share-buttons"

interface Post {
  title: string
  excerpt: string
  content: string
  date: string
}

type PageProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}

async function getPost(slug: string): Promise<Post> {
  // This would typically be a database or API call
  // Simulated async data fetch
  await new Promise(resolve => setTimeout(resolve, 100)) // Simulate network delay
  
  return {
    title: `${slug.replace(/-/g, ' ')} - TechInsight Hub`,
    excerpt: "Read our latest blog post about technology and innovation",
    content: "This is the blog post content...",
    date: new Date().toISOString(),
  }
}

export default async function BlogPost({ params, searchParams }: PageProps) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  const post = await getPost(resolvedParams.slug)
  const postDate = resolvedSearchParams.date?.toString() || new Date().toLocaleDateString()

  return (
    <article className="container max-w-4xl py-12">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <Link href="/blog" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <ShareButtons />
        </div>

        <div className="space-y-6">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image
              src="/web.jpeg"
              alt={post.title}
              className="object-cover"
              fill
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold capitalize">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="inline-flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {postDate}
              </span>
              <Separator orientation="vertical" className="h-4" />
              <span className="inline-flex items-center">
                <MessageSquare className="mr-1 h-4 w-4" />
                5 comments
              </span>
              <Button variant="ghost" size="sm" className="gap-2">
                <ThumbsUp className="h-4 w-4" />
                123
              </Button>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              This is a comprehensive blog post about modern web development. It covers
              various aspects of building websites and applications using the latest
              technologies and best practices.
            </p>
            <h2>Getting Started with Web Development</h2>
            <p>
              When beginning your journey in web development, it&apos;s important to
              understand the fundamental technologies that power the modern web. This
              includes HTML, CSS, and JavaScript, as well as modern frameworks and
              tools that make development more efficient.
            </p>
            <h2>Modern Development Practices</h2>
            <p>
              Today&apos;s web development landscape is filled with powerful tools and
              frameworks that help developers build better applications faster. We&apos;ll
              explore some of the most popular options and discuss their pros and cons.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Comments</h2>
          <CommentForm />
          
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">User {i + 1}</h3>
                        <span className="text-sm text-muted-foreground">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>
                      <p className="mt-2">
                        This is a thoughtful comment that adds to the discussion and
                        provides valuable insights about the topic.
                      </p>
                      <div className="mt-2 flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <ThumbsUp className="h-3 w-3" />
                          12
                        </Button>
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}


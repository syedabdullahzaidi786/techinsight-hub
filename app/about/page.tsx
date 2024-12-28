import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Trophy, Target, BookOpen } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "Syed Farjad Zahid",
    role: "Editor in Chief",
    image: "/farjad.jpg",
    bio: "Tech enthusiast with 10+ years of experience in digital journalism."
  },
  {
    name: "Syed Abdullah",
    role: "AI Specialist",
    image: "/my-pic.jpg",
    bio: "PhD in Machine Learning, passionate about making AI accessible."
  },
  {
    name: "Rajab Raza",
    role: "Tech Analyst",
    image: "/rajab.png",
    bio: "Former software engineer turned tech analyst and writer."
  }
]

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Monthly Readers"
  },
  {
    icon: BookOpen,
    value: "1000+",
    label: "Articles Published"
  },
  {
    icon: Trophy,
    value: "15+",
    label: "Industry Awards"
  },
  {
    icon: Target,
    value: "24/7",
    label: "Tech Coverage"
  }
]

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <Badge className="bg-primary text-primary-foreground">About Us</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Dedicated to Tech Innovation
            </h1>
            <p className="text-muted-foreground text-lg">
              We&apos;re a team of tech enthusiasts, researchers, and writers committed to bringing 
              you the latest insights in technology and innovation.
            </p>
            <div className="flex gap-4">
              <Link href="/blog">
                <Button size="lg">
                  Read Our Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/team.jpg"
              alt="Team at work"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <stat.icon className="h-8 w-8 mb-2 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The people behind the stories and insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground opacity-90" />
          <CardContent className="relative z-10 p-8 md:p-12 text-background">
            <div className="max-w-[600px] mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-background/90">
                To demystify technology and make it accessible to everyone. We believe in 
                delivering accurate, insightful, and engaging content that helps our readers 
                stay ahead in the fast-paced world of technology.
              </p>
              <Link href="/blog">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90"
                >
                  Explore Our Content
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


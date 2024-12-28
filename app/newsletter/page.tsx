"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ArrowRight, Mail, Zap, Bell, Star } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  preferences: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Please select at least one preference",
  }),
})

const preferences = [
  {
    id: "ai",
    label: "Artificial Intelligence & Machine Learning",
  },
  {
    id: "web",
    label: "Web Development & Design",
  },
  {
    id: "security",
    label: "Cybersecurity Updates",
  },
  {
    id: "cloud",
    label: "Cloud Computing & DevOps",
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Weekly Tech Insights",
    description: "Get the latest tech news and analysis delivered to your inbox"
  },
  {
    icon: Bell,
    title: "Exclusive Updates",
    description: "Be the first to know about breakthrough technologies"
  },
  {
    icon: Star,
    title: "Premium Content",
    description: "Access to subscriber-only articles and resources"
  }
]

export default function NewsletterPage() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferences: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Subscription Successful!",
      description: "Thank you for subscribing to our newsletter.",
    })
    console.log(values)
  }

  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">
              Stay Informed with Tech Insights
            </h1>
            <p className="text-muted-foreground text-lg">
              Subscribe to our newsletter and receive curated content about the latest 
              technological innovations, trends, and insights.
            </p>
          </div>

          <div className="grid gap-6">
            {benefits.map((benefit, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex gap-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input className="pl-9" placeholder="Enter your email" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferences"
                  render={() => (
                    <FormItem>
                      <FormLabel>Content Preferences</FormLabel>
                      <div className="grid gap-4">
                        {preferences.map((preference) => (
                          <FormField
                            key={preference.id}
                            control={form.control}
                            name="preferences"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={preference.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(preference.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, preference.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== preference.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {preference.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


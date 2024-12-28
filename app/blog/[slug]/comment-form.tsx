"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export function CommentForm() {
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the comment to your backend
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Comment submitted",
        description: "Your comment has been successfully posted.",
      })
      
      setComment("")
    } catch {
      toast({
        title: "Error",
        description: "There was a problem submitting your comment.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Leave a Comment</h3>
        <Textarea
          placeholder="Share your thoughts..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="resize-none"
        />
      </div>
      <Button 
        type="submit" 
        disabled={!comment || isSubmitting}
        className="gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Submitting...
          </>
        ) : (
          'Post Comment'
        )}
      </Button>
    </form>
  )
}


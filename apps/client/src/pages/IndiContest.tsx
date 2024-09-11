import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp } from "lucide-react"

// This would typically come from an API or database
const initialSubmissions = [
  { id: 1, title: "Sunset Serenity", author: "Alice Johnson", votes: 24, imageUrl: "/placeholder.svg?height=100&width=200" },
  { id: 2, title: "Urban Jungle", author: "Bob Smith", votes: 18, imageUrl: "/placeholder.svg?height=100&width=200" },
  { id: 3, title: "Misty Mountains", author: "Charlie Brown", votes: 32, imageUrl: "/placeholder.svg?height=100&width=200" },
  { id: 4, title: "Ocean's Whisper", author: "Diana Prince", votes: 15, imageUrl: "/placeholder.svg?height=100&width=200" },
]

export default function ContestSubmissionsPage() {
  const [submissions, setSubmissions] = useState(initialSubmissions)

  const handleVote = (id: number) => {
    setSubmissions(submissions.map(sub =>
      sub.id === id ? { ...sub, votes: sub.votes + 1 } : sub
    ))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Photography Contest: "Nature's Beauty"</h1>
      <p className="text-muted-foreground mb-6">
        Explore the stunning submissions capturing the essence of nature's beauty. Vote for your favorites!
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {submissions.map((submission) => (
          <Card key={submission.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <img
                src={submission.imageUrl}
                alt={submission.title}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle>{submission.title}</CardTitle>
              <CardDescription>by {submission.author}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 bg-muted/50">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${submission.author}`} />
                  <AvatarFallback>{submission.author[0]}</AvatarFallback>
                </Avatar>
                <Badge variant="secondary">{submission.votes} votes</Badge>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleVote(submission.id)}
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                Vote
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

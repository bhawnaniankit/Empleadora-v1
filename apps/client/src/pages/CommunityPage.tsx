import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Bell, MessageSquare, Users, ThumbsUp, Share2 } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "Graphic Design", "Writing", "Marketing", "Video Editing", "Mobile Apps", "UI/UX Design", "Data Analysis"].map((category) => (
                  <Badge key={category} variant="secondary" className="text-sm py-1 px-3">
                    {category}
                  </Badge>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Recent Discussions</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Best practices for client communication",
                    author: "Emily Chen",
                    avatar: "EC",
                    date: "2 hours ago",
                    category: "Client Relations",
                    excerpt: "Effective communication is key to successful freelancing. I've compiled a list of best practices that have helped me maintain great relationships with clients. What are your top tips?",
                    replies: 23,
                    views: 156,
                    likes: 42,
                  },
                  {
                    title: "How to price your freelance services",
                    author: "Michael Ross",
                    avatar: "MR",
                    date: "1 day ago",
                    category: "Business",
                    excerpt: "Pricing can be tricky, especially for newcomers. I'm sharing my journey from underpricing to finding the right balance. Let's discuss different pricing strategies and how to communicate value to clients.",
                    replies: 45,
                    views: 302,
                    likes: 78,
                  },
                  {
                    title: "Tools for time tracking and productivity",
                    author: "Sarah Johnson",
                    avatar: "SJ",
                    date: "3 days ago",
                    category: "Productivity",
                    excerpt: "I've tried various time tracking tools over the years, and I want to share my experiences. From simple timers to comprehensive project management suites, what tools have worked best for you?",
                    replies: 18,
                    views: 89,
                    likes: 31,
                  },
                  {
                    title: "Navigating cultural differences in international freelancing",
                    author: "Carlos Mendoza",
                    avatar: "CM",
                    date: "5 days ago",
                    category: "International Work",
                    excerpt: "Working with clients from different cultures can be both rewarding and challenging. I'd like to open a discussion on cultural sensitivity, communication styles, and how to build strong cross-cultural professional relationships.",
                    replies: 27,
                    views: 134,
                    likes: 56,
                  },
                  {
                    title: "The future of AI in freelancing: threat or opportunity?",
                    author: "Alex Patel",
                    avatar: "AP",
                    date: "1 week ago",
                    category: "Technology",
                    excerpt: "AI is rapidly changing many industries, including freelancing. Let's discuss how AI might impact our work, potential new opportunities, and strategies to stay relevant in an AI-enhanced marketplace.",
                    replies: 62,
                    views: 405,
                    likes: 93,
                  },
                ].map((discussion, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${discussion.avatar}`} alt={discussion.author} />
                            <AvatarFallback>{discussion.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{discussion.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                              Posted by {discussion.author} • {discussion.date}
                            </p>
                          </div>
                        </div>
                        <Badge>{discussion.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{discussion.excerpt}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span className="mr-4">{discussion.replies} replies</span>
                        <Users className="h-4 w-4 mr-1" />
                        <span className="mr-4">{discussion.views} views</span>
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{discussion.likes} likes</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" size="sm">
                        Read more
                      </Button>
                      <div>
                        <Button variant="ghost" size="icon">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <aside className="w-full lg:w-80 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Alice Johnson", contributions: 156 },
                    { name: "Bob Smith", contributions: 129 },
                    { name: "Carol Williams", contributions: 98 },
                    { name: "David Brown", contributions: 87 },
                    { name: "Eva Garcia", contributions: 75 },
                  ].map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${contributor.name.charAt(0)}`} alt={contributor.name} />
                          <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{contributor.name}</span>
                      </div>
                      <Badge variant="secondary">{contributor.contributions}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Members:</span>
                    <span className="font-semibold">12,345</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discussions:</span>
                    <span className="font-semibold">3,456</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comments:</span>
                    <span className="font-semibold">78,901</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}

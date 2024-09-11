import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Briefcase, Clock, DollarSign, Search, Trophy, Users } from "lucide-react"
import { Link } from "react-router-dom";

export default function ContestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <div className=" flex justify-between">
              <h1 className="text-3xl font-bold mb-6">Active Contests</h1>
              <Button><Link to={"/addcontest"}>Add Contest</Link></Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input placeholder="Search contests..." className="flex-grow" />
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="prize">Highest Prize</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(6)].map((_, i) => (
                <Link to={"/contest/fdbd945d-2052-43cf-9262-36fb36279a9c"}>
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        <span>Logo Design for Tech Startup</span>
                        <Badge variant="secondary">Design</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Create a modern and innovative logo for a cutting-edge tech startup in the AI industry.</p>
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <Trophy className="w-4 h-4 mr-1" />
                          <span>$500</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>24 entries</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>3 days left</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">View Contest</Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <aside className="w-full md:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-72">
                  <div className="space-y-2">
                    {['Design', 'Writing', 'Development', 'Marketing', 'Video & Animation', 'Music & Audio', 'Business', 'Data'].map((category) => (
                      <Button key={category} variant="ghost" className="w-full justify-start">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {category}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Featured Contests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Website Redesign</h3>
                        <p className="text-sm text-muted-foreground">$1000 Prize</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}

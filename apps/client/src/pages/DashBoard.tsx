import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Clock, DollarSign, CheckCircle, AlertCircle, PieChart, Calendar as CalendarIcon } from 'lucide-react'

const earnings = [
  { name: 'Jan', amount: 1200 },
  { name: 'Feb', amount: 1800 },
  { name: 'Mar', amount: 2200 },
  { name: 'Apr', amount: 2700 },
  { name: 'May', amount: 3200 },
  { name: 'Jun', amount: 3800 },
]

const projects = [
  { id: 1, name: 'E-commerce Website', client: 'TechCorp', dueDate: '2023-07-15', status: 'In Progress', progress: 65 },
  { id: 2, name: 'Mobile App UI Design', client: 'StartupX', dueDate: '2023-07-22', status: 'In Progress', progress: 40 },
  { id: 3, name: 'SEO Optimization', client: 'LocalBiz', dueDate: '2023-07-10', status: 'Completed', progress: 100 },
  { id: 4, name: 'Blog Redesign', client: 'FashionHub', dueDate: '2023-07-30', status: 'Not Started', progress: 0 },
]

export default function FreelancerDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Freelancer Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$14,900</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 due this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,200</div>
            <p className="text-xs text-muted-foreground">3 invoices pending</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Earnings Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={earnings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Project Status</CardTitle>
          <CardDescription>Overview of your current projects</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="in-progress" className="w-full">
            <TabsList>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="not-started">Not Started</TabsTrigger>
            </TabsList>
            <TabsContent value="in-progress">
              {projects.filter(project => project.status === 'In Progress').map(project => (
                <div key={project.id} className="mb-4 grid grid-cols-[1fr_100px_100px_100px] items-center gap-4">
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                  </div>
                  <div className="text-right">{project.dueDate}</div>
                  <Progress value={project.progress} className="w-[100px]" />
                  <Button size="sm">Update</Button>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="completed">
              {projects.filter(project => project.status === 'Completed').map(project => (
                <div key={project.id} className="mb-4 grid grid-cols-[1fr_100px_100px_100px] items-center gap-4">
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                  </div>
                  <div className="text-right">{project.dueDate}</div>
                  <Progress value={project.progress} className="w-[100px]" />
                  <Button size="sm" variant="outline">Details</Button>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="not-started">
              {projects.filter(project => project.status === 'Not Started').map(project => (
                <div key={project.id} className="mb-4 grid grid-cols-[1fr_100px_100px_100px] items-center gap-4">
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                  </div>
                  <div className="text-right">{project.dueDate}</div>
                  <Progress value={project.progress} className="w-[100px]" />
                  <Button size="sm">Start</Button>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

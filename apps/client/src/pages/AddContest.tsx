import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Clock } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddEventPage() {
  const [date, setDate] = useState<Date>()
  const [title, setTitle] = useState()
  const [des, setDes] = useState()
  const navigate = useNavigate()


  return (
    <div className=" h-screen pt-9 container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Contest</h1>
      <form className="space-y-4">
        <div>
          <Label htmlFor="eventName">Contest Name</Label>
          <Input onChange={(e: any) => { setTitle(e.target.value) }} id="eventName" placeholder="Enter event name" required />
        </div>

        <div>
          <Label htmlFor="eventDate">Deadline</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a deadline</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="eventTime">Time</Label>
          <div className="relative">
            <Input id="eventTime" type="time" required />
            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>


        <div>
          <Label htmlFor="eventDescription">Description</Label>
          <Textarea onChange={(e: any) => { setDes(e.target.value) }} id="eventDescription" placeholder="Enter event description" />
        </div>

        <Button onClick={async () => {
          try {
            console.log(title, des)
            const res = await axios.post("http://localhost:8080/api/v1/contest/create", { title: title, description: des });
            console.log(res.data)
            navigate(`/contest/${res.data.id}`);
          } catch (e) {
            console.log(e);
          }
        }} type="submit" className="w-full">Add Contest</Button>
      </form>
    </div>
  )
}

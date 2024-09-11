import { useState } from 'react'
import { Search, Star, ChevronDown } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function FreelancerPage() {
  const [minHourlyRate, setMinHourlyRate] = useState(10)

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Freelancers</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 w-full"
            placeholder="Search freelancers by skill, name, or keyword"
          />
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Category</h2>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="writing">Writing</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Min. Hourly Rate</h2>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[minHourlyRate]}
              onValueChange={(value) => setMinHourlyRate(value[0])}
            />
            <p className="mt-2">${minHourlyRate}/hour</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Skills</h2>
            <div className="space-y-2">
              {['JavaScript', 'React', 'Node.js', 'Python', 'UI/UX Design'].map((skill) => (
                <label key={skill} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {skill}
                </label>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <img
                    src={`https://picsum.photos/seed/${index}/64/64`}
                    alt="Freelancer"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <p className="text-gray-600">Full Stack Developer</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">$45/hr</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1">4.9 (120 reviews)</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Experienced full stack developer with 5+ years of experience in React, Node.js, and Python.
                Specialized in building scalable web applications and RESTful APIs.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'].map((skill) => (
                  <span key={skill} className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <Button className="mt-4">View Profile</Button>
            </div>
          ))}

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mr-2">Previous</Button>
            <Button variant="outline" className="mr-2">1</Button>
            <Button variant="outline" className="mr-2">2</Button>
            <Button variant="outline" className="mr-2">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </main>
      </div>
    </div>
  )
}

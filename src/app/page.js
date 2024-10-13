"use client"

import {Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      <div className="p-4">
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {["All", "Textbooks", "Clothes", "Furniture", "Electronics"].map((category) => (
            <Button key={category} variant="outline" className="flex-shrink-0">
              {category}
            </Button>
          ))}
        </div>
        
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {[
            { title: "Calculus Textbook", price: "$45", image: "/placeholder.svg?height=200&width=200" },
            { title: "Desk Lamp", price: "$15", image: "/placeholder.svg?height=200&width=200" },
            { title: "Dorm Fridge", price: "$80", image: "/placeholder.svg?height=200&width=200" },
            { title: "University Hoodie", price: "$30", image: "/placeholder.svg?height=200&width=200" },
            { title: "Chemistry Set", price: "$50", image: "/placeholder.svg?height=200&width=200" },
            { title: "Laptop Stand", price: "$25", image: "/placeholder.svg?height=200&width=200" },
            { title: "Wireless Mouse", price: "$20", image: "/placeholder.svg?height=200&width=200" },
            { title: "Backpack", price: "$35", image: "/placeholder.svg?height=200&width=200" },
          ].map((post, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-2">
                <h3 className="font-semibold truncate">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.price}</p>
                <div className="flex justify-end mt-2">
                  <Button size="sm" variant="ghost">
                    <Bookmark className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  </div>
  );
}

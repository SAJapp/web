"'use client'"

import { Search, Filter, Heart, MessageCircle, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CampusCart() {
  return (
    (<div className="max-w-7xl mx-auto bg-white min-h-screen">
      <header
        className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
        <h1 className="text-2xl font-bold">Campus Cart</h1>
        <div className="flex-grow mx-4 max-w-2xl">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for items..."
              className="w-full pl-10 pr-12 py-2 border border-neutral-200 border-gray-300 rounded-full dark:border-neutral-800" />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Button size="icon" variant="ghost" className="absolute right-2 top-1.5">
              <Filter className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Button size="icon" variant="ghost">
          <User className="h-6 w-6" />
        </Button>
      </header>
      <div className="p-4">
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {["'All'", "'Textbooks'", "'Clothes'", "'Furniture'", "'Electronics'"].map((category) => (
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
          ].map((item, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-2">
                <h3 className="font-semibold truncate">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.price}</p>
                <div className="flex justify-between mt-2">
                  <Button size="sm" variant="ghost">
                    <Heart className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button size="sm" variant="ghost">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav
        className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around">
        <Button variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 01-1 1h-3m-6 0a1 001-1v-4a1 011-1h2a1 011 1v4a1 1m-6 0h6" />
          </svg>
        </Button>
        <Button variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 00-6.364 0z" />
          </svg>
        </Button>
        <Button variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4" />
          </svg>
        </Button>
        <Button variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 012-2h14a2 012 2v8a2 01-2 2h-5l-5 5v-5z" />
          </svg>
        </Button>
        <Button variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 018 0zM12 14a7 7 00-7 7h14a7 00-7-7z" />
          </svg>
        </Button>
      </nav>
    </div>)
  );
}
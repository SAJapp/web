"use client";

import { Search, Filter, Bookmark , User, House } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookmarkCheck } from 'lucide-react';
import { useState } from 'react'

export function CampusCart() {

  const [savedItems, setSavedItems] = useState({});
  const [clicked, setClicked] = useState({}); // For managing the pop animation

  // Function to toggle saving an item
  const toggleSaveItem = (index) => {
    setSavedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    // Trigger the pop animation
  setClicked((prev) => ({
    ...prev,
    [index]: true,
  }));

  // Reset the pop animation after the duration of the animation
  setTimeout(() => {
    setClicked((prev) => ({
      ...prev,
      [index]: false,
    }));
  }, 200); // Should match the CSS transition time
  };

  

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
              className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-full " />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <Button size="icon" variant="ghost">
          <User className="h-6 w-6" />
        </Button>
      </header>
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
            <div key={index} className="border rounded-lg overflow-visible">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-2">
                <h3 className="font-semibold truncate">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.price}</p>
                <div className="flex justify-end mt-2">
                <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleSaveItem(index)}
                    className={`pop-animation ${clicked[index] ? 'active' : ''}`} // Apply animation class
                  >
                    {savedItems[index] ? (
                      <BookmarkCheck className="h-4 w-4 mr-1 text-red-600" /> // Filled and dark version of Bookmark
                    ) : (
                      <Bookmark className="h-4 w-4 mr-1 text-gray-400" /> // Default Bookmark
                    )}
                    {savedItems[index] ? "Saved" : "Save"}
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
         <House/>
        </Button>
        <Button variant="ghost">
         <Bookmark/>
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
      </nav>
    </div>)
  );

};

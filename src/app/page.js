"use client"

import { Button } from "@/components/ui/button"
import DisplayBoxes from '@/components/Common/DisplayBox';
import { useEffect, useState } from "react";

export default function Home() {
  const [postData, setPostData] = useState([]);

  const Fetch = async () => {
    try {
      const res = await fetch(`/api/getAllPosts`, { method: "GET" });
      const data = await res.json();
      setPostData(data.data);
    } catch (e) {
      console.warn("Error: ", e);
    }
    console.log(postData);
  };

  useEffect(() => {
    Fetch();
  }, []);
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
          {postData.map((post, index) => (
            <DisplayBoxes post={post} index={index} />
          ))}
        </div>
      </div>
  </div>
  );
}

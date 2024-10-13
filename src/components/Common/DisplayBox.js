import { Bookmark, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DisplayBoxes({ post, index }) {
  const pictureSrc = Array.isArray(post.pictures) && post.pictures.length > 0 
  ? post.pictures[0] 
  : post.pictures;
  return (
      <div key={index} className="border rounded-lg overflow-hidden">
        <img
          src={pictureSrc}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-2">
          <h3 className="font-semibold truncate">{post.title}</h3>
          <p className="text-sm text-gray-600">$ {post.price}</p>
          <div className="flex justify-between mt-2">
            <Button size="sm" variant="ghost">
              <Bookmark className="h-4 w-4 mr-1" />
              Save
            </Button>
            <Button size="sm" variant="ghost">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
  );
}

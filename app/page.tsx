"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data/post.json')
        .then((response) => response.json())
        .then((data) => setPosts(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full h-full p-5">
      {posts.length == 0 ? 
        <div> Pas encore de post</div>
        :
        <div className="flex flex-col gap-2">
        {
          posts.map((post: any) => {
            return(
              <div key={post.id} className="flex flex-col rounded-lg bg-gradient-to-r from-red-400 to-pink-500">
                <img  className="rounded-lg w-60 h-60" src={`${post.image_url}`} alt="" />
                <div className="flex flex-col items-center justify-center text-white rounded-bl-lg rounded-br-lg">
                  <span>{post.author}</span>
                  <span>{post.title}</span>
                </div>
              </div>
            )
          })
        }
        </div>
      }
    </div>
  );
}

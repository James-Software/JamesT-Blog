"use client"

import { Button } from "../components/ui/button"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-6xl font-[Inter]">Hi, I'm James.</h1>
      <br></br>
      <Button onClick={() => router.push('/posts')} variant="outline" className="font-[Inter] cursor-pointer" >
        View my recent posts
      </Button>
    </div>
  );
}
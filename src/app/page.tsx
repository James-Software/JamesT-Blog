import { Button } from "../components/ui/button"
import { MoveUp } from 'lucide-react';

export default function Home() {
 return (
   <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <h1 className="text-6xl font-[Inter]">Hi, I'm James.</h1>
     <br></br>
     <Button variant="outline" className="font-[Inter]" >
      View my recent posts
     </Button>
   </div>
 );
}
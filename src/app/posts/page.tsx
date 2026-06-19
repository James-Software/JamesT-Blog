import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

type Post = {
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: posts } = await supabase.from('posts').select()
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black p-6">
      <ul className="w-full max-w-2xl space-y-4">
        {posts?.map((post: Post) => (
          <li 
            key={post.id} 
            className="p-5 bg-white border rounded-xl shadow-sm border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800"
          >
            <a className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2 " href={`/posts/${post.id}`} >
              {post.title}
            </a>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {post.body.length > 120 ? `${post.body.substring(0, 120)}...` : post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
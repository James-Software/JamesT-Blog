import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

type ParamProps = {
    params: Promise<{ id: string }>;
}

export default async function Home({params} : ParamProps) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    type Post = {
        id: number;
        title: string;
        body: string;
    };

    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .returns<Post[]>() // <-- Change this to an array
        .single();

    // Displayed if post doesn't exist.
    if (error || !post) {
        return (
            <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-6">
                <p className="text-zinc-900 dark:text-zinc-100">Post not found.</p>
            </div>
        )
    }

    return(
        <>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
        </>
    );
}
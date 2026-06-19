type ParamProps = {
    params: Promise<{ id: string }>;
}

export default async function Home({params} : ParamProps) {

    // We do not recieve the id instantly, so we must do this
    const resolvedParams = await params;
    const id = resolvedParams.id;

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-3xl font-[Inter]">Post #{id}</h1>
        </div>
    );
}
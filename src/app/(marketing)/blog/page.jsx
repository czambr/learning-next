import TitlePage from "@/components/pagesComponents/TitlePage";
import Link from "next/link";
import React from "react";

export const POST = [
    {
        id: 1,
        title: "Post 1",
        slug: "post-1",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        id: 2,
        title: "Post 2",
        slug: "post-2",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        id: 3,
        title: "Post 3",
        slug: "post-3",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
];

function Blog() {
    return (
        <>
            <TitlePage title="Blog" />
            <main className="container mx-auto">
                <div className="grid gap5">
                    {POST.map(post => (
                        <div className="shadown rounded-md p-5" key={post.id}>
                            <h2 className="text-2xl font-bold">{post.title}</h2>
                            <Link href={`/blog/${post.slug}`}>
                                Mas información
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Blog;

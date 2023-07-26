"use client";

import TitlePage from "@/components/pagesComponents/TitlePage";
import React from "react";
import { POST } from "../page";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Slug({ params }) {
    const { slug } = params;
    const post = POST.find(post => post.slug == slug);

    const router = useRouter();
    const handleClick = () => {
        router.back();
    };
    return (
        <>
            <TitlePage title="Slug" />
            <p className="text-center">{params.slug}</p>
            <h2 className="text-center">{post.title}</h2>
            <p className="text-center">{post.content}</p>
            <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}>
                Retroceder
            </button>
        </>
    );
}

export default Slug;

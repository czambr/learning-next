import TitlePage from "@/components/pagesComponents/TitlePage";
import React from "react";

function Shop({ params }) {
    console.log(params);
    return (
        <>
            <TitlePage title="Shop" />
            <p className="text-center">{params.Shop}</p>
        </>
    );
}

export default Shop;

"use client"

import Head from "next/head";
import setMetadata from "@/shared/consts/setMetaData";

export const metadata = setMetadata({
    title: "Bio"
});

export default function PageBio() {

    return (
        <>
            <Head>
                <title>Siarhei Kryutsou | About</title>
            </Head>
            <h1>Page About</h1>
        </>
    )
}

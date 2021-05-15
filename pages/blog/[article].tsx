import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React from 'react'

export default function BlogPage(): JSX.Element {
    const { query } = useRouter()
    return (
        <>
            <Head>
                <title>First Post - {query.article}</title>
            </Head>
            <h1>{query.article}</h1>
            <h2>This is a blog post!</h2>
        </>
    )
}

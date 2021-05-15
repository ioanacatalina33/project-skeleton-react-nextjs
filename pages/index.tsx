import Head from 'next/head'
import Link from 'next/link'

import { articles } from 'utils'

export const Home = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div style={{ textAlign: 'left' }}>
                    <h1>H1 text</h1>
                    <h2>H2 text</h2>
                    <h3>H3 text</h3>
                    <h4>H4 text</h4>
                    Let&apos;s see if this link works!{' '}
                    <a href="https://nextjs.org">Next.js!</a>
                    <br />
                    Read{' '}
                    <Link href="/posts/first-post">
                        <a>this page!</a>
                    </Link>
                    <br />
                    <br />
                    <Link href="/buttons">
                        <a>Buttons!</a>
                    </Link>
                    <br />
                    <br />
                    {articles.map((article) => (
                        <div key={article.id}>
                            <Link href={'/blog/' + article.path}>
                                <a>{article.name}</a>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Home

import Head from 'next/head'
import Link from 'next/link'

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>H2 text</h1>
      <h2>H2 text</h2>
      <h3>H3 text</h3>
      <h4>H4 text</h4>
      Let&apos;s see if this link works!{' '}
      <a href="https://nextjs.org">Next.js!</a>
      <h1>
        Read{' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
    </main>
  </div>
)

export default Home

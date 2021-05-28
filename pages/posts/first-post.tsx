import React from 'react'
// import Image from 'next/image'
import { useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

export default function FirstPost(): JSX.Element {
    //testing to see Eslint is working - should have a missing dependency warning
    const test: string[] = []
    useEffect(() => {
        console.log(test)
    }, [])

    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <TextComponent>Some custom text</TextComponent>
            <img src="/images/profile.jpg" height={'auto'} alt="Your Name" />
            {/* <Image
                src="/images/profile.jpg"
                layout={'intrinsic'}
                width={'100%'}
                height={'auto'}
                alt="Your Name"
            /> */}
            <br /> Some more text
        </>
    )
}

const TextComponent = styled.h1`
    font-size: 1.5rem;
    background-color: ${(props) => props.theme.colors.primary.normal};
`

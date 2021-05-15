import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { Button } from 'components/UI/Button'

export default function Buttons(): JSX.Element {
    return (
        <>
            <Head>
                <title>Buttons</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ButtonsContainer>
                <div>
                    <h3>Normal</h3>

                    <Button
                        text="Primary"
                        variant={(v) => v.Primary}
                        marginOffset={{ x: 2.5, y: 0.5 }}
                    />
                    <br />
                    <Button
                        text="Secondary"
                        variant={(v) => v.Secondary}
                        marginOffset={{ x: 2.5, y: 0.5 }}
                    />
                    <br />
                    <Button
                        text="Neutral"
                        variant={(v) => v.Neutral}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                    />
                    <br />
                    <br />
                    <Button
                        text="Primary outline"
                        variant={(v) => v.OutlinePrimary}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                    />
                    <br />
                    <Button
                        text="Secondary Outline"
                        variant={(v) => v.OutlineSecondary}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                    />
                    <br />
                    <Button
                        text="Neutral Outline"
                        variant={(v) => v.OutlineNeutral}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                    />
                </div>

                <div>
                    <h3> Disabled</h3>

                    <Button
                        text="Primary"
                        variant={(v) => v.Primary}
                        marginOffset={{ x: 2.5, y: 0.5 }}
                        disabled
                    />
                    <br />
                    <Button
                        text="Secondary"
                        variant={(v) => v.Secondary}
                        marginOffset={{ x: 2.5, y: 0.5 }}
                        disabled
                    />
                    <br />
                    <Button
                        text="Neutral"
                        variant={(v) => v.Neutral}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                        disabled
                    />
                    <br />
                    <br />
                    <Button
                        text="Primary outline"
                        variant={(v) => v.OutlinePrimary}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                        disabled
                    />
                    <br />
                    <Button
                        text="Secondary Outline"
                        variant={(v) => v.OutlineSecondary}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                        disabled
                    />
                    <br />
                    <Button
                        text="Neutral Outline"
                        variant={(v) => v.OutlineNeutral}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                        disabled
                    />
                </div>

                <div>
                    <h3> Active</h3>

                    <Button
                        text="Primary"
                        variant={(v) => v.Primary}
                        marginOffset={{ x: 2.5, y: 0.5 }}
                        active
                    />
                    <br />
                    <Button
                        text="Secondary"
                        variant={(v) => v.Secondary}
                        marginOffset={{ x: 2.5, y: 0.5 }}
                        active
                    />
                    <br />
                    <Button
                        text="Neutral"
                        variant={(v) => v.Neutral}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                        active
                    />
                    <br />
                    <br />
                    <Button
                        text="Primary outline"
                        variant={(v) => v.OutlinePrimary}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                        active
                    />
                    <br />
                    <Button
                        text="Secondary Outline"
                        variant={(v) => v.OutlineSecondary}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                        active
                    />
                    <br />
                    <Button
                        text="Neutral Outline"
                        variant={(v) => v.OutlineNeutral}
                        marginOffset={{ x: 2.5, y: 0.4 }}
                        active
                    />
                </div>
            </ButtonsContainer>
        </>
    )
}

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
`

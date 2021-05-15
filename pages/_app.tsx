import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, lightTheme } from '../styles'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

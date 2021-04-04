import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, LightTheme } from '../styles'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

import 'styled-components'

import { IColors, H, IButtons, IScreenSizes } from 'styles/themes/types'

declare module 'styled-components' {
    export interface DefaultTheme {
        fontSize: IScreenSizes
        fontWeight: string
        fontFamily: string

        colors: IColors
        buttons: IButtons

        h1: H
        h2: H
        h3: H
        h4: H
    }
}

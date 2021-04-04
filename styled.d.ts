import 'styled-components'

interface Colors {
  background: string
  text: string
  primary: IPalette
  secondary: IPalette
  gray: IPaletteExtended
}
interface IPalette {
  light: string
  normal: string
  dark: string
}
interface IPaletteExtended extends IPalette {
  lightest: string
  darkest: string
}

interface IButton {
  borderRadius: string
  //   bgColor: string //for test
}
interface ScreenSizes {
  sm: string
  md: string
  lg: string
  xl: string
}
interface H {
  size: ScreenSizes
  color: string
  fontWeight: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: string
    fontWeight: string
    fontFamily: string

    colors: Colors
    button: IButton

    h1: H
    h2: H
    h3: H
    h4: H
  }
}

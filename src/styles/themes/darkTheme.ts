import { defaultTheme } from './defaultTheme'

export const darkTheme = {
    colors: {
        background: '#363537',
        text: '#FAFAFA',
        ...defaultTheme.colors,
    },
    ...defaultTheme,
}

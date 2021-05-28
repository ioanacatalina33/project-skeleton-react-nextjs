import { DefaultTheme } from 'styled-components'

import { IColors } from './types'

const colors: IColors = {
    background: '#EFEFEF',
    text: '#363537',
    white: '#ffffff',
    black: '#000000',
    primary: {
        normal: '#fec400',
        light: '#ffdb5f',
        dark: '#d7a600',
    },
    secondary: {
        normal: '#001d87',
        light: '#002edb',
        dark: '#001254',
    },
    gray: {
        lightest: '#d7d7d7',
        light: '#b3b3b3',
        normal: '#797979',
        dark: '#323232',
        darkest: '#1d1d1d',
    },
}

const fontSize = { default: '1.2rem' }

const buttonCommon = {
    fontSize: { default: '1.2rem' },
    padding: { default: '0.8rem 2rem' },
    margin: { default: '0' },
    borderRadius: '0.8rem',
    border: '0',
    // width?:
    // maxWidth?:
    // minWidth?:
}

export const defaultTheme: DefaultTheme = {
    // FONT
    fontSize: fontSize,
    fontWeight: 'normal',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif;",

    //COLORS
    colors: colors,

    // BUTTONS
    buttons: {
        transition: 'all 0.25s linear;',
        primary: {
            ...buttonCommon,
            color: colors.white,
            background: colors.primary.normal,
            disabled: {
                background: colors.gray.light,
            },
            hover: {
                background: colors.primary.light,
            },
            active: {
                background: colors.primary.dark,
            },
        },

        secondary: {
            ...buttonCommon,
            color: colors.white,
            background: colors.secondary.normal,
            disabled: {
                background: colors.gray.light,
            },
            hover: {
                background: colors.secondary.light,
            },
            active: {
                background: colors.secondary.dark,
            },
        },

        neutral: {
            ...buttonCommon,
            color: colors.white,
            background: colors.gray.normal,
            disabled: {
                background: colors.gray.light,
            },
            hover: {
                background: colors.gray.light,
            },
            active: {
                background: colors.gray.dark,
            },
        },

        outlinePrimary: {
            ...buttonCommon,
            color: colors.primary.normal,
            background: 'transparent',
            border: '1px solid ' + colors.primary.normal,
            disabled: {
                color: colors.gray.light,
                border: '1px solid ' + colors.gray.light,
            },
            hover: {
                background: colors.primary.normal,
                color: colors.white,
            },
            active: {
                color: colors.white,
                background: colors.primary.normal,
            },
        },

        outlineSecondary: {
            ...buttonCommon,
            color: colors.secondary.normal,
            background: 'transparent',
            border: '1px solid ' + colors.secondary.normal,
            disabled: {
                color: colors.gray.light,
                border: '1px solid ' + colors.gray.light,
            },
            hover: {
                background: colors.secondary.normal,
                color: colors.white,
            },
            active: {
                color: colors.white,
                background: colors.secondary.normal,
            },
        },

        outlineNeutral: {
            ...buttonCommon,
            color: colors.gray.normal,
            background: 'transparent',
            border: '1px solid ' + colors.gray.normal,
            disabled: {
                color: colors.gray.light,
                border: '1px solid ' + colors.gray.light,
            },
            hover: {
                background: colors.gray.normal,
                color: colors.white,
            },
            active: {
                color: colors.white,
                background: colors.gray.normal,
            },
        },
    },

    // TITLES
    h1: {
        fontSize: {
            default: '2.6rem',
            sm: '1.2rem',
            md: '2rem',
            lg: '2.6rem',
            xl: '3rem',
        },
    },

    h2: {
        fontSize: {
            default: '2.2rem',
            sm: '1.2rem',
            md: '1.6rem',
            lg: '2.2rem',
            xl: '2.5rem',
        },
    },

    h3: {
        color: colors.gray.darkest,
        fontWeight: '600',
        fontSize: {
            default: '1.6rem',
            sm: '1.2rem',
            md: '1.4rem',
            lg: '1.6rem',
            xl: '2rem',
        },
    },

    h4: {
        color: colors.gray.darkest,
        fontWeight: 'normal',
        fontSize: {
            default: '1.4rem',
            sm: '1.2rem',
            md: '1.2rem',
            lg: '1.4rem',
            xl: '1.6rem',
        },
    },
}

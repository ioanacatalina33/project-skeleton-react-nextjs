import { DefaultTheme } from 'styled-components'

export const LightTheme: DefaultTheme = {
  // toggleBorder: '#FFF',
  // gradient: 'linear-gradient(#39598A, #79D7ED)',
  fontSize: '1.2rem',
  fontWeight: 'normal',
  fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif;",

  colors: {
    background: '#E2E2E2',
    text: '#363537',
    primary: {
      normal: '#fec400',
      light: '#ffc911',
      dark: '#d7a600',
    },
    secondary: {
      normal: '#3b3b3b',
      light: '#484a4c',
      dark: '#2a2a2a',
    },
    gray: {
      lightest: '#d7d7d7',
      light: '#b3b3b3',
      normal: '#797979',
      dark: '#323232',
      darkest: '#1d1d1d',
    },
  },

  button: {
    // bgColor: colors.primary.normal,
    borderRadius: '5px',
  },

  h1: {
    color: '#333333',
    fontWeight: 'normal',
    size: {
      sm: '1.2rem',
      md: '2rem',
      lg: '2.6rem',
      xl: '3rem',
    },
  },

  h2: {
    color: '#555555',
    fontWeight: 'normal',
    size: {
      sm: '1.2rem',
      md: '1.6rem',
      lg: '2.2rem',
      xl: '2.5rem',
    },
  },

  h3: {
    color: '#555555',
    fontWeight: '800',
    size: {
      sm: '1.2rem',
      md: '1.4rem',
      lg: '1.8rem',
      xl: '2rem',
    },
  },

  h4: {
    color: '#555555',
    fontWeight: 'normal',
    size: {
      sm: '1.2rem',
      md: '1.2rem',
      lg: '1.6rem',
      xl: '1.6rem',
    },
  },
}

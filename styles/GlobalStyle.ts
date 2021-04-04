import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-size: ${theme.fontSize};
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      font-family: ${theme.fontFamily};

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      transition: all 0.25s linear;
    }

    h1 {
      font-size: ${theme.h1.size.lg};
      font-weight: ${theme.h1.fontWeight};
      color: ${theme.h1.color};
    }
  `}
  `

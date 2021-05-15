import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
      body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;

          font-size: ${theme.fontSize.default};
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
          font-size: ${theme.h1.fontSize.default};
          font-weight: ${theme.h1.fontWeight};
          color: ${theme.h1.color};
      }

      h2 {
          font-size: ${theme.h2.fontSize.default};
          font-weight: ${theme.h2.fontWeight};
          color: ${theme.h2.color};
      }

      h3 {
          font-size: ${theme.h3.fontSize.default};
          font-weight: ${theme.h3.fontWeight};
          color: ${theme.h3.color};
      }

      h4 {
          font-size: ${theme.h4.fontSize.default};
          font-weight: ${theme.h4.fontWeight};
          color: ${theme.h4.color};
      }
  `}
  `

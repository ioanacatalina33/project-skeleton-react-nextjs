import { generateButton } from 'styles/themes/cssGenerators'
import styled, { css } from 'styled-components'

import { ButtonVariants, StyleOffsets } from './Button'

interface StyledButtonProps {
    variant: string
    disabled?: boolean
    active?: boolean
    hasFullWidth?: boolean
    marginOffset?: StyleOffsets
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${({ theme, disabled, active, hasFullWidth, marginOffset, variant }) => css`
        transition: ${theme.buttons.transition}

        cursor: pointer;
        user-select: none;
        text-decoration: none;

        text-align: center;

        &:focus {
            outline: none;
            box-shadow: none;
            outline: -webkit-focus-ring-color auto 0px;
        }


        /* 
        =============
        BUTTON TYPES
        =============
        */
        ${
            variant === ButtonVariants.Primary &&
            generateButton(theme.buttons.primary, disabled, active)
        }
        ${
            variant === ButtonVariants.Secondary &&
            generateButton(theme.buttons.secondary, disabled, active)
        }
        ${
            variant === ButtonVariants.Neutral &&
            generateButton(theme.buttons.neutral, disabled, active)
        }
        ${
            variant === ButtonVariants.OutlinePrimary &&
            generateButton(theme.buttons.outlinePrimary, disabled, active)
        }
        ${
            variant === ButtonVariants.OutlineSecondary &&
            generateButton(theme.buttons.outlineSecondary, disabled, active)
        }
        ${
            variant === ButtonVariants.OutlineNeutral &&
            generateButton(theme.buttons.outlineNeutral, disabled, active)
        }



        ${
            hasFullWidth &&
            css`
                width: 100%;
            `
        }

        /* MARGIN OFFSET */
		${
            marginOffset
                ? css`
                      margin-top: ${marginOffset.top !== undefined &&
                      `${marginOffset.top}rem`};
                      margin-right: ${marginOffset.right !== undefined &&
                      `${marginOffset.right}rem`};
                      margin-bottom: ${marginOffset.bottom !== undefined &&
                      `${marginOffset.bottom}rem`};
                      margin-left: ${marginOffset.left !== undefined &&
                      `${marginOffset.left}rem`};

                      ${marginOffset.x !== undefined &&
                      marginOffset.y !== undefined &&
                      css`
                          margin: ${marginOffset.y}rem ${marginOffset.x}rem;
                      `}
                      ${marginOffset.x !== undefined &&
                      marginOffset.y === undefined &&
                      css`
                          margin-left: ${marginOffset.x}rem;
                          margin-right: ${marginOffset.x}rem;
                      `}
				${marginOffset.y !== undefined &&
                      marginOffset.x === undefined &&
                      css`
                          margin-top: ${marginOffset.y}rem;
                          margin-bottom: ${marginOffset.y}rem;
                      `}
				${marginOffset.all !== undefined &&
                      css`
                          margin: ${marginOffset.all}rem;
                      `}
				${marginOffset.custom !== undefined &&
                      css`
                          margin: ${marginOffset.custom};
                      `}
                  `
                : css`
                      margin: 0;
                  `
        }
    `}
`

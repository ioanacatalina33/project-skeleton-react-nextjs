import { css, FlattenSimpleInterpolation } from 'styled-components'

import { IButton } from './types'

export function generateButton(
    button: IButton,
    disabled: boolean,
    active?: boolean
): FlattenSimpleInterpolation {
    return css`
        font-size: ${button.fontSize.default};
        padding: ${button.padding.default};
        margin: ${button.margin.default};

        width: ${button.width?.default};
        max-width: ${button.maxWidth?.default};
        min-width: ${button.minWidth?.default};

        color: ${button.color};
        background-color: ${button.background};

        border: ${button.border};
        border-radius: ${button.borderRadius};

        ${disabled &&
        css`
            color: ${button.disabled.color};
            background: ${button.disabled.background};
            border: ${button.disabled.border};
            pointer-events: none;
        `}

        ${!disabled &&
        css`
            :hover {
                background-color: ${button.hover.background};
                color: ${button.hover.color};
                border: ${button.hover.border};
            }
        `}


        ${!disabled &&
        css`
            :focus {
                background-color: ${button.focus?.background};
                color: ${button.focus?.color};
                border: ${button.focus?.border};
            }
        `}

        ${!disabled &&
        active &&
        css`
            background-color: ${button.active?.background};
            color: ${button.active?.color};
            border: ${button.active?.border};
            :active {
                background-color: ${button.active?.background};
                color: ${button.active?.color};
                border: ${button.active?.border};
            }
        `}
    `
}

import React from 'react'

import { StyleOffset } from 'utils/types'

import { StyledButton } from './Button.style'

export enum ButtonVariants {
    Primary = 'primary',
    Secondary = 'secondary',
    Neutral = 'neutral',
    OutlinePrimary = 'outline-primary',
    OutlineSecondary = 'outline-secondary',
    OutlineNeutral = 'outline-neutral',
}

export type StyleOffsets = StyleOffset | false

interface ButtonProps {
    text: string
    loading?: boolean
    disabled?: boolean
    active?: boolean
    hasFullWidth?: boolean
    marginOffset?: StyleOffset
    variant?: (type: typeof ButtonVariants) => string
    onClick?: () => void
}

export const Button = ({
    text,
    loading,
    disabled,
    active,
    hasFullWidth,
    marginOffset,
    variant,
    onClick,
}: ButtonProps): JSX.Element => {
    return (
        <StyledButton
            variant={variant ? variant(ButtonVariants) : ButtonVariants.Primary}
            disabled={disabled}
            hasFullWidth={hasFullWidth}
            marginOffset={marginOffset}
            active={active}
            onClick={onClick}
        >
            {loading ? 'loading...' : text}
        </StyledButton>
    )
}

export enum Themes {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface IColors {
    background: string
    text: string
    primary: IPalette
    secondary: IPalette
    gray: IPalette
    white: string
    black: string
}

export interface IPalette {
    lightest?: string
    light: string
    normal: string
    dark: string
    darkest?: string
}

export interface IButtons {
    transition: string
    primary: IButton
    secondary: IButton
    neutral: IButton
    outlinePrimary: IButton
    outlineSecondary: IButton
    outlineNeutral: IButton
}

export interface IButtonColors {
    background?: string
    color?: string
    border?: string
}

export interface IButton {
    color: string
    background: string
    fontSize: IScreenSizes
    padding: IScreenSizes
    margin?: IScreenSizes
    width?: IScreenSizes
    maxWidth?: IScreenSizes
    minWidth?: IScreenSizes
    border?: string
    borderRadius?: string

    disabled: IButtonColors
    hover: IButtonColors
    active?: IButtonColors
    focus?: IButtonColors
}

export interface IScreenSizes {
    default: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
}

export interface H {
    fontSize?: IScreenSizes
    fontWeight?: string
    color?: string
}

export interface ILinkState {
    color?: string
    background?: string
    border?: string
    decoration?: string
}

export interface A {
    fontSize?: IScreenSizes
    fontWeight?: string
    transition?: string
    link?: ILinkState
    hover?: ILinkState
    visited?: ILinkState
    active?: ILinkState
}

type ColorsPaletteType = {
    color?: string,
    backgroundColor?: string
}

type SizeType = {
    width?: string,
    height?: string
}

export type ButtonPropsType = {
    text: string,
    disable?: boolean,
    colorsPalette?: ColorsPaletteType,
    size?: SizeType,
    iconLeft?: string,
    iconRight?: string,
    handler?: () => void,
    outlined?: boolean,
    round?: boolean,
    small?: boolean
}

export type ButtonStylesOutType = {
    color?: string,
    backgroundColor?: string,
    width?: string,
    height?: string
}

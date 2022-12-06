export type InputPropsType = {
    title: string,
    width?: string,
    height?: string,
    value?: string,
    type?: string,
    minValue?: string,
    maxValue?: string,
    minLength?: number,
    maxLength?: number,
    maxFloatLength?: number,
    required?: boolean,
    error?: string,
    disabled?: boolean,
    greyBg?: boolean,
    onChange?: (arg0: any) => void
}

export type GetType = (type: string) => string
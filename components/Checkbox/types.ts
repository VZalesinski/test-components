import { ReactNode } from "react"

export type CheckboxPropsType = {
    label?: string,
    children?: ReactNode,
    disabled?: boolean,
    checked: boolean,
    setChecked: (arg0: boolean) => void
}
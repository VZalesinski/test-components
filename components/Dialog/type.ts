type CollectionType = {
    text: string,
    img: string,
    active: boolean,
    setActive: (arg0: boolean) => void
}

export type DialogPropsType = {
    title: string
    collection: CollectionType[]
}
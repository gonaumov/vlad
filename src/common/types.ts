export interface stateArg {
    activeIndex: number,
    items: Array<any>,
    previousEnabled: boolean,
    nextEnabled: boolean
}

export interface appCallbacks {
    onNextClick(): void,
    onPreviousClick(): void
}

export interface displayItems {
    activeItem: string,
    previousDisabled: boolean,
    nextDisabled: boolean
}

export interface Action {
    type: string
}

export type AppProps = displayItems & appCallbacks;

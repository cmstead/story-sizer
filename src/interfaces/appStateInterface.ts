export interface AppState {
    functionalLayerCounts: {
        verticalCount: number,
        horizontalCount: number
    },
    externalDependencyCount: number
}

export interface StoreState {
    state: AppState
}
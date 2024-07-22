export interface AppState {
    functionalLayerCounts: {
        verticalCount: number,
        horizontalCount: number
    },
    workDescriptionValue: number,
    externalDependencyCount: number,
    criticalPathDepth: number
}

export interface StoreState {
    state: AppState
}
import { AppState } from "../interfaces/appStateInterface"

export const initialState: AppState = {
    functionalLayerCounts: {
        verticalCount: 1,
        horizontalCount: 1
    },
    criticalPathDepth: 0,
    workDescriptionValue: 1,
    externalDependencyCount: 0
}


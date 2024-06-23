import { AppState } from "../interfaces/appStateInterface.ts"
import { actionTypes } from "./constants.ts"
import { initialState } from "./initialAppState.ts"

export function layerCountReducer(state: AppState, action) {
    const name = action.payload.name
    const value = action.payload.value
    
    return {
        ...state,
        functionalLayerCounts: {
            ...state.functionalLayerCounts,
            [name]: value
        }
    }
}

export function externalDependencyCountReducer(state: AppState, action) {
    return {
        ...state,
        externalDependencyCount: action.payload.value
    }
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LAYER_COUNT_UPDATED:
            return layerCountReducer(state, action)
        case actionTypes.DEPENDENCY_COUNT_UPDATED:
            return externalDependencyCountReducer(state, action)
        default:
            return state

    }
}
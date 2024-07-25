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

export function workDescriptionValueReducer(state: AppState, action) {
    return {
        ...state,
        workDescriptionValue: action.payload.value
    }
}

export function criticalPathDepthReducer(state: AppState, action): AppState {
    return {
        ...state,
        criticalPathDepth: action.payload.value
    }
}

export function acceptanceCriteriaCountReducer(state: AppState, action): AppState {
    return {
        ...state,
        acceptanceCriteriaCount: action.payload.value
    }
}

export function regressionRiskCountReducer(state: AppState, action): AppState {
    return {
        ...state,
        regressionRiskCount: action.payload.value
    };
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LAYER_COUNT_UPDATED:
            return layerCountReducer(state, action)
        case actionTypes.DEPENDENCY_COUNT_UPDATED:
            return externalDependencyCountReducer(state, action)
        case actionTypes.WORK_DESCRIPTION_UPDATED:
            return workDescriptionValueReducer(state, action)
        case actionTypes.CRITICAL_PATH_DEPTH_UPDATED:
            return criticalPathDepthReducer(state, action)
        case actionTypes.ACCEPTANCE_CRITERIA_COUNT_UPDATED:
            return acceptanceCriteriaCountReducer(state, action)
        case actionTypes.REGRESSION_RISK_COUNT_UPDATED:
            return regressionRiskCountReducer(state, action)
        default:
            return state

    }
}
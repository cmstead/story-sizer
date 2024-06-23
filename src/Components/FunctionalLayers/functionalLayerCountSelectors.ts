import { StoreState } from "../../interfaces/appStateInterface"

export function verticalCountSelector({ state }: StoreState) {
    return state.functionalLayerCounts.verticalCount
}

export function horizontalCountSelector({ state }: StoreState) {
    return state.functionalLayerCounts.horizontalCount
}
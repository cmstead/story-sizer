import { StoreState } from "../../interfaces/appStateInterface";

export function criticalPathDepthSelector({ state }: StoreState) {
    return state.criticalPathDepth
}
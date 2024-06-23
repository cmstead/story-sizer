import { StoreState } from "../../interfaces/appStateInterface";

export function dependencyCountSelector({ state }: StoreState) {
    return state.externalDependencyCount
}
import { StoreState } from "../../interfaces/appStateInterface"

export function workDescriptionSelector({ state }: StoreState) {
    return state.workDescriptionValue
}
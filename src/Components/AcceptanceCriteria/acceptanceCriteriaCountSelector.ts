import { StoreState } from "../../interfaces/appStateInterface";

export function acceptanceCriteriaCountSelector({ state }: StoreState) {
    return state.acceptanceCriteriaCount
}
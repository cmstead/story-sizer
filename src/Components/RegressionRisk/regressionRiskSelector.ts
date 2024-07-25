import { StoreState } from "../../interfaces/appStateInterface";

export function regressionRiskSelector ({state}: StoreState) {
    return state.regressionRiskCount;
}
import { StoreState } from "../../interfaces/appStateInterface";

export function notesSelector ({state}: StoreState) {
    return state.notes;
}
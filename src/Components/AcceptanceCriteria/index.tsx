import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptanceCriteriaCountSelector } from "./acceptanceCriteriaCountSelector.ts";
import { actionTypes } from "../../services/constants.ts";

export default function AcceptanceCriteria() {
    const acceptanceCriteriaCount = useSelector(acceptanceCriteriaCountSelector);
    const dispatch = useDispatch();

    const updateAcceptanceCriteriaCount = ({ target }) =>
        dispatch({
            type: actionTypes.ACCEPTANCE_CRITERIA_COUNT_UPDATED,
            payload: {
                value: target.value
            }
        });

    return (
        <li>
            <label>Acceptance criteria count:</label>
            <input
                type="number"
                value={acceptanceCriteriaCount}
                min={1}
                onChange={updateAcceptanceCriteriaCount}></input>
        </li>
    )
}
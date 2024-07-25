import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { regressionRiskSelector } from "./regressionRiskSelector.ts";
import { actionTypes } from "../../services/constants.ts";

export default function RegressionRisk() {
    const regressionRiskCount = useSelector(regressionRiskSelector);
    const dispatch = useDispatch();

    function updateCount({ target }) {
        dispatch({
            type: actionTypes.REGRESSION_RISK_COUNT_UPDATED,
            payload: {
                value: target.value
            }
        })
    }

    return (
        <li>
            <label>Regression Risk Count:</label>
            <input
                type="number"
                value={regressionRiskCount}
                min={0}
                onChange={updateCount}></input>
        </li>
    )
}
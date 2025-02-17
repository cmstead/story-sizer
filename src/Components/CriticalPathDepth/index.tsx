import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { criticalPathDepthSelector } from "./criticalPathDepthSelector.ts";
import { actionTypes } from "../../services/constants.ts";

export default function CriticalPathDepth() {
    const criticalPathDepth = useSelector(criticalPathDepthSelector)
    const dispatch = useDispatch()

    const updateCriticalPathDepth = ({ target }) => dispatch({
        type: actionTypes.CRITICAL_PATH_DEPTH_UPDATED,
        payload: {
            value: target.value
        }
    })

    return (
            <div>
                <label>Dependency chain length:</label>
                <input
                    type="number"
                    value={criticalPathDepth}
                    min={0}
                    onChange={updateCriticalPathDepth}></input>
            </div>
    )
}
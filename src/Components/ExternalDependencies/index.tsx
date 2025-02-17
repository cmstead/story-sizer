import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dependencyCountSelector } from "./externalDependencyCountSelector.ts";
import { actionTypes } from "../../services/constants.ts";

export default function ExternalDependencies() {
    const externalDependencyCount = useSelector(dependencyCountSelector)
    const dispatch = useDispatch()

    const dispatchCountUpdate = ({ target }) => dispatch({
        type: actionTypes.DEPENDENCY_COUNT_UPDATED,
        payload: {
            value: target.value
        }
    })

    return (
        <div>
            <label>External dependency count:</label>
            <input
                type="number"
                value={externalDependencyCount}
                min={0}
                onChange={dispatchCountUpdate}></input>
        </div>
    )
}
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { workDescriptionSelector } from "./workDescriptionSelector.ts";
import { actionTypes } from "../../services/constants.ts";

export function WorkDescription() {
    const workDescriptionValue = useSelector(workDescriptionSelector)
    const dispatch = useDispatch()

    const update = ({ target }) => {
        dispatch({
            type: actionTypes.WORK_DESCRIPTION_UPDATED,
            payload: {
                name: target.name,
                value: target.value
            }
        })
    }

    return (
        <div>
            <label>Type of work:</label>
            <select
                value={workDescriptionValue}
                onChange={update}>
                <option value="0.5">Routine Update</option>
                <option value="1">Minor Enhancement</option>
                <option value="1.5">New Development</option>
                <option value="2">Legacy Codebase</option>
                <option value="3">In Discovery</option>
                <option value="5">Experimental Development</option>
            </select>

        </div>
    )
}
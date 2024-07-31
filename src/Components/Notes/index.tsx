import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { notesSelector } from "./notesSelector.ts";
import { actionTypes } from "../../services/constants.ts";

export default function Notes() {
    const notes = useSelector(notesSelector)
    const dispatch = useDispatch()

    const setNotes = ({ target }) => {
        dispatch({
            type: actionTypes.NOTES_UPDATED,
            payload: {
                value: target.value
            }
        });
    }

    return (
        <div>
            <label>General notes:</label>
            <textarea
                onChange={setNotes}
                rows={10}>{notes}</textarea>
        </div>
    )
}
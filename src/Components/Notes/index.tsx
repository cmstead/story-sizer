import React, { useState } from "react";

export default function Notes () {
    const [notes, updateNotes] = useState("");

    const setNotes = ({target}) => {
        updateNotes(target.value);
    }

    return (
        <li>
            <label>Additional Notes</label>
            <textarea 
            onChange={setNotes}
            cols={50}
            rows={10}>{notes}</textarea>
        </li>
    )
}
import React, { useState } from "react";

export default function Notes() {
    const [notes, updateNotes] = useState("");

    const setNotes = ({ target }) => {
        updateNotes(target.value);
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
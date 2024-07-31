import React, { useState } from "react";

export default function LogicalUnit({ removeLogicalUnit }) {
    const [unitName, updateUnitNameValue] = useState('Logical Unit');

    function updateUnitName({ target }) {
        updateUnitNameValue(target.value);
    }

    return (
        <div><button className="remove" onClick={removeLogicalUnit}>X</button><input onChange={updateUnitName} value={unitName}></input></div>
    );
}
import React, { useState } from "react";

export default function LogicalUnit() {
    const [unitName, updateUnitNameValue] = useState('Logical Unit');

    function updateUnitName({ target }) {
        updateUnitNameValue(target.value);
    }

    return (
        <div><input onChange={updateUnitName} value={unitName}></input></div>
    );
}
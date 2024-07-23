import React, { useState } from "react";
import LogicalUnit from "../LogicalUnit/index.tsx";

export default function LogicalLayer() {
    const [legendValue, updateLegendValue] = useState("Logical Layer");
    const [unitId, updateUnitId] = useState(1);
    const [logicalUnits, updateLogicalUnits] = useState([{ id: 0 }]);

    function updateLegend({ target }) {
        updateLegendValue(target.value)
    }

    function addLogicalUnit() {
        updateLogicalUnits(logicalUnits.concat({ id: unitId }));
        updateUnitId(unitId + 1)
    }

    return (
        <fieldset>
            <legend><input
                value={legendValue}
                onChange={updateLegend}
            ></input></legend>
            {logicalUnits.map(value => 
                <LogicalUnit id={`logical-unit-${value.id}`} key={value.id}></LogicalUnit>
            )}
            <div><button onClick={addLogicalUnit}>Insert Unit</button></div>
        </fieldset>
    );
}
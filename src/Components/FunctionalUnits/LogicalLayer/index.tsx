import React, { useState } from "react";
import LogicalUnit from "../LogicalUnit/index.tsx";

export default function LogicalLayer({ incrementUnitCount, removeLayer }) {
    const [legendValue, updateLegendValue] = useState("Logical Layer");
    const [unitId, updateUnitId] = useState(1);
    const [logicalUnits, updateLogicalUnits] = useState([{ id: 0 }]);


    function updateLegend({ target }) {
        updateLegendValue(target.value)
    }

    
    function addLogicalUnit() {
        const newLogicalUnits = logicalUnits.concat({ id: unitId });
        
        incrementUnitCount()
        
        updateLogicalUnits(newLogicalUnits);
        updateUnitId(unitId + 1)
    }

    return (
        <fieldset>
            <legend><input
                value={legendValue}
                onChange={updateLegend}
            ></input></legend>
            <button className="remove-layer" onClick={() => removeLayer()}>X</button>
            {logicalUnits.map(value =>
                <LogicalUnit key={value.id}></LogicalUnit>
            )}
            <div><button onClick={addLogicalUnit}>Insert Unit</button></div>
        </fieldset>
    );
}
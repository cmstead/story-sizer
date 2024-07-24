import React, { useState } from "react";
import LogicalUnit from "../LogicalUnit/index.tsx";

export default function LogicalLayer({ incrementUnitCount, decrementUnitCount, removeLayer }) {
    const [legendValue, updateLegendValue] = useState("Logical Layer");
    const [unitId, updateUnitId] = useState(1);
    const [logicalUnits, updateLogicalUnits] = useState([{ id: 0 }]);


    function updateLegend({ target }) {
        updateLegendValue(target.value)
    }


    function addLogicalUnit() {
        const newLogicalUnits = logicalUnits.concat({ id: unitId });

        updateLogicalUnits(newLogicalUnits);
        updateUnitId(unitId + 1)

        incrementUnitCount()
    }

    function removeLogicalUnit(unitId) {
        const newLogicalUnits = logicalUnits.filter(unit => unitId !== unit.id);

        updateLogicalUnits(newLogicalUnits);

        decrementUnitCount()
    }

    return (
        <fieldset>
            <legend><input
                value={legendValue}
                onChange={updateLegend}
            ></input></legend>
            <button className="remove-layer" onClick={() => removeLayer()}>X</button>
            {logicalUnits.map(unit =>
                <LogicalUnit
                    key={unit.id}
                    removeLogicalUnit={() => removeLogicalUnit(unit.id)}></LogicalUnit>
            )}
            <div><button onClick={addLogicalUnit}>Insert Unit</button></div>
        </fieldset>
    );
}
import React, { useState } from "react";
import LogicalUnit from "../LogicalUnit/index.tsx";

export default function LogicalLayer() {
    const [legendValue, updateLegendValue] = useState("Logical Layer");

    function updateLegend({ target }) {
        updateLegendValue(target.value)
    }

    return (
        <fieldset>
            <legend><input
                value={legendValue}
                onChange={updateLegend}
            ></input></legend>
            <LogicalUnit></LogicalUnit>
        </fieldset>
    );
}
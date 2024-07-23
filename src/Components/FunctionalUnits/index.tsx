import React, { useState } from "react";
import LogicalLayer from "./LogicalLayer/index.tsx";

export default function FunctionalUnits() {
    const [layerId, updateLayerId] = useState(1);
    const [layers, updateLayers] = useState([{ id: 0 }]);

    function insertLayer() {
        updateLayers(layers.concat({id: layerId}));
        updateLayerId(layerId + 1)
    }

    return (
        <div>
            {
                layers.map(layer => <LogicalLayer id={layer.id} key={layer.id}></LogicalLayer>)
            }
            <div><button onClick={insertLayer}>Insert Layer</button></div>
        </div>
    );
}
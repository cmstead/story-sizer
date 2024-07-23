import React, { useState } from "react";
import LogicalLayer from "./LogicalLayer/index.tsx";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../services/constants.ts";


export default function FunctionalUnits() {
    const [layerId, updateLayerId] = useState(1);
    const [layers, updateLayers] = useState([{ id: 0 }]);
    const dispatch = useDispatch();

    dispatch({
        type: actionTypes.LAYER_COUNT_UPDATED,
        payload: {
            name: 'verticalCount',
            value: layers.length
        }
    })
    
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
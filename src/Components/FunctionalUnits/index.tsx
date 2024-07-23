import React, { useState } from "react";
import LogicalLayer from "./LogicalLayer/index.tsx";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../services/constants.ts";

const getNewLayer = (id) => ({ id: id, unitCount: 1 })

export default function FunctionalUnits() {
    const [layerId, updateLayerId] = useState(1);
    const [layers, updateLayers] = useState([getNewLayer(0)]);
    const dispatch = useDispatch();

    dispatch({
        type: actionTypes.LAYER_COUNT_UPDATED,
        payload: {
            name: 'verticalCount',
            value: layers.length
        }
    });

    dispatch({
        type: actionTypes.LAYER_COUNT_UPDATED,
        payload: {
            name: 'horizontalCount',
            value: layers.reduce((count, layer) => count + layer.unitCount, 0)
        }
    });

    function insertLayer() {
        updateLayers(layers.concat(getNewLayer(layerId)));
        updateLayerId(layerId + 1)
    }

    function incrementUnitCount(layerId) {
        console.log(layerId, 'increment unit count')

        updateLayers(layers.map((layer) =>
            layer.id === layerId ?
                { id: layerId, unitCount: layer.unitCount + 1 }
                : layer))
    }

    return (
        <div>
            {
                layers.map(layer => <LogicalLayer key={layer.id} incrementUnitCount={() => incrementUnitCount(layer.id)}></LogicalLayer>)
            }
            <div><button onClick={insertLayer}>Insert Layer</button></div>
        </div>
    );
}
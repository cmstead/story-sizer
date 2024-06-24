import React from "react";
import { useSelector } from "react-redux";
import { horizontalCountSelector, verticalCountSelector } from "../FunctionalLayers/functionalLayerCountSelectors.ts";
import { dependencyCountSelector } from "../ExternalDependencies/externalDependencyCountSelector.ts";
import { estimateLOE } from "./loePredictor.ts";

export function LOEPredictor() {

    const loeValues = {
        verticalCount: useSelector(verticalCountSelector),
        horizontalCount: useSelector(horizontalCountSelector),
        externalDependencyCount: useSelector(dependencyCountSelector)    
    }

    return (
        <div>Predicted Fibonacci Complexity: {estimateLOE(loeValues)}</div>
    )
}
import { fibonacciValues, weightMap } from "./loeConstants.ts";

function sumWeightedValues(loeValues) {
    const verticalCountWeight = weightMap.functionalLayerCounts.verticalCount
    const horizontalCountWeight = weightMap.functionalLayerCounts.horizonalCount
    const workDescriptionWeight = loeValues.workDescriptionValue
    const externalDependencyCountWeight = weightMap.externalDependencyCount

    const criticalPathValue = 1.25 ** loeValues.criticalPathDepth - 1;
    const verticalSliceValue = loeValues.verticalCount * verticalCountWeight;
    const horizontalSliceValue = loeValues.horizontalCount * horizontalCountWeight;
    const externalDependencyValue = loeValues.externalDependencyCount * externalDependencyCountWeight;

    return (verticalSliceValue +
        horizontalSliceValue +
        externalDependencyValue +
        criticalPathValue
    ) * workDescriptionWeight
}

function selectNearestFibonacciValue(weightedSum) {
    return fibonacciValues.find((value) => weightedSum <= value)
}

export function estimateLOE(loeValues) {
    const weightedSum = sumWeightedValues(loeValues)
    return selectNearestFibonacciValue(weightedSum)
}


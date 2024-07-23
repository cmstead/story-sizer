import { fibonacciValues, weightMap } from "./loeConstants.ts";

function sumWeightedValues(loeValues) {
    const verticalCountWeight = weightMap.functionalLayerCounts.verticalCount
    const horizontalCountWeight = weightMap.functionalLayerCounts.horizonalCount
    const workDescriptionWeight = loeValues.workDescriptionValue
    const externalDependencyCountWeight = weightMap.externalDependencyCount

    const criticalPathValue = 1.25 ** loeValues.criticalPathDepth - 1;
    const horizontalSliceValue = loeValues.verticalCount * verticalCountWeight;
    const verticalSliceValue = loeValues.horizontalCount * loeValues.verticalCount * horizontalCountWeight;
    const externalDependencyValue = loeValues.externalDependencyCount * externalDependencyCountWeight;

    return (horizontalSliceValue +
        verticalSliceValue +
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


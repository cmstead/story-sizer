import { fibonacciValues, weightMap } from "./loeConstants.ts";

function sumWeightedValues(loeValues) {
    const verticalCountWeight = weightMap.functionalLayerCounts.verticalCount
    const horizontalCountWeight = weightMap.functionalLayerCounts.horizonalCount
    const externalDependencyCountWeight = weightMap.externalDependencyCount

    return (loeValues.verticalCount * verticalCountWeight +
        loeValues.horizontalCount * loeValues.verticalCount * horizontalCountWeight +
        loeValues.externalDependencyCount * externalDependencyCountWeight) * 1.5
}

function selectNearestFibonacciValue(weightedSum) {
    return fibonacciValues.find((value) => weightedSum <= value)
}

export function estimateLOE(loeValues) {
    const weightedSum = sumWeightedValues(loeValues)
    return selectNearestFibonacciValue(weightedSum)
}


import { fibonacciValues, weightMap } from "./loeConstants.ts";

function sumWeightedValues(loeValues) {
    const verticalCountWeight = weightMap.functionalLayerCounts.verticalCount
    const horizontalCountWeight = weightMap.functionalLayerCounts.horizonalCount
    const workDescriptionValue = loeValues.workDescriptionValue
    const externalDependencyCountWeight = weightMap.externalDependencyCount

    console.log(loeValues.criticalPathDepth)

    return (loeValues.verticalCount * verticalCountWeight +
        loeValues.horizontalCount * loeValues.verticalCount * horizontalCountWeight +
        loeValues.externalDependencyCount * externalDependencyCountWeight +
        (1.25**loeValues.criticalPathDepth - 1)
    ) * workDescriptionValue
}

function selectNearestFibonacciValue(weightedSum) {
    return fibonacciValues.find((value) => weightedSum <= value)
}

export function estimateLOE(loeValues) {
    const weightedSum = sumWeightedValues(loeValues)
    return selectNearestFibonacciValue(weightedSum)
}


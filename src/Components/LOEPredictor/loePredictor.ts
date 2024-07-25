import { fibonacciValues, weightMap } from "./loeConstants.ts";

function sumWeightedValues(loeValues) {
    const verticalCountWeight = weightMap.functionalLayerCounts.verticalCount
    const horizontalCountWeight = weightMap.functionalLayerCounts.horizonalCount
    const externalDependencyCountWeight = weightMap.externalDependencyCount
    const criticalPathWeight = weightMap.criticalPathWeight
    const workDescriptionWeight = loeValues.workDescriptionValue

    const criticalPathValue = (criticalPathWeight ** loeValues.criticalPathDepth) - 1;
    const acceptanceCriteriaValue = 1 + (0.0625 * (loeValues.acceptanceCriteriaCount - 1))
    const verticalSliceValue = loeValues.verticalCount * verticalCountWeight;
    const horizontalSliceValue = loeValues.horizontalCount * horizontalCountWeight;
    const externalDependencyValue = loeValues.externalDependencyCount * externalDependencyCountWeight;
    const regressionRiskWeight = 1 + (0.1675 * loeValues.regressionRiskCount);

    return (verticalSliceValue +
        horizontalSliceValue +
        externalDependencyValue +
        criticalPathValue
    ) * workDescriptionWeight * acceptanceCriteriaValue * regressionRiskWeight
}

function selectNearestFibonacciValue(weightedSum) {
    return fibonacciValues.find((value) => weightedSum <= value)
}

export function estimateLOE(loeValues) {
    const weightedSum = sumWeightedValues(loeValues)
    return selectNearestFibonacciValue(weightedSum)
}


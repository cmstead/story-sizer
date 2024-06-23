import { useSelector } from "react-redux";
import { horizontalCountSelector, verticalCountSelector } from "../FunctionalLayers/functionalLayerCountSelectors.ts";
import { dependencyCountSelector } from "../ExternalDependencies/externalDependencyCountSelector.ts";
import weightMap from "./weightMap.ts";

const fibonacciValues = [.5, 1, 2, 3, 5, 8, 13, 20, 50, 100, 1000]

export function LOEPredictor () {
    const verticalCount = useSelector(verticalCountSelector)
    const horizontalCount = useSelector(horizontalCountSelector)
    const externalDependencyCount = useSelector(dependencyCountSelector)

    const verticalCountWeight = weightMap.functionalLayerCounts.verticalCount
    const horizontalCountWeight = weightMap.functionalLayerCounts.horizonalCount
    const externalDependencyCountWeight = weightMap.externalDependencyCount

    function sumWeightedValues() {
        return (verticalCount * verticalCountWeight +
            horizontalCount * verticalCount * horizontalCountWeight +
            externalDependencyCount * externalDependencyCountWeight) * 1.5
    }

    function selectNearestFibonacciValue (weightedSum) {
        return fibonacciValues.find((value) => weightedSum <= value)
    }

    function estimateLOE() {
        const weightedSum = sumWeightedValues()
        return selectNearestFibonacciValue(weightedSum)
    }

    return (
        <div>Expected Fibonacci Complexity: {estimateLOE()}</div>
    )
}
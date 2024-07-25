import React from "react";
import { useSelector } from "react-redux";
import { horizontalCountSelector, verticalCountSelector } from "../FunctionalUnits/functionalLayerCountSelectors.ts";
import { dependencyCountSelector } from "../ExternalDependencies/externalDependencyCountSelector.ts";
import { workDescriptionSelector } from "../WorkDescription/workDescriptionSelector.ts";
import { criticalPathDepthSelector } from "../CriticalPathDepth/criticalPathDepthSelector.ts";
import { acceptanceCriteriaCountSelector } from "../AcceptanceCriteria/acceptanceCriteriaCountSelector.ts"
import { regressionRiskSelector } from "../RegressionRisk/regressionRiskSelector.ts";

import { estimateLOE } from "./loePredictor.ts";

export function LOEPredictor() {

    const loeValues = {
        verticalCount: useSelector(verticalCountSelector),
        horizontalCount: useSelector(horizontalCountSelector),
        externalDependencyCount: useSelector(dependencyCountSelector),
        workDescriptionValue: useSelector(workDescriptionSelector),
        criticalPathDepth: useSelector(criticalPathDepthSelector),
        acceptanceCriteriaCount: useSelector(acceptanceCriteriaCountSelector),
        regressionRiskCount: useSelector(regressionRiskSelector)
    }

    return (
        <div id="loe-predictor">Predicted Fibonacci Complexity: {estimateLOE(loeValues)}</div>
    )
}
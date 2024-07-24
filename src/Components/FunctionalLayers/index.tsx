import React, { ReactElement } from "react"
import { useSelector } from "react-redux"
import { horizontalCountSelector, verticalCountSelector } from "./functionalLayerCountSelectors.ts"

export default function FunctionalLayers(): ReactElement {

    const verticalCount = useSelector(verticalCountSelector)
    const horizontalCount = useSelector(horizontalCountSelector)

    return (
        <ul>
            <li>
                Logical layers touched 
                <span className="count-display">{verticalCount}</span>
            </li>
            <li>
                Logical units touched 
                <span className="count-display">{horizontalCount}</span>
            </li>
        </ul>
    )
}
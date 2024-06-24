import React, { ReactElement } from "react"
import { useSelector, useDispatch } from "react-redux"
import { horizontalCountSelector, verticalCountSelector } from "./functionalLayerCountSelectors.ts"
import { actionTypes } from "../../services/constants.ts"

function computeValue(baseValue) {
    if (baseValue === '') {
        return baseValue
    } else if (baseValue > 1) {
        return Math.round(baseValue)
    } else {
        return 1
    }
}

export default function FunctionalLayers(): ReactElement {

    const verticalCount = useSelector(verticalCountSelector)
    const horizontalCount = useSelector(horizontalCountSelector)

    const dispatch = useDispatch()

    const updateCount = ({ target }) => {
        const baseValue = target.value
        
        return dispatch({
            type: actionTypes.LAYER_COUNT_UPDATED,
            payload: {
                name: target.name,
                value: computeValue(baseValue)
            }
        })
    }

    return (
        <ul>
            <li>
                Vertical layers touched
                <input
                    type="number"
                    value={verticalCount}
                    name="verticalCount"
                    min={1}
                    onChange={updateCount}></input>
            </li>
            <li>
                Horizonal layers touched
                <input
                    type="number"
                    value={horizontalCount}
                    name="horizontalCount"
                    min={1}
                    onChange={updateCount}></input>
            </li>
        </ul>
    )
}
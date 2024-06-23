import React, { ReactElement } from "react"
import { useSelector, useDispatch } from "react-redux"
import { horizontalCountSelector, verticalCountSelector } from "./functionalLayerCountSelectors.ts"
import { actionTypes } from "../../services/constants.ts"

export default function FunctionalLayers(): ReactElement {

    const verticalCount = useSelector(verticalCountSelector)
    const horizontalCount = useSelector(horizontalCountSelector)

    const dispatch = useDispatch()

    const updateCount = ({ target }) => {
        return dispatch({
            type: actionTypes.LAYER_COUNT_UPDATED,
            payload: {
                name: target.name,
                value: Math.floor(target.value < 1 ? 1 : target.value)
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
                (.75 per)
            </li>
            <li>
                Horizonal layers touched
                <input
                    type="number"
                    value={horizontalCount}
                    name="horizontalCount"
                    min={1}
                    onChange={updateCount}></input>
                (.25 per)
            </li>
        </ul>
    )
}
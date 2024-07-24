import React, { ReactElement } from "react"
import { useSelector } from "react-redux"
import { horizontalCountSelector, verticalCountSelector } from "./functionalLayerCountSelectors.ts"
// import { actionTypes } from "../../services/constants.ts"

// function computeValue(baseValue) {
//     if (baseValue === '') {
//         return baseValue
//     } else if (baseValue > 1) {
//         return Math.round(baseValue)
//     } else {
//         return 1
//     }
// }

export default function FunctionalLayers(): ReactElement {

    const verticalCount = useSelector(verticalCountSelector)
    const horizontalCount = useSelector(horizontalCountSelector)

    // const dispatch = useDispatch()

    // const updateCount = ({ target }) => {
    //     const baseValue = target.value
        
    //     return dispatch({
    //         type: actionTypes.LAYER_COUNT_UPDATED,
    //         payload: {
    //             name: target.name,
    //             value: computeValue(baseValue)
    //         }
    //     })
    // }

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
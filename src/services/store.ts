import { configureStore } from "@reduxjs/toolkit"
import { appReducer } from "./reducers.ts"



export const store = configureStore({
    reducer: {
        state: appReducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
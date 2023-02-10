import { configureStore } from "@reduxjs/toolkit"
import formulaReducer from "../features/formula/formulaSlice"
import outputReducer from "../features/output/outputSlice"
// import {createLogger} from "redux-logger"

// const logger = createLogger();


const store = configureStore ({
    reducer : {
        formula: formulaReducer,
        output: outputReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
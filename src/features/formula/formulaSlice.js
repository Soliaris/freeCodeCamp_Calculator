import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formula: ''
}

const formulaSlice = createSlice ({
    name:'formula',
    initialState,
    reducers: {
        formulaSet: (state,action) => {
            state.formula = action.payload
        },
        formulaAdd: (state,action) => {
            state.formula += action.payload
        }
    }
})

export const { formulaSet,formulaAdd } = formulaSlice.actions
export default formulaSlice.reducer
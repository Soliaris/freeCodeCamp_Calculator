import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    output: '0'
}

const outputSlice = createSlice({
    name:'output',
    initialState,
    reducers: {
        outputSet:(state,action) => {
            state.output = action.payload
        },
        outputAdd:(state,action) => {
            state.output += action.payload
        }
    }
})


export const { outputSet,outputAdd } = outputSlice.actions
export default outputSlice.reducer
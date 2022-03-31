import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 0 , type: "OPEN"},
    {id: 1 , type: "MULTI"},
    {id: 2 , type: "SINGLE"}
]

const questionTypeSlice = createSlice({
    name: "questionType",
    initialState,
    reducers: {}
})

export default questionTypeSlice.reducer;
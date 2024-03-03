import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: []
}

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        setuStudents: (state, action) => {
            state.students.push(action.payload)
        }
    }
})

export const studentActions = studentsSlice.actions;
export default studentsSlice
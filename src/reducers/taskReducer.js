import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [{ no: 12121, title: 'Create todo list', status: false }],
    reducers: {
        setTasks(state, action) {
            return action.payload
        }
    }
})

export const { setTasks } = taskSlice.actions

export default taskSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        setTasks(state, action) {
            return action.payload
        }
    }
})

export const { setTasks } = taskSlice.actions

export default taskSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './reducers/taskReducer'
import searchReducer from './reducers/searchReducer'
import themeReducer from './reducers/themeReducer'

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        search: searchReducer,
        theme: themeReducer
    }
})

export default store
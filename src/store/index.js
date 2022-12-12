import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import coursesReducer from './courses/courseSlice'
import authorsReducer from './authors/authorSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
    authors: authorsReducer,
  }
})

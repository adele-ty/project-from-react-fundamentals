import { createSlice } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    courseList: [],
  },
  reducers: {
    getCourses: (state, action) => {
      state.courseList = action.payload
      window.localStorage.setItem('courseList', JSON.stringify(state.courseList))
    },
    addCourses: (state, action) => {
      const courses = JSON.parse(window.localStorage.getItem('courseList'))
      courses.push(action.payload)
      state.courseList = courses
      window.localStorage.setItem('courseList', JSON.stringify(courses))
    }
  }
})

export const {
  getCourses, addCourses, getMatchedCourse, getShowCourses
} = courseSlice.actions

export const selectCourses = (state) => {
  return JSON.parse(window.localStorage.getItem('courseList')) ?? state.courses.courseList
}

export default courseSlice.reducer

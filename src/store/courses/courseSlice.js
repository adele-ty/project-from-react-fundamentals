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
    },
    updateStoreCourses: (state, action) => {
      const courses = JSON.parse(window.localStorage.getItem('courseList'))
      const newCourses = courses.map((item) => {
        if (item.id === action.payload.CourseId) {
          return action.payload.courseInfo.current
        }
        return item
      })
      state.courseList = newCourses
      window.localStorage.setItem('courseList', JSON.stringify(newCourses))
    },
    deleteStoreCourses: (state, action) => {
      const courses = JSON.parse(window.localStorage.getItem('courseList'))
      const newCourses = courses.filter((item) => item.id !== action.payload)
      state.courseList = newCourses
      window.localStorage.setItem('courseList', JSON.stringify(newCourses))
    }
  }
})

export const {
  getCourses,
  addCourses,
  getMatchedCourse,
  getShowCourses,
  updateStoreCourses,
  deleteStoreCourses
} = courseSlice.actions

export const selectCourses = (state) => {
  return JSON.parse(window.localStorage.getItem('courseList')) ?? state.courses.courseList
}

export default courseSlice.reducer

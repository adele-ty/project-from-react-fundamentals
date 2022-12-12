import { createSlice } from '@reduxjs/toolkit'

export const authorSlice = createSlice({
  name: 'authors',
  initialState: {
    authorList: []
  },
  reducers: {
    getAuthors: (state, action) => {
      state.authorList = action.payload
      window.localStorage.setItem('authorList', JSON.stringify(state.authorList))
    },
    addAuthor: (state, action) => {
      const authors = JSON.parse(window.localStorage.getItem('authorList', JSON.stringify(state.authorList)))
      authors.push(action.payload)
      state.authorList = authors
      window.localStorage.setItem('authorList', JSON.stringify(authors))
    }
  }
})

export const { getAuthors, addAuthor } = authorSlice.actions

export const selectAuthor = (state) => {
  return JSON.parse(window.localStorage.getItem('authorList')) ?? state.authors.authorList
}

export default authorSlice.reducer

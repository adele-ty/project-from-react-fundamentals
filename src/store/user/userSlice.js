import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      isAuth: false,
      name: '',
      email: '',
      token: '',
    }
  },
  reducers: {
    setCurrentUser: (state, action) => {
      const isLogout = action.payload === {}
      const { email, name, token } = action.payload
      state.currentUser = {
        email, name, token, isAuth: !isLogout
      }
      window.localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
    }
  }
})

export const { setCurrentUser } = userSlice.actions
export const selectUserName = (state) => {
  const name = JSON.parse(window.localStorage.getItem('currentUser'))?.name ?? state.user.currentUser.name
  return name ?? ''
}

export default userSlice.reducer

import axios from 'axios'

const noAuthorize = [
  'http://localhost:4000/register',
  'http://localhost:4000/login',
  'http://localhost:4000/courses/all',
  'http://localhost:4000/authors/all'
]
axios.interceptors.request.use((config) => {
  if (!noAuthorize.includes(config.url)) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config
})

const userRegister = async (registerInfo) => {
  await axios.post('http://localhost:4000/register', registerInfo)
}

const userLogin = async (loginInfo) => {
  const { data: res } = await axios.post('http://localhost:4000/login', loginInfo)
  return res
}

const getMe = async () => {
  const { data: res } = await axios.get('http://localhost:4000/users/me')
  return res.result
}

const userLogout = async () => {
  await axios.delete(`http://localhost:4000/logout?Authorization=${localStorage.getItem('token')}`)
}

const getCourseList = async () => {
  const { data: courses } = await axios.get('http://localhost:4000/courses/all')
  return courses
}

const increaseCourses = async (courseInfo) => {
  await axios.post('http://localhost:4000/courses/add', { ...courseInfo.current })
}

const updateCourse = async (courseId, courseInfo) => {
  await axios.put(`http://localhost:4000/courses/${courseId}`, {
    ...courseInfo.current
  })
}

const deleteCourse = async (courseId) => {
  await axios.delete(`http://localhost:4000/courses/${courseId}`)
}

const getAuthorsList = async () => {
  const { data: authors } = await axios.get('http://localhost:4000/authors/all')
  return authors
}

const addAuthors = async (name) => {
  const { data: res } = await axios.post('http://localhost:4000/authors/add', { name })
  return res.result
}

export {
  userLogin,
  userRegister,
  getMe,
  getCourseList,
  getAuthorsList,
  increaseCourses,
  updateCourse,
  deleteCourse,
  addAuthors,
  userLogout
}

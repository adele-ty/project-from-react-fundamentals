import axios from 'axios'

const userRegister = async (registerInfo) => {
  await axios.post('http://localhost:4000/register', registerInfo)
}

const userLogin = async (loginInfo) => {
  const { data: res } = await axios.post('http://localhost:4000/login', loginInfo)
  return res
}

const getCourseList = async () => {
  const { data: courses } = await axios.get('http://localhost:4000/courses/all')
  return courses
}

const getAuthorsList = async () => {
  const { data: authors } = await axios.get('http://localhost:4000/authors/all')
  return authors
}

export {
  userLogin, userRegister, getCourseList, getAuthorsList
}

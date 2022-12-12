import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Registration from '../components/Registration/Registration'
import Courses from '../components/Courses/Courses'
import CourseInfo from '../components/CourseInfo/CourseInfo'
import CreateCourse from '../components/CreateCourse/CreateCourse'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/courses/:courseId" element={<CourseInfo />}></Route>
      <Route path="/courses/add" element={<CreateCourse />}></Route>
    </Routes>
  )
}

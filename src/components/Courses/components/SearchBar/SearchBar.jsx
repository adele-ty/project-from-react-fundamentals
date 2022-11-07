import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../common/Button'
import Input from '../../../../common/Input'
import { StyledSearchBar } from './style'
import { selectCourses, getCourses } from '../../../../store/courses/courseSlice'

export default function SearchBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  let courseList = useSelector(selectCourses)
  let courseMatched = []
  const changeInput = (event) => {
    setInputValue(event.target.value)
  }
  const clickSearch = () => {
    if (inputValue.trim() === '') dispatch(getCourses(courseList))
    else {
      let reg = new RegExp(`${inputValue.trim()}`, 'i')
      courseMatched = courseList.filter((item) => {
        return item.id.match(reg) || item.title.match(reg)
      })
      dispatch(getCourses(courseMatched))
    }
  }
  const togglePage = () => {
    navigate('/courses/add')
  }
  return (
    <StyledSearchBar>
      <Input placeholder="Enter course name..." changeEvent={changeInput} />
      <Button buttonText="Search" clickEvent={clickSearch}></Button>
      <Button buttonText="Add new course" clickEvent={togglePage} />
    </StyledSearchBar>
  )
}

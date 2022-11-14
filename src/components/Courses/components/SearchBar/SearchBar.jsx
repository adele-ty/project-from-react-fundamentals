import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../common/Button'
import Input from '../../../../common/Input'
import { StyledSearchBar } from './style'
import { selectCourses } from '../../../../store/courses/courseSlice'

export default function SearchBar(props) {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  let courseList = useSelector(selectCourses)
  let courseMatched = []
  const changeInput = (event) => {
    setInputValue(event.target.value)
  }

  const { getSearchCourses } = props
  const clickSearch = () => {
    if (inputValue.trim() === '') getSearchCourses([], 'noSearch')
    else {
      let reg = new RegExp(`${inputValue.trim()}`, 'i')
      courseMatched = courseList.filter((item) => {
        return item.id.match(reg) || item.title.match(reg)
      })
      getSearchCourses(courseMatched, 'isSearch')
    }
  }
  const togglePage = () => {
    navigate('/courses/add/create')
  }

  const isAdmin = JSON.parse(window.localStorage.getItem('currentUser')).role === 'admin'
  return (
    <StyledSearchBar>
      <Input placeholder="Enter course name..." changeEvent={changeInput} />
      <Button buttonText="Search" clickEvent={clickSearch}></Button>
      { isAdmin
        ? (<Button buttonText="Add new course" clickEvent={togglePage} />) : (<></>) }
    </StyledSearchBar>
  )
}

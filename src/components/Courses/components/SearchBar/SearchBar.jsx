import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../common/Button'
import Input from '../../../../common/Input'
import { StyledSearchBar } from '../../../../common/CommonHTML'
import { mockedCoursesList } from '../../../../constants'
import { courseListContext } from '../../../../helpers/context'

export default function SearchBar() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const listCourse = useContext(courseListContext)
  const { setCourseList } = listCourse
  let courseMatched = []
  const changeInput = (event) => {
    setInputValue(event.target.value)
  }
  const clickSearch = () => {
    if (inputValue.trim() === '') setCourseList(mockedCoursesList)
    else {
      let reg = new RegExp(`${inputValue.trim()}`, 'i')
      courseMatched = mockedCoursesList.filter((item) => {
        return item.id.match(reg) || item.title.match(reg)
      })
      setCourseList(courseMatched)
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

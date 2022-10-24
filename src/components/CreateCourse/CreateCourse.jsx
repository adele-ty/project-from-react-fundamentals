import React, { useState, useContext, useRef } from 'react'
import { nanoid } from 'nanoid'
import Input from '../../common/Input'
import Button from '../../common/Button'
import AddAuthors from './AddAuthors/AddAuthors'
import { StyledCreateCourse } from '../../common/CommonHTML'
import { courseListContext, authorsContext, isTogglePage } from '../../helpers/context'

export default function CreateCourse() {
  const tooglePageContext = useContext(isTogglePage)
  const { setTooglePage } = tooglePageContext
  const { CourseList, setCourseList } = useContext(courseListContext)

  const allAuthorsList = useContext(authorsContext)
  const { allAuthors } = allAuthorsList

  const [authorsAndDuration, setAuthorDuration] = useState({})
  let authorsId = []
  let courseInfo = useRef({})

  const inputTitle = (e) => {
    console.log('input')
    courseInfo.current = { ...courseInfo.current, title: e.target.value }
  }
  const inputDesc = (e) => {
    console.log('desc')
    courseInfo.current = { ...courseInfo.current, description: e.target.value }
  }
  const createCourse = () => {
    const { duration, authors } = authorsAndDuration
    const id = nanoid()
    const creationDate = `${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`
    authors.forEach((item) => {
      allAuthors.filter((author) => {
        if (author.name === item) { authorsId.push(author.id) }
      })
    })

    courseInfo.current = {
      ...courseInfo.current, duration, authors: authorsId, id, creationDate
    }

    setCourseList([...CourseList, courseInfo.current])
    setTooglePage(false)
  }
  const getAuthorsAndDuration = (authorsDuration) => {
    setAuthorDuration(authorsDuration)
  }
  return (
    <StyledCreateCourse id="blue">
      <div>
        <span>Title</span>
        <div>
          <Input placeholder="Enter title..." changeEvent={inputTitle}></Input>
          <Button buttonText="Create course" clickEvent={createCourse}></Button>
        </div>
      </div>
      <div>
        <span>Description</span>
        <textarea name="textarea" rows="5" cols="50" onChange={inputDesc}></textarea>
      </div>
      <AddAuthors passAuthorsDuration={getAuthorsAndDuration}></AddAuthors>
    </StyledCreateCourse>
  )
}

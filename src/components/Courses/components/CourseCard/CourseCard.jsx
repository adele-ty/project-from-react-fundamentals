import React from 'react'
import Button from '../../../../common/Button'
import { StyledCourseCard } from '../../../../common/CommonHTML'
import { mockedAuthorsList } from '../../../../constants'
import getDuration from '../../../../helpers/getCourseDuration'

export default function CourseCard(props) {
  const {
    title, description, creationDate, duration, authors
  } = props.item
  const formatCreation = creationDate.split('/').join('.')
  let authorArr = []
  authors.forEach((element) => {
    mockedAuthorsList.filter((item) => {
      if (item.id === element) authorArr.push(item.name)
    })
  })
  const authorList = authorArr.map((item, index) => {
    let span = ''
    if (index !== 0) {
      span = `, ${item}`
    } else {
      span = `${item}`
    }
    return (
      <span key={item}>{span}</span>
    )
  })
  const courseDuration = getDuration(duration)
  return (
    <StyledCourseCard id="green">
      <div>
        <span>{title}</span>
        <span>{description}</span>
      </div>
      <div>
        <div>
          <span id="info">Authors: </span>
          {authorList}
        </div>
        <div>
          <span id="info">Duration: </span>
          <span>{courseDuration}</span>
        </div>
        <div>
          <span id="info">Created: </span>
          <span>{formatCreation}</span>
        </div>
        <Button buttonText="Show course"></Button>
      </div>
    </StyledCourseCard>
  )
}

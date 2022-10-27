import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../common/Button'
import { StyledCourseCard } from '../../../../common/CommonHTML'
import { authorsContext } from '../../../../helpers/context'
import getDuration from '../../../../helpers/getCourseDuration'
import formatCreationDate from '../../../../helpers/formatCreation'
import getAuthorList from '../../../../helpers/getAuthorList'

export default function CourseCard(props) {
  const navigate = useNavigate()
  const {
    id, title, description, creationDate, duration, authors
  } = props.item
  const formatCreation = formatCreationDate(creationDate)
  const authorList = getAuthorList(authors)
  const showCourse = () => {
    navigate(`/courses/:${id}`)
  }
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
        <Button buttonText="Show course" clickEvent={showCourse}></Button>
      </div>
    </StyledCourseCard>
  )
}

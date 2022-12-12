import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../common/Button'
import { BtnBox, StyledCourseCard } from './style'
import getDuration from '../../../../helpers/getCourseDuration'
import formatCreationDate from '../../../../helpers/formatCreation'
import getAuthorList from '../../../../helpers/getAuthorList'
import deleteIcon from '../../../../assets/delete.svg'
import editIcon from '../../../../assets/edit.svg'

function CourseCard(props) {
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
  const editCourse = () => {

  }
  const deleteCourse = () => {

  }
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
        <BtnBox>
          <Button buttonText="Show course" clickEvent={showCourse}></Button>
          <Button id="smallBtn" buttonText="edit" clickEvent={editCourse}><img src={editIcon} /></Button>
          <Button id="smallBtn" buttonText="delete" clickEvent={deleteCourse}><img src={deleteIcon} /></Button>
        </BtnBox>
      </div>
    </StyledCourseCard>
  )
}

CourseCard.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    creationDate: PropTypes.string,
    duration: PropTypes.number,
    authors: PropTypes.arrayOf(PropTypes.string)
  }),
}

export default CourseCard

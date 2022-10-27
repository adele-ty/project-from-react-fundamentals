import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PageHeader } from 'antd'
import {
  CourseInfoCard, Span, Row
} from '../../common/CommonHTML'
import { courseListContext } from '../../helpers/context'
import formatCreationDate from '../../helpers/formatCreation'
import getDuration from '../../helpers/getCourseDuration'
import getAuthorList from '../../helpers/getAuthorList'

export default function CourseInfo() {
  const navigate = useNavigate()
  const { courseId } = useParams()
  const { CourseList } = useContext(courseListContext)
  const currentCourseId = courseId.slice(1)
  const currentCourseInfo = CourseList.find((item) => item.id === currentCourseId)
  const {
    id, title, duration, description, creationDate, authors
  } = currentCourseInfo
  const formatDuration = getDuration(duration)
  const formatCreation = formatCreationDate(creationDate)
  const authorList = getAuthorList(authors)
  const backToCourses = () => {
    navigate('/courses', { replace: true })
  }

  return (
    <CourseInfoCard id="blue">
      <PageHeader
        className="site-page-header"
        onBack={backToCourses}
        subTitle="Back to courses"
      />
      <div id="title"><Span>{title}</Span></div>
      <Row>
        <div>
          <span>{description}</span>
        </div>
        <div>
          <Row>
            <span id="span">ID:&nbsp;</span>
            {id}
          </Row>
          <Row>
            <span id="span">Duration:&nbsp;</span>
            {formatDuration}
          </Row>
          <Row>
            <span id="span">Created:&nbsp;</span>
            <span>{formatCreation}</span>
          </Row>
          <Row>
            <span id="span">Authors:&nbsp;</span>
            {authorList}
          </Row>
        </div>
      </Row>
    </CourseInfoCard>
  )
}

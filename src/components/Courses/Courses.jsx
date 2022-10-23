import { useContext, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import CourseCard from './components/CourseCard/CourseCard'
import { StyledCourses } from '../../common/CommonHTML'
import { courseListContext } from '../../helpers/context'

export default function Courses() {
  const { CourseList } = useContext(courseListContext)
  const courseItems = CourseList.map((item) => {
    return <CourseCard key={item.id} item={item} />
  })
  return (
    <StyledCourses id="blue">
      <SearchBar />
      <ul>
        {courseItems}
      </ul>
    </StyledCourses>
  )
}

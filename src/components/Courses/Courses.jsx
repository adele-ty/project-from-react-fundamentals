import { useSelector } from 'react-redux'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import CourseCard from './components/CourseCard/CourseCard'
import { StyledCourses } from './style'
import { selectCourses } from '../../store/courses/courseSlice'

export default function Courses() {
  const CourseList = useSelector(selectCourses)
  const [showList, setShowList] = useState([...CourseList])
  const courseItems = showList.map((item) => {
    return <CourseCard key={item.id} item={item} />
  })

  const getSearchCourses = (matchedCoursesList, isSearch) => {
    if (isSearch === 'isSearch') setShowList([...matchedCoursesList])
    if (isSearch === 'noSearch') setShowList([...CourseList])
  }

  return (
    <StyledCourses id="blue">
      <SearchBar getSearchCourses={getSearchCourses} />
      <ul>
        {courseItems}
      </ul>
    </StyledCourses>
  )
}

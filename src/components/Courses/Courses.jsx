import { useSelector } from 'react-redux'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import CourseCard from './components/CourseCard/CourseCard'
import { StyledCourses } from './style'
import { selectCourses } from '../../store/courses/courseSlice'

export default function Courses() {
  const CourseList = useSelector(selectCourses)
  const [isSearch, setIsSearch] = useState('noSearch')
  const [showList, setShowList] = useState([...CourseList])
  let courseItems = null
  if (isSearch === 'noSearch') {
    courseItems = CourseList.map((item) => {
      return <CourseCard key={item.id} item={item} />
    })
  } else {
    courseItems = showList.map((item) => {
      return <CourseCard key={item.id} item={item} />
    })
  }

  const getSearchCourses = (matchedCoursesList, isSearch) => {
    if (isSearch === 'isSearch') {
      setShowList([...matchedCoursesList])
      setIsSearch(isSearch)
    }
    if (isSearch === 'noSearch') {
      setIsSearch(isSearch)
    }
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

import { useSelector } from 'react-redux'
import SearchBar from './components/SearchBar/SearchBar'
import CourseCard from './components/CourseCard/CourseCard'
import { StyledCourses } from './style'
import { selectCourses } from '../../store/courses/courseSlice'

export default function Courses() {
  const CourseList = useSelector(selectCourses)
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

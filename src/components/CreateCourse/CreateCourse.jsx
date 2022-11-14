import React, {
  useState, useRef
} from 'react'
import { nanoid } from 'nanoid'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../common/Input'
import Button from '../../common/Button'
import AddAuthors from './AddAuthors/AddAuthors'
import { StyledCreateCourse } from './style'
import { addCourses, selectCourses, updateStoreCourses } from '../../store/courses/courseSlice'
import { selectAuthor } from '../../store/authors/authorSlice'
import { increaseCourses, updateCourse } from '../../api'

export default function CreateCourse() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { courseId } = useParams()
  const CourseId = courseId === 'create' ? '' : courseId?.slice(1)
  let currentCourse = {}
  if (CourseId) {
    const AllCourses = useSelector(selectCourses)
    const currentCourses = AllCourses.filter((item) => item.id === CourseId)
    currentCourse = currentCourses[0]
  }

  const allAuthors = useSelector(selectAuthor)

  const [authorsAndDuration, setAuthorDuration] = useState({})

  let courseInfo = useRef({})

  const inputTitle = (e) => {
    courseInfo.current = { ...courseInfo.current, title: e.target.value }
  }
  const inputDesc = (e) => {
    courseInfo.current = { ...courseInfo.current, description: e.target.value }
  }

  const { duration, authors } = authorsAndDuration
  const getCurrentAuthorsId = (authorsId) => {
    authors.forEach((item) => {
      allAuthors.filter((author) => {
        if (author.name === item) { authorsId.push(author.id) }
      })
    })
    return authorsId
  }

  const createCourse = async () => {
    const id = nanoid()
    const creationDate = `${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`
    let authorsId = []
    getCurrentAuthorsId(authorsId)
    courseInfo.current = {
      ...courseInfo.current, duration: duration * 1, authors: authorsId, id, creationDate
    }

    increaseCourses(courseInfo)
    dispatch(addCourses(courseInfo.current))
    navigate('/courses', { replace: true })
  }

  const Title = useRef(currentCourse.title)
  const Desc = useRef(currentCourse.description)
  const UpdateCourse = async () => {
    let authorsId = []
    getCurrentAuthorsId(authorsId)
    courseInfo.current = {
      ...currentCourse,
      title: Title.current.value === '' ? currentCourse.title : Title.current.value,
      description: Desc.current.value === '' ? currentCourse.description : Desc.current.value,
      duration: duration || currentCourse.duration,
      authors: authorsId
    }
    updateCourse(CourseId, courseInfo)
    dispatch(updateStoreCourses({ CourseId, courseInfo }))
    navigate('/courses', { replace: true })
  }

  const getAuthorsAndDuration = (authorsDuration) => {
    if (typeof authorsDuration === 'number') {
      setAuthorDuration({ ...authorsAndDuration, duration: authorsDuration })
    } else {
      setAuthorDuration({ ...authorsAndDuration, authors: authorsDuration })
    }
  }

  return (
    <StyledCreateCourse id="blue">
      <div>
        <span>Title</span>
        <div>
          <Input
            changeEvent={inputTitle}
            ref={Title}
            placeholder={CourseId === '' ? 'Enter title...' : currentCourse.title}
          >
          </Input>
          <Button
            buttonText={CourseId === '' ? 'Create course' : 'Update course'}
            clickEvent={CourseId === '' ? createCourse : UpdateCourse}
          >
          </Button>
        </div>
      </div>
      <div>
        <span>Description</span>
        <textarea
          name="textarea"
          rows="5"
          cols="50"
          placeholder={currentCourse ? currentCourse.description : ''}
          onChange={inputDesc}
          ref={Desc}
        >
        </textarea>
      </div>
      <AddAuthors
        passAuthorsDuration={getAuthorsAndDuration}
        duration={currentCourse.duration}
        authors={currentCourse.authors}
      >
      </AddAuthors>
    </StyledCreateCourse>
  )
}

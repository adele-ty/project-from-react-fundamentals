import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import CreateCourse from './components/CreateCourse/CreateCourse'
import { authorsContext, courseListContext, isTogglePage } from './helpers/context'
import { useState } from 'react'
import { mockedAuthorsList, mockedCoursesList } from './constants'

function App() {
  const [allAuthors, setAllAuthors] = useState(mockedAuthorsList)
  const [CourseList, setCourseList] = useState(mockedCoursesList)
  const [tooglePage, setTooglePage] = useState(false)
  function Page() {
    if (tooglePage)  return <CreateCourse />
    return <Courses />
  }
  return (
    <div className="App">
      <authorsContext.Provider value={{allAuthors, setAllAuthors}}>
        <courseListContext.Provider value={{CourseList, setCourseList}}>
          <isTogglePage.Provider value={{tooglePage, setTooglePage}}>
            <Header />
            {Page()}
          </isTogglePage.Provider>
        </courseListContext.Provider>
      </authorsContext.Provider>
    </div>
  )
}

export default App

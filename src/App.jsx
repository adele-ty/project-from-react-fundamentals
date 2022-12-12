import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import { authorsContext, courseListContext, currentUserContext } from './helpers/context'
import { mockedAuthorsList, mockedCoursesList } from './constants'
import Element from './router/Router'

function App() {
  const [allAuthors, setAllAuthors] = useState(mockedAuthorsList)
  const [CourseList, setCourseList] = useState(mockedCoursesList)
  const [currentUser, setCurrentUser] = useState({})
  return (
    <div className="App">
      <authorsContext.Provider value={{ allAuthors, setAllAuthors }}>
        <courseListContext.Provider value={{ CourseList, setCourseList }}>
          <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            <Header />
            <Element />
          </currentUserContext.Provider>
        </courseListContext.Provider>
      </authorsContext.Provider>
    </div>
  )
}

export default App

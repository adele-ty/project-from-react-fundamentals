import React, { useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import AuthorItem from '../AuthorItem/AuthorItem'
import Input from '../../../common/Input'
import Button from '../../../common/Button'
import { Span, Column, Box, AddAuthor, Line, Authors } from '../../../common/CommonHTML'
import { authorsContext } from '../../../helpers/context'
import getDuration from '../../../helpers/getCourseDuration'

export default function AddAuthors(props) {
  const allAuthorsList = useContext(authorsContext)
  const { allAuthors, setAllAuthors } = allAuthorsList
  const { passAuthorsDuration } = props
  const [duration, setDuration] = useState(' 00 : 00 ')

  let authorName = ''
  let authorId = ''
  const [selectedAuthors, setSelectedAuthors] = useState([])

  const inputAuthorName = (e) => {
    authorName = e.target.value
  }
  const createAuthor = () => {
    authorId = nanoid()
    setAllAuthors([...allAuthors, { id: authorId, name: authorName }])
  }
  const addCourseAuthors = (author) => {
    setSelectedAuthors([...selectedAuthors, author])
  }
  const authorList = allAuthors.map((item) => {
    return (
      <AuthorItem authorName={item.name} key={item.id} selectAuthor={addCourseAuthors}>
      </AuthorItem>
    )
  })
  const courseAuthors = selectedAuthors.map((item) => {
    return (
      <li key={item}>{ item }</li>
    )
  })
  const inputDuration = (e) => {
    setDuration(getDuration(e.target.value))
    passAuthorsDuration({ duration: e.target.value, authors: selectedAuthors })
  }
  return (
    <Box>
      <Line>
        <AddAuthor>
          <Span>Add author</Span>
          <Column>
            <span>Author name</span>
            <Input placeholder="Enter author name..." changeEvent={inputAuthorName}></Input>
          </Column>
          <Button buttonText="Create author" clickEvent={createAuthor}></Button>
        </AddAuthor>
        <Authors>
          <Span>Authors</Span>
          <ul>{authorList}</ul>
        </Authors>
      </Line>
      <Line>
        <AddAuthor>
          <Span>Duration</Span>
          <Column>
            <span>Duration</span>
            <Input
              type="number"
              placeholder="Enter duration in minutes..."
              changeEvent={inputDuration}
            >
            </Input>
          </Column>
          <span>Duration:{duration}hours
          </span>
        </AddAuthor>
        <Authors>
          <Span>Course authors</Span>
          <ul>{ courseAuthors }</ul>
        </Authors>
      </Line>
    </Box>
  )
}

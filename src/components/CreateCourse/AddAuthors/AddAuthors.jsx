import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { message } from 'antd'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import AuthorItem from '../AuthorItem/AuthorItem'
import Input from '../../../common/Input'
import Button from '../../../common/Button'
import {
  Span, Column, Box, AddAuthor, Authors
} from '../../../common/CommonHTML'
import { Line } from './style'
import { selectAuthor, addAuthor } from '../../../store/authors/authorSlice'
import getDuration from '../../../helpers/getCourseDuration'

function AddAuthors(props) {
  const dispatch = useDispatch()
  const allAuthors = useSelector(selectAuthor)
  const { passAuthorsDuration } = props
  const [duration, setDuration] = useState(' 00 : 00 ')

  let authorName = useRef(null)
  let authorId = useRef('')
  const [selectedAuthors, setSelectedAuthors] = useState([])

  const createAuthor = () => {
    const inputAuthorName = authorName.current.value
    const isFind = allAuthors.find((ele) => {
      return ele.name === inputAuthorName
    })
    if (!isFind) {
      authorId = nanoid()
      dispatch(addAuthor({ id: authorId, name: inputAuthorName }))
    } else {
      message.warning('The author already exists!')
    }
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
      <li key={item}>{item}</li>
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
            <Input placeholder="Enter author name..." ref={authorName}></Input>
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
          <span>
            Duration:
            {duration}
            hours
          </span>
        </AddAuthor>
        <Authors>
          <Span>Course authors</Span>
          <ul>{courseAuthors}</ul>
        </Authors>
      </Line>
    </Box>
  )
}

AddAuthors.propTypes = {
  passAuthorsDuration: PropTypes.func
}

export default AddAuthors

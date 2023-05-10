import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import AuthorItem from '../AuthorItem/AuthorItem'
import Input from '../../../common/Input'
import Button from '../../../common/Button'
import {
  Span, Column, Box, AddAuthor, Authors
} from '../../../common/CommonHTML'
import { Line } from './style'
import { StyledAuthorItem } from '../AuthorItem/style'
import { selectAuthor, addAuthor } from '../../../store/authors/authorSlice'
import getDuration from '../../../helpers/getCourseDuration'
import { addAuthors } from '../../../api'

function AddAuthors(props) {
  const dispatch = useDispatch()
  const allAuthors = useSelector(selectAuthor)
  const { passAuthorsDuration, authors } = props
  const [duration, setDuration] = useState(' 00 : 00 ')

  let authorName = useRef(null)

  let currentAuthors = []
  if (authors?.length > 0) {
    authors.forEach((item) => {
      allAuthors.filter((author) => {
        if (author.id === item) { currentAuthors.push(author.name) }
      })
    })
  }

  const createAuthor = async () => {
    const inputAuthorName = authorName.current.value
    const isFind = allAuthors.find((ele) => {
      return ele.name === inputAuthorName
    })
    if (!isFind) {
      const author = await addAuthors(inputAuthorName)
      dispatch(addAuthor({ id: author.id, name: inputAuthorName }))
    } else {
      message.warning('The author already exists!')
    }
  }

  const [selectedAuthors, setSelectedAuthors] = useState([...currentAuthors])
  const addCourseAuthors = (author) => {
    setSelectedAuthors([...selectedAuthors, author])
    passAuthorsDuration([...selectedAuthors, author])
  }

  const authorList = allAuthors.map((item) => {
    return (
      <AuthorItem authorName={item.name} key={item.id} selectAuthor={addCourseAuthors}>
      </AuthorItem>
    )
  })

  const deleteAuthors = (delAuthor) => {
    const restAuthors = selectedAuthors.filter((item) => item !== delAuthor)
    setSelectedAuthors([...restAuthors])
    passAuthorsDuration([...restAuthors])
  }

  const courseAuthors = selectedAuthors.map((item) => {
    return (
      <li key={item}>
        <StyledAuthorItem>
          <span>{item}</span>
          <div>
            <Button buttonText="Delete author" clickEvent={() => deleteAuthors(item)}></Button>
          </div>
        </StyledAuthorItem>
      </li>
    )
  })

  const Duration = useRef('')
  const inputDuration = () => {
    let duration = Duration.current.value * 1
    setDuration(getDuration(duration))
    passAuthorsDuration(duration)
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
              placeholder={props.duration ? `${props.duration}` : 'Enter duration in minutes...'}
              changeEvent={inputDuration}
              ref={Duration}
            >
            </Input>
          </Column>
          <span>{`Duration: ${duration} hours`}</span>
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

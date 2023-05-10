import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../../common/Button'
import { StyledAuthorItem } from './style'

function AuthorItem(props) {
  const { authorName, selectAuthor } = props
  const addAuthors = () => {
    selectAuthor(authorName)
  }
  return (
    <StyledAuthorItem>
      <span>{authorName}</span>
      <div>
        <Button buttonText="Add author" clickEvent={addAuthors}></Button>
      </div>
    </StyledAuthorItem>
  )
}

AuthorItem.propTypes = {
  authorName: PropTypes.string,
  selectAuthor: PropTypes.func
}

export default AuthorItem

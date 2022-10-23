import React from 'react'
import Button from '../../../common/Button'
import { StyledAuthorItem } from '../../../common/CommonHTML' 

export default function AuthorItem(props) {
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

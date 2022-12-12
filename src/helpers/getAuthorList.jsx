import { useContext } from 'react'
import { authorsContext } from './context'

export default function getAuthorList(authors) {
  const { allAuthors } = useContext(authorsContext)
  let authorArr = []

  authors.forEach((element) => {
    allAuthors.filter((item) => {
      if (item.id === element) authorArr.push(item.name)
    })
  })
  const authorList = authorArr.map((item, index) => {
    let span = ''
    if (index !== 0) {
      span = `, ${item}`
    } else {
      span = `${item}`
    }
    return (
      <span key={item}>{span}</span>
    )
  })
  return authorList
}

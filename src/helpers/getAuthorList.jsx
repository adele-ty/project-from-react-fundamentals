import { useSelector } from 'react-redux'
import { selectAuthor } from '../store/authors/authorSlice'

export default function getAuthorList(authors) {
  const allAuthors = useSelector(selectAuthor)
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

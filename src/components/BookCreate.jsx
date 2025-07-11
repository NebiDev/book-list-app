import {useState} from 'react'
import useBooksContext from '../hooks/use-books-context'

const BookCreate = () => {
  const [title, setTitle] = useState('')
  const { createBook } = useBooksContext()

  const handleChange =(e) =>{
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createBook(title)
    setTitle('')
  }

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Title</label>
        <input className='input' type="text" value={title} onChange={handleChange} />
        <button className='button' > Create</button>
      </form>
    </div>
  )
}

export default BookCreate

import React, {useState} from 'react'

import useBooksContext from '../hooks/use-books-context'

const BookEdit = ({book, onSubmit}) => {
    const [title, setTitle] = useState(book.title)
    const {editBookById} = useBooksContext()

    const handleChange = (e) =>{
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
      
        onSubmit()
        editBookById(book.id, title)
        
    }

  return (
    <div>
       <form className='book-edit'onSubmit={handleSubmit} >
        <label htmlFor="">Title</label>
        <input type="text" value={title} className='input' onChange={handleChange} />
        <button className='button is-primary' > Save</button>

       </form>
      
    </div>
  )
}

export default BookEdit

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from 'react-redux';
import './BookDetails.css';


function BookDetails() {
    const navigate=useNavigate();
    const books = useSelector((state)=>state.books.books)
    
    function backtoBrowse(){
       navigate('/browse-books')

    }

  return (
   <div className="book-details-container">
      <ul className="book-list">
      {books.map(book => (
       <li key={book.id} className="book-item">
       <p className="book-title">{book.title}</p>
       <p><strong>Author:</strong> {book.author}</p>
       <p><strong>Year:</strong> {book.year}</p>
       <p><strong>Category:</strong> {book.category}</p>
       <p><strong>Rating:</strong> {book.rating}</p>
       <p><strong>Description:</strong> {book. description}</p>

    </li>
  ))}
</ul>


  <button onClick={backtoBrowse} className="back-button">
    <IoMdArrowBack /> Back to Browse
  </button>
</div>

  )
}

export default BookDetails;

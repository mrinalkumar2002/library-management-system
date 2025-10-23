import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/createslice'; // Redux slice
import { Link, useNavigate } from 'react-router-dom';
import './AddBook.css';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    category: '',
    rating:'',
    description: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple validation
  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBook = {
      id: Date.now(),
      ...formData
    };

    dispatch(addBook(newBook)); // Add to Redux store
    <Link to={navigate('/browse-books')}></Link>  /*Redirect to Browse Books page*/
          
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <div className='form-box'>
          <h2>Add New Book</h2>

          <div>
            <label>Title</label>
            <input 
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              placeholder='Enter the title'
            />
            {errors.title && <span className='error'>{errors.title}</span>}
          </div>

          <div>
            <label>Author</label>
            <input 
              type='text'
              name='author'
              value={formData.author}
              onChange={handleChange}
              placeholder='Enter the author'
            />
            {errors.author && <span className='error'>{errors.author}</span>}
          </div>

          <div>
            <label>Year</label>
            <input 
              type='text'
              name='year'
              value={formData.year}
              onChange={handleChange}
              placeholder='Provide the year'
            />
            {errors.year && <span className='error'>{errors.year}</span>}
          </div>

          <div>
            <label>Category</label>
            <input 
              type='text'
              name='category'
              value={formData.category}
              onChange={handleChange}
              placeholder='Enter the category'
            />
            {errors.category && <span className='error'>{errors.category}</span>}
          </div>

           <div>
            <label>Rating</label>
            <input 
              type='text'
              name='rating'
              value={formData.rating}
              onChange={handleChange}
              placeholder='Provide the rating'
            />
              {errors.rating && <span className='error'>{errors.rating}</span>}
            </div>

          <div>
            <label>Description</label>
            <input 
              type='text'
              name='description'
              value={formData.description}
              onChange={handleChange}
              placeholder='Provide the description'
            />
            {errors.description && <span className='error'>{errors.description}</span>}
          </div>

          <button type='submit'>Add Book</button>
        </div>
      </div>
    </form>
    
    </>
  );
}


export default AddBook;


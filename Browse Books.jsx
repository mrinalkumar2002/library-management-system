import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import './Browse Books.css';

function Browsebook() {
  const { category } = useParams(); // Get category from dynamic route
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  // Filter books by category if category param exists
  let filteredBooks = category
    ? books.filter(b => b.category.toLowerCase() === category.toLowerCase())
    : books;

  // Further filter by search term (title or author)
  filteredBooks = filteredBooks.filter(
    b => b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search)
  );

  return (
    <div className="browse-container">
      <h2>{category ? `Books in "${category}"` : 'Browse Books'}</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={handleSearch}
        className="search"
      />

      {/* Book List */}
      {filteredBooks.length > 0 ? (
        <ul className="list">
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>
              <Link to={`/bookdetails/:id${book.id}`} className="view-details">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default Browsebook;



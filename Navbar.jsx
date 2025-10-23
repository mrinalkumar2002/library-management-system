import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";

function Navbar() {
  const location = useLocation();

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Biography"];

  return (
    <div>
      <nav className='bar'>
        <Link to='/' className='bar-link'><FaHome /> Home</Link>
        <Link to='/browse-books' className='bar-link'><IoBookSharp /> Browse Books</Link>
        <Link to='/addbook' className='bar-link'><IoIosAddCircleOutline /> Add Books</Link>
      </nav>

      {/* Category links */}
      {location.pathname.startsWith('/browse-books') && (
        <div className='category-bar'>
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/browse-books/${cat}`}
              className='category-link'
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;

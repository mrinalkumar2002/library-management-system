import './Home.css';
import{Link} from 'react-router-dom'
const categories=['Fiction','Non-Fiction','Sci-Fi','Biography','Fantasy']

const popularbooks=[ { id: 7, title: "Educated", author: "Tara Westover", year: 2018, category: "Non-Fiction" },
  { id: 8, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, category: "Fiction" },
  { id: 9, title: "The Name of the Wind", author: "Patrick Rothfuss", year: 2007, category: "Fantasy" },
  { id: 10, title: "Steve Jobs", author: "Walter Isaacson", year: 2011, category: "Biography" },
  { id: 11, title: "Neuromancer", author: "William Gibson", year: 1984, category: "Sci-Fi" },
  { id: 12, title: "Quiet", author: "Susan Cain", year: 2012, category: "Non-Fiction" },]

function Home(){
    return(
        <>
        <div className='head'>
         <h1>Welcome to library Management System</h1> {/*welcome message */}
        <h2>Categories</h2>
        < ul className="category-list">
         {categories.map((category,index)=>(
         <li key={index}>{category}</li>
         ))}
        </ul>
        </div>
             <h3>Popular Books</h3>

        <div className='popular-floor'>
          {popularbooks.map(book=>(
            <div className='card'>
               <h4>{book.title}</h4>
               <p><strong>Author</strong>{book.author}</p>
               <Link to='/bookdetails/:id'>View Details</Link>
            </div>
            ))}
        </div>
        </>
    )
}

export default Home;
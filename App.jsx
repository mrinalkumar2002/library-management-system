import './App.css'
import Home from './components/Home'
import { Route, Routes } from "react-router-dom";
import Navbar from "./features/Navbar";
import BrowseBooks from './components/Browse Books'; // renamed for consistency
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Browse all books */}
        <Route path="/browse-books" element={<BrowseBooks />} />
        
        {/* Browse books by category */}
        <Route path="/browse-books/:category" element={<BrowseBooks />} />
        
        {/* Book details */}
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        
        {/* Add new book */}
        <Route path="/addbook" element={<AddBook />} />

        {/*page not found*/}
         <Route path="*" element={<PageNotFound/>} />

      </Routes>
    </>
  )
}

export default App


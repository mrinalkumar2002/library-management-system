import{createSlice} from "@reduxjs/toolkit"

const books = [
  { id: 1, title: "Dune", author: "Frank Herbert", year: 1965, category: "Sci-Fi", rating: 4.6,
    description: "A sweeping science fiction epic about politics, religion, and ecology on the desert planet Arrakis." },
  { id: 2, title: "Sapiens", author: "Yuval Noah Harari", year: 2011, category: "Non-Fiction", rating: 4.7,
    description: "An exploration of the history of humankind, from the Stone Age to the modern era, blending science and anthropology." },
  { id: 3, title: "1984", author: "George Orwell", year: 1949, category: "Fiction", rating: 4.5,
    description: "A dystopian novel about a totalitarian regime that uses surveillance and propaganda to control its citizens." },
  { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, category: "Fantasy", rating: 4.7,
    description: "Bilbo Baggins embarks on an unexpected adventure to help a group of dwarves reclaim their homeland from a dragon." },
  { id: 5, title: "Becoming", author: "Michelle Obama", year: 2018, category: "Biography", rating: 4.8,
    description: "The inspiring memoir of former First Lady Michelle Obama, chronicling her life, challenges, and achievements." },
  { id: 6, title: "The Martian", author: "Andy Weir", year: 2011, category: "Sci-Fi", rating: 4.6,
    description: "A stranded astronaut uses ingenuity and humor to survive alone on Mars." },
  { id: 7, title: "Educated", author: "Tara Westover", year: 2018, category: "Non-Fiction", rating: 4.7,
    description: "A powerful memoir about a woman who escapes her isolated upbringing to pursue education and self-discovery." },
  { id: 8, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, category: "Fiction", rating: 4.8,
    description: "A profound story about racial injustice and moral growth in the American South, seen through the eyes of a young girl." },
  { id: 9, title: "The Name of the Wind", author: "Patrick Rothfuss", year: 2007, category: "Fantasy", rating: 4.5,
    description: "The first installment in an epic fantasy series following the legendary hero Kvothe and his adventures." },
  { id: 10, title: "Steve Jobs", author: "Walter Isaacson", year: 2011, category: "Biography", rating: 4.6,
    description: "A detailed biography of Apple co-founder Steve Jobs, offering insights into his creativity, leadership, and flaws." },
  { id: 11, title: "Neuromancer", author: "William Gibson", year: 1984, category: "Sci-Fi", rating: 4.1,
    description: "A cyberpunk classic that introduced the concept of cyberspace and shaped modern science fiction." },
  { id: 12, title: "Quiet", author: "Susan Cain", year: 2012, category: "Non-Fiction", rating: 4.6,
    description: "An insightful look at the power of introverts in a world that celebrates extroversion." },
  { id: 13, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, category: "Fiction", rating: 4.0,
    description: "A coming-of-age novel about teenage angst and alienation told through the eyes of Holden Caulfield." },
  { id: 14, title: "Mistborn", author: "Brandon Sanderson", year: 2006, category: "Fantasy", rating: 4.7,
    description: "A gripping fantasy where a young thief discovers her powers in a world ruled by an immortal tyrant." },
  { id: 15, title: "Alexander Hamilton", author: "Ron Chernow", year: 2004, category: "Biography", rating: 4.5,
    description: "The comprehensive biography that inspired the hit musical 'Hamilton,' exploring the life of America’s founding father." },
  { id: 16, title: "Foundation", author: "Isaac Asimov", year: 1951, category: "Sci-Fi", rating: 4.3,
    description: "A visionary saga about a mathematician who predicts the fall of a galactic empire and seeks to preserve knowledge." },
  { id: 17, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, category: "Non-Fiction", rating: 4.4,
    description: "A groundbreaking book on how human decision-making is influenced by two systems of thought: fast intuition and slow reasoning." },
  { id: 18, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, category: "Fiction", rating: 4.4,
    description: "A tragic story of wealth, love, and illusion in the Roaring Twenties, centered on the enigmatic Jay Gatsby." },
  { id: 19, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, category: "Fantasy", rating: 4.9,
    description: "The magical beginning of the Harry Potter saga, where a young boy discovers he is a wizard." },
  { id: 20, title: "Unbroken", author: "Laura Hillenbrand", year: 2010, category: "Biography", rating: 4.6,
    description: "The true story of an Olympic runner turned WWII airman who survives a plane crash and Japanese imprisonment." },
  { id: 21, title: "Snow Crash", author: "Neal Stephenson", year: 1992, category: "Sci-Fi", rating: 4.2,
    description: "A fast-paced cyberpunk novel mixing virtual reality, ancient mythology, and satire of a corporate-run future." },
  { id: 22, title: "Born a Crime", author: "Trevor Noah", year: 2016, category: "Non-Fiction", rating: 4.8,
    description: "A witty and heartfelt memoir of Trevor Noah’s upbringing in apartheid South Africa as the child of a mixed-race couple." },
  { id: 23, title: "Lord of the Flies", author: "William Golding", year: 1954, category: "Fiction", rating: 4.1,
    description: "A chilling allegory about civilization and savagery as a group of boys stranded on an island descends into chaos." },
  { id: 24, title: "The Wheel of Time", author: "Robert Jordan", year: 1990, category: "Fantasy", rating: 4.3,
    description: "An epic fantasy series weaving prophecy, magic, and destiny in a vast, richly detailed world." },
  { id: 25, title: "The Wright Brothers", author: "David McCullough", year: 2015, category: "Biography", rating: 4.4,
    description: "A detailed biography of the Wright brothers and their groundbreaking invention of the airplane." },
  { id: 26, title: "Ender's Game", author: "Orson Scott Card", year: 1985, category: "Sci-Fi", rating: 4.5,
    description: "A young boy is trained through intense simulations to become humanity’s last hope against an alien threat." },
  { id: 27, title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", year: 2010, category: "Non-Fiction", rating: 4.6,
    description: "The true story of the woman whose cancer cells led to countless medical breakthroughs without her consent." },
  { id: 28, title: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, category: "Fiction", rating: 4.3,
    description: "A poignant depiction of a family’s struggle during the Great Depression as they migrate west in search of work." },
  { id: 29, title: "The Lies of Locke Lamora", author: "Scott Lynch", year: 2006, category: "Fantasy", rating: 4.4,
    description: "A clever fantasy about a gang of con artists pulling heists in a Venetian-style city." },
  { id: 30, title: "Into Thin Air", author: "Jon Krakauer", year: 1997, category: "Biography", rating: 4.5,
    description: "A gripping first-hand account of the tragic 1996 Mount Everest disaster." }
];




const bookSlice=createSlice({
    name:"books",
    initialState:{books},
    reducers:{
        addBook:(state,action)=>{
            state.books.unshift(action.payload)
        },
        removeBook:(state,action)=>{
            state.books.filter(book=>book.id!==action.payload)
        },
    }
})



export const {addBook,removeBook}=bookSlice.actions;
export default bookSlice.reducer;
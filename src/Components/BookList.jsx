import books from "../Data/fantasy.json"
import SingleBook from "./SingleBook"





let BookList = (props) => {
return (

    books.map((book) => ( 
        
        <SingleBook img={book.img}
        title={book.title}
        key={book.asin} />
        
        

)))}






export default BookList
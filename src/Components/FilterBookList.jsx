import { Component } from "react";
import {InputGroup, FormControl} from "react-bootstrap"
import books from "../Data/fantasy.json"
import SingleBook from "./SingleBook"




let filterFunction = (props) => {
    
    books.filter(book => book.title.toLowerCase().contains(this.state.search).toLowerCase())
    .map((book => ( 

        <SingleBook img={book.img}
        title={book.title}
        key={book.asin} />        

        )))}




class FilterBookList extends Component {
    
    state = {
        
        search: "",
    }
    
    render () {
        return (

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) =>
                    this.setState({search: e.target.value})}
                    />




            </InputGroup>


        )
    }
}


export default FilterBookList

 
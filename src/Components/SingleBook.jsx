import { Component } from "react";
import {Card, Button} from "react-bootstrap"
import books from "../Data/fantasy.json"
import BookList from "./BookList";



class SingleBook extends Component {
    render () {
        return (
            <Card key={this.props.asin}>
            <Card.Img variant="top" src={this.props.img} style={{width: "400px"}} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        )
    }
}

export default SingleBook
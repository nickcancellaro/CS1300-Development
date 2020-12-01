import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup"
import Button from 'react-bootstrap/Button'
import "./DisplayList.css"

class DisplayList extends Component {

    constructor() {
        super();
        this.state = {
            cart: []
        };
    }

    /* Function that takes an item and adds that item to the cart in state */
    addCart = item => {
        if (this.state.cart.filter(i => i.name === item.name).length === 0) {
            let cart = this.state.cart.concat(item);
            this.setState({
                cart
            })
        }
    }

    /* Function that takes an item and removes that item from the cart in state */
    removeCart = item => {
        const cart = this.state.cart.filter(i => i.name !== item.name);
        this.setState({
            cart
        })
    }

    /* Function that takes an item and outputs the html to create the image*/
    createItem = item => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Title>{item.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Department: {item.attr1}</ListGroup.Item>
                    <ListGroup.Item>Size: {item.attr2}</ListGroup.Item>
                    <ListGroup.Item>Number: {item.sort}</ListGroup.Item>
                    <ListGroup.Item>Hours/Week: {item.time}</ListGroup.Item>
                </ListGroup>
                <Button onClick={() => this.addCart(item)}>Add to Cart</Button>
            </Card>
        );
    }

    /* Function that takes an item and outputs the html to create the image for the cart */
    createCartItem = item => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Title>{item.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Department: {item.attr1}</ListGroup.Item>
                    <ListGroup.Item>Size: {item.attr2}</ListGroup.Item>
                    <ListGroup.Item>Number: {item.sort}</ListGroup.Item>
                    <ListGroup.Item>Hours/Week: {item.time}</ListGroup.Item>
                </ListGroup>
                <Button onClick={() => this.removeCart(item)}>Remove</Button>
            </Card>
        );
    }

    render() {
        const entries = this.props.list;
        const cartList = this.state.cart;
        const listItems = entries.map(this.createItem);
        const cartItems = cartList.map(this.createCartItem);
        const cartTotal = this.state.cart.reduce(((acc, n) => acc + n.time), 0);
        return (
            <div>
                <div className="allItems">
                    {listItems}
                </div>
                <h2>Cart:</h2>
                <div className="cartItems">
                    {cartItems}
                </div>
                <div className="cartTotal">
                    <h3>Hours/Week of Current Cart:  </h3>
                    {cartTotal}
                </div>
            </div>
        );
    }
}

export default DisplayList;
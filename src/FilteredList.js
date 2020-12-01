import React, { Component } from "react";

import DisplayList from "./DisplayList.js";
import Button from 'react-bootstrap/Button'
import "./FilteredList.css"
import Navbar from 'react-bootstrap/Navbar'

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attr1: "All",
      attr2: "All",
      sort: "L2H",
      currList: this.props.wholeList
    };
  }

  /* Functions that change the state based on each possible button press, and then call update */
  sortH2L = event => {
    this.setState({
      sort: "H2L"
    })
    this.update(this.state.attr1, this.state.attr2, "H2L")

  }

  sortL2H = event => {
    this.setState({
      sort: "L2H"
    })
    this.update(this.state.attr1, this.state.attr2, "L2H")
  }

  filter1All = event => {
    this.setState({
      attr1: "All"
    })
    this.update("All", this.state.attr2, this.state.sort)
  }

  filter1Attr1 = event => {
    this.setState({
      attr1: "1"
    })
    this.update("1", this.state.attr2, this.state.sort)
  }

  filter1Attr2 = event => {
    this.setState({
      attr1: "2"
    })
    this.update("2", this.state.attr2, this.state.sort)
  }

  filter1Attr3 = event => {
    this.setState({
      attr1: "3"
    })
    this.update("3", this.state.attr2, this.state.sort)
  }

  filter2All = event => {
    this.setState({
      attr2: "All"
    })
    this.update(this.state.attr1, "All", this.state.sort)
  }

  filter2Attr1 = event => {
    this.setState({
      attr2: "1"
    })
    this.update(this.state.attr1, "1", this.state.sort)
  }

  filter2Attr2 = event => {
    this.setState({
      attr2: "2"
    })
    this.update(this.state.attr1, "2", this.state.sort)
  }

  filter2Attr3 = event => {
    this.setState({
      attr2: "3"
    })
    this.update(this.state.attr1, "3", this.state.sort)
  }

  /* Function that takes in the current state's attributes, edits the whole list down so that it matches */
  update = (attr1, attr2, sort) => {
    let list = this.props.wholeList;
    switch (attr1) {
      case "1":
        list = list.filter(e => e.attr1 === "CSCI");
        break;
      case "2":
        list = list.filter(e => e.attr1 === "APMA");
        break;
      case "3":
        list = list.filter(e => e.attr1 === "ENGL");
        break;
    }
    switch (attr2) {
      case "1":
        list = list.filter(e => e.attr2 === "Small");
        break;
      case "2":
        list = list.filter(e => e.attr2 === "Medium");
        break;
      case "3":
        list = list.filter(e => e.attr2 === "Large");
        break;
    }
    switch (sort) {
      case "L2H":
        list = list.sort((a, b) => (a.sort > b.sort) ? 1 : -1);
        break;
      case "H2L":
        list = list.sort((a, b) => (a.sort < b.sort) ? 1 : -1);
        break;
    }
    this.setState({
      currList: list
    })
  }


  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand>Sort by Class Number: </Navbar.Brand>
          <Button onClick={this.sortH2L}>High to Low</Button>
          <Button onClick={this.sortL2H}>Low to High</Button>
        </Navbar>
        <Navbar>
          <Navbar.Brand>Filter by Department: </Navbar.Brand>
          <Button onClick={this.filter1All}>All</Button>
          <Button onClick={this.filter1Attr1}>CSCI</Button>
          <Button onClick={this.filter1Attr2}>APMA</Button>
          <Button onClick={this.filter1Attr3}>ENGL</Button>
        </Navbar>
        <Navbar>
          <Navbar.Brand>Filter by Size: </Navbar.Brand>
          <Button onClick={this.filter2All}>All</Button>
          <Button onClick={this.filter2Attr1}>Small</Button>
          <Button onClick={this.filter2Attr2}>Medium</Button>
          <Button onClick={this.filter2Attr3}>Large</Button>
        </Navbar>
        <DisplayList list={this.state.currList} />
      </div>

    );
  }
}

export default FilteredList;

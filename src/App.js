import React, { Component } from "react";

import FilteredList from "./FilteredList.js";
import "./App.css"
import englBanner from "./englBanner.jpg";
import mathBanner from "./mathBanner.jpg";
import csBanner from "./csBanner.jpeg";

const productList = [
  { name: "An Integrated Introduction", attr1: "CSCI", attr2: "Large", sort: 170, time: 10, img: csBanner },
  { name: "American Misfits", attr1: "ENGL", attr2: "Small", sort: 200, time: 6, img: englBanner },
  { name: "Introduction to Discrete Structures and Probability", attr1: "CSCI", attr2: "Large", sort: 220, time: 8, img: csBanner },
  { name: "Applied Ordinary Differential Equations", attr1: "APMA", attr2: "Large", sort: 350, time: 4, img: mathBanner },
  { name: "Fantastic Places, Unhuman Humans", attr1: "ENGL", attr2: "Large", sort: 511, time: 6, img: englBanner },
  { name: "American Literature in the Era of Segregation", attr1: "ENGL", attr2: "Medium", sort: 710, time: 9, img: englBanner },
  { name: "Introduction to Creative Nonfiction", attr1: "ENGL", attr2: "Small", sort: 930, time: 4, img: englBanner },
  { name: "Algorithmic Game Theory", attr1: "CSCI", attr2: "Medium", sort: 1440, time: 8, img: csBanner },
  { name: "Statistical Inference I", attr1: "APMA", attr2: "Large", sort: 1650, time: 6, img: mathBanner },
  { name: "Graphs and Networks", attr1: "APMA", attr2: "Medium", sort: 1860, time: 8, img: mathBanner },
  { name: "Computation in Economics and Games", attr1: "CSCI", attr2: "Small", sort: 2440, time: 6, img: csBanner },
  { name: "Some Topics in Kinetic The", attr1: "APMA", attr2: "Small", sort: 2580, time: 6, img: mathBanner }];

class App extends Component {

  render() {
    return (
      <div>
        <h1>Courses at Brown</h1>
        <FilteredList wholeList={productList} />
      </div>

    );
  }
}

export default App;

// Import all components below:
import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import SectionMain from "./SectionMain";
import Aside from "./Aside";
import Footer from "./Footer";

//Define App and extend Component class
class App extends Component {
//Start the render method
  render() {
    return (
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

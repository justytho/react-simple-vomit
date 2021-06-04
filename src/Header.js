//import react and header css
import React, { Component } from 'react';
import './Header.css';

// Create header class extended from React component
class Header extends Component {
//render the whole component
  render() {
//define style object for the header

    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
//inside the return, returning the JSX
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

// export the header class component
export default Header;


//document.querySelector("header").style.backgroundColor = "red"

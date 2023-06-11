import React, { Component } from 'react';
import styled from 'styled-components';
//below will take any name styless or styles
import styless from './Navbar.module.css'

const NavOuter = styled.div`
padding-top:15px;
    background-color: #9DB2BF;  
  padding:10px;
  display: flex;
  justify-content: space-between;
`;




export default class Navbar extends Component {
  render() {
    return (
      <NavOuter>
        <div className="left">
          <h1>Movies</h1>
        </div>
        <div className="right">

          <img style={{ height: '50px', padding: "10px" }} src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" alt="err" />


         <span className={styless.span}>10</span>

        </div>
      </NavOuter>
    );
  }
}

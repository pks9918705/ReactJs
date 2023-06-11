import React, { Component } from 'react';
import styled from 'styled-components';

const NavOuter = styled.div`
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
           
            <img style={{ height: '50px',padding:"10px" }} src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" alt="err" />
          
    
            <span style={{position:"absolute",right:"2%"}}>10</span>
 
        </div>
      </NavOuter>
    );
  }
}

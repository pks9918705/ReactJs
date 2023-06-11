import React, { Component } from 'react';
import styled from 'styled-components';

const NavOuter = styled.div`
padding-top:15px;
    background-color: #9DB2BF;  
  padding:10px;
  display: flex;
  justify-content: space-between;
`;

const CardCount = styled.div`
border-radius:50px;
background-color: ${(props)=> props.color};
padding:4px 8px;
position: absolute;
right: 10px;
top:5px;
font-size:22px;
color:red;
visibility: ${(props)=> (props.show) ? 'visible' : 'hidden'};
`



export default class Navbar extends Component {
  render() {
    return (
      <NavOuter>
        <div className="left">
          <h1>Movies</h1>
        </div>
        <div className="right">

          <img style={{ height: '50px', padding: "10px" }} src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" alt="err" />


          <CardCount color='yellow' show={true}>10</CardCount>

        </div>
      </NavOuter>
    );
  }
}

import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastName: ''
    };
  }

  nameHandler = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  lastNameHandler = (e) => {
    this.setState({
      lastName: e.target.value
    });
  };
  componentDidMount(){
    document.title=this.state.name+" "+this.state.lastName
  }
  componentDidUpdate(){
    document.title=this.state.name+" "+this.state.lastName
  }

  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input onChange={this.nameHandler} value={this.state.name} className="input" />
          </Row>
          <Row label="Last Name">
            <input onChange={this.lastNameHandler} value={this.state.lastName} className="input" />
          </Row>
        </div>

        <h2>Hello, {this.state.name} {this.state.lastName}</h2>
      </>
    );
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>{label}<br /></label>
      {props.children}
      <hr />
    </>
  );
}

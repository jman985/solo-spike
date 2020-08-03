import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {

  state = {
    name: ''
  }

  handleChange = ( event ) => {
    this.setState({
      name: event.target.value
    })
  }

  addName = () => {
    // send the new name to the reducer
    this.props.dispatch( { type: 'ADD_NAME', payload: this.state.name } )
    this.setState({
      name: ''
    })
  }

  handleClickOne = () => {
    // we get dispatch from connect() - we use it to dispatch an action
    // an action is just an object, that has a `type` property
    this.props.dispatch( { type: 'CLICK_ONE' } );
  }

  handleClickTwo = () => {
    // we get dispatch from connect() - we use it to dispatch an action
    // an action is just an object, that has a `type` property
    this.props.dispatch( { type: 'CLICK_TWO' } );
  }

  render() {
    return (
      <div>
        <header><h1>Redux Intro</h1></header>
        <main>
          <button onClick={this.handleClickOne}>Button One!</button>
          <button onClick={this.handleClickTwo}>Button Two!</button>
          {/* redux state is on props */}
          { JSON.stringify( this.props.reduxState)}
          <div>
            <h2>Add a Name</h2>
            <input onChange={this.handleChange} value={this.state.name} />
            <button onClick={this.addName}>Add Name</button>
          </div>
        </main>
      </div>
    );
  }
}

// This function says what to put on Componet props
const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

// connect() will make the connection between the redux store & our Component
// connect gives us `dispatch`, this.props.dispatch( action )
// to see redux state, send function to connect
export default connect(putReduxStateOnProps)(App);

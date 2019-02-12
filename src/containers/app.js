import React, { Component } from 'react';
import { connect } from 'react-redux';
import dummyActionCreator from '../actions/index';

class App extends Component {

  componentDidMount(){
    this.props.dummyActionCreator();
  }

  render() {
    let data = this.props.dummyState;

    if(!data){
      return (
        <div className="app">
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <div className="app">
        <h1>{ data }</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { dummyState: state.dummyReducerState.dummy };
}

export default connect(mapStateToProps, { dummyActionCreator })(App);

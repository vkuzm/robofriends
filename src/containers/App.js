import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';

const mapStateToProps = (state) => {
  //console.log("Subscribe to searchField and get value:", state.searchField);

  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      //console.log("Do dispatcher for searchField with value:", event.target.value);
      dispatch(setSearchField(event.target.value));
    },
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {
  render() {
    return <MainPage { ...this.props } />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
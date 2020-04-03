import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import '../components/app.css';

const mapStateToProps = (state) => {
  console.log("Subscribe to searchField and get value:", state.searchField);

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
      console.log("Do dispatcher for searchField with value:", event.target.value);
      dispatch(setSearchField(event.target.value));
    },
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, isPending, robots, error } = this.props;

  	const filteredRobots = robots.filter(robot => {
  		return robot.name.toLowerCase().includes(searchField.toLowerCase());
  	});

  	if (isPending) {
  		return <div className='tc pa5 ma5'><h1>Loading...</h1></div>

  	} else if (error) {
      return <div className='tc pa5 ma5'><h1>{error.message}</h1></div>

    } else {
      return (
        <div className='tc'>
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
                <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
        );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
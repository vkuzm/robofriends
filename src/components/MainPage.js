import React from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import '../components/mainPage.css';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  }

  render() {
    const { onSearchChange, isPending, robots, error } = this.props;

    if (isPending) {
      return <div className='tc pa5 ma5'><h1>Loading...</h1></div>

    } else if (error) {
      return <div className='tc pa5 ma5'><h1>{error.message}</h1></div>

    } else {
      return (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
                <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default MainPage;
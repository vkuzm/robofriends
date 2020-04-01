import React from 'react';
import Card from '../components/Card';
import ErrorBoundry from '../components/ErrorBoundry'

const CardList = ({ robots }) => {
	if (true) {
		throw new Error('Nooooo');
	}

	const cardList = robots.map(robot => {
	  return (
	    <Card 
		    key={robot.id} 
		    id={robot.id} 
		    name={robot.name} 
		    email={robot.email}
		  />
	  );
	})

	return <div>{cardList}</div>;
}

export default CardList;
import React from 'react';

class Header extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return <h1 className='f2'>Robofriends V2</h1>
	}
}

export default Header;
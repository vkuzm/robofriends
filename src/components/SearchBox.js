import React from 'react';

class SearchBox extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

 	render() {
		const { searchChange } = this.props;

		return (
			<div className='pa2'>
		  	<input
		  		id="searchBox"
		  		className='pa3 ba b--green bg-lightest-blue'
		    	type='search'
		    	placeholder='Search robots'
		    	onChange={searchChange}
		   	/>
			</div>
		);
	}
}

export default SearchBox;
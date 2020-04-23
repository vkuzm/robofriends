import React from 'react';
import SearchBox from './SearchBox';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('expect to render SearchBox correctly', () => {
	const wrapperSnapshot = toJson(shallow(<SearchBox />));
  expect(wrapperSnapshot).toMatchSnapshot();
});

it('correctly searchChange', () => {
  const onSearchChange = function() {
    return true;
  }
  const wrapper = shallow(<SearchBox searchChange={onSearchChange} />);
  
  //wrapper.find('[id="searchBox"]');
  //wrapper.find('[id="searchBox"]').simulate('change');
  //expect(wrapper.find('[id="searchBox"]').value()).toEqual('test');
});
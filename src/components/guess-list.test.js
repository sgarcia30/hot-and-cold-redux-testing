import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessList} from './guess-list.js';

describe(<GuessList />, () => {
	it('Renders without crashing', () => {
		shallow(<GuessList guesses={[]} />);
	});

	it('Should render guesses as a prop inside an li', () => {
		const wrapper = shallow(<GuessList guesses={['10']}/>);
		expect(wrapper.find('ul#guessList').text()).toEqual('10')
	})
})

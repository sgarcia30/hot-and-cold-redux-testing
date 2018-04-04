import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessCount} from './guess-count.js';

describe(<GuessCount />, () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Should render guesssCount', () => {
		const wrapper = shallow(<GuessCount guessCount={'10'}/>);
		expect(wrapper.find('span#count').text()).toEqual('10')
	})
})

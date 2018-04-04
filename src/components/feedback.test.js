import React from 'react';
import {shallow, mount} from 'enzyme';
import {Feedback} from './feedback.js';

describe(<Feedback />, () => {
	it('Renders without crashing', () => {
		shallow(<Feedback />);
	});

	it('Should render guessCount', () => {
		const wrapper = shallow(<Feedback guessCount={'10'}/>);
		expect(wrapper.find('h2#feedback').key()).toEqual('10');
	})

	it('Should render feedback', () => {
		const wrapper = shallow(<Feedback feedback={'loser'} />);
		expect(wrapper.find('h2#feedback').text()).toEqual('loser Guess again!');
	})
})

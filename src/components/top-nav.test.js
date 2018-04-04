import React from 'react';
import {shallow, mount} from 'enzyme';
import {TopNav} from './top-nav.js';
import {generateAuralUpdate, restartGame} from '../actions'

describe(<TopNav />, () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	});

	it('Dispatches the onRestartGame when clicked on', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<TopNav dispatch={dispatch}/>);
		// wrapper.find('restartGame').instance().value = 10;
		wrapper.find('a.new').simulate('click');
		expect(dispatch).toHaveBeenCalledWith(restartGame(10));
	})

	it('Dispatches the onGenerateAuralUpdate when clicked on', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<TopNav dispatch={dispatch}/>);
		wrapper.find('a.visuallyhidden').simulate('click');
		expect(dispatch).toHaveBeenCalledWith(generateAuralUpdate());
	})
})

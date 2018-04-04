import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessForm} from './guess-form.js';
import {makeGuess} from '../actions';

describe(<GuessForm />, () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('Dispatches the makeGuess function when the form is submitted', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<GuessForm dispatch={dispatch}/>);
	  wrapper.find('input#userGuess').instance().value = 15;
		wrapper.simulate('submit', {preventDefault: () => {}});
		const instance = wrapper.instance();
		expect(dispatch).toHaveBeenCalledWith(makeGuess('15'));
	})
	
	// make sure the value goes back to ''
	it('Returns the input value to equal empty strings after the form submits', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<GuessForm dispatch={dispatch}/>);
		wrapper.find('input#userGuess').instance().value = 15;
		expect(wrapper.find('input#userGuess').instance().value).toEqual('15');
		wrapper.simulate('submit', {preventDefault: () => {}});
		expect(wrapper.find('input#userGuess').instance().value).toEqual('');
	})
})

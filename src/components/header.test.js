import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from './header.js';

describe(<Header />, () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	});
})
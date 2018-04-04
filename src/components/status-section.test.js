import React from 'react';
import {shallow, mount} from 'enzyme';
import StatusSection from './status-section.js';

describe(<StatusSection />, () => {
	it('Renders without crashing', () => {
		shallow(<StatusSection />);
	});
})

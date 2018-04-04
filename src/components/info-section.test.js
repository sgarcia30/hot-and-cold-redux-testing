import React from 'react';
import {shallow, mount} from 'enzyme';
import InfoSection from './info-section.js';

describe(<InfoSection />, () => {
	it('Renders without crashing', () => {
		shallow(<InfoSection />);
	});
})
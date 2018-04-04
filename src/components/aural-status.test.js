import React from 'react';
import {shallow, mount} from 'enzyme';
import {AuralStatus} from './aural-status.js';

describe('<AuralStatus />', () => {
	it('Render without crashing', () => {
		shallow(<AuralStatus />);
	})

	it('Should render auralStatus as a prop', () => {
		const wrapper = shallow(<AuralStatus auralStatus={'cold'}/>);
		expect(wrapper.find('p#status-readout').text()).toEqual('cold');
	})
})

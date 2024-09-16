// src/Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component tests', () => {
    // Test that Notifications renders without crashing
    it('renders Notifications component without crashing', () => {
        shallow(<Notifications />);
    });

    // Test that Notifications renders three list items
    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    // Test that Notifications renders the text "Here is the list of notifications"
    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications p').text()).toContain('Here is the list of notifications');
    });
});

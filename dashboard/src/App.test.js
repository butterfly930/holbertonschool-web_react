// src/App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {
  // Test that App renders without crashing
  it('renders App component without crashing', () => {
    shallow(<App />);
  });

  // Test that App renders a div with the class App-header
  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').length).toBe(1);
  });

  // Test that App renders a div with the class App-body
  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').length).toBe(1);
  });

  // Test that App renders a div with the class App-footer
  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').length).toBe(1);
  });
});

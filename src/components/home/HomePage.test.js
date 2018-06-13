import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {

  it('renders the expected text', () => {
    const wrapper = shallow(<HomePage/>);
    const Header = wrapper.find('h1');
    expect(Header.text()).toBe('Sample coursework');
  });

  it('links to the correct page (About)', () => {
    const wrapper = shallow(<HomePage/>);
    const primaryButton = wrapper.find('.btn.btn-primary.btn-lg');
    expect(primaryButton.props().children).toBe('Learn More');
    expect(primaryButton.props().to).toBe('about');
  });
});

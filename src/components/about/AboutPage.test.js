import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders the heading with proper text', () => {
    const wrapper = shallow(<AboutPage/>);
    const Header = wrapper.find('h1');
    expect(Header.text()).toBe('About');
  });

  it('links to the correct website', () => {
    const website = "https://github.com/coryhouse/pluralsight-redux-starter";
    const wrapper = shallow(<AboutPage/>);
    const Anchor = wrapper.find('a');
    expect(Anchor.props().href).toEqual(website);
  });
});

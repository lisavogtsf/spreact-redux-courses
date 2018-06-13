import React from 'react';
import expect from 'expect';
import { shallow} from 'enzyme';
import Header from './Header';
import { Link, IndexLink } from 'react-router';

describe('Header (common)', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header/>);
  });

  it('has three links', () => {
    const indexLink = wrapper.find(IndexLink);
    const links = wrapper.find(Link);

    expect(indexLink.length + links.length).toEqual(3);
  });

  it('links to Home page', () => {
    const indexLink = wrapper.find(IndexLink);
    expect(indexLink.props().to).toBe('/');
    expect(indexLink.props().children).toBe('Home');
  });

  it('links to Courses page', () => {
    const coursesLink = wrapper.find(Link).get(0);
    expect(coursesLink.props.to).toBe('/courses');
    expect(coursesLink.props.children).toBe('Courses');
  });

  it('links to About page', () => {
    const aboutLink = wrapper.find(Link).get(1);
    expect(aboutLink.props.to).toBe('/about');
    expect(aboutLink.props.children).toBe('About');
  });
});

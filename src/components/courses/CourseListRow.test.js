import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import { Link } from "react-router";
import CourseListRow from "./CourseListRow";

describe('CourseListRow', () => {
  it('renders correct text and data', () => {
    const course = { id: 'id1', watchHref: 'watchHref1', title: 'Title 1', authorId: 'author1', length: 'length1', category: 'category1'};
    const wrapper = shallow(<CourseListRow course={course}/>);
    const rowData = wrapper.find('tr');
    expect(rowData.text()).toContain('author1');
    expect(rowData.text()).toContain('category1');
    expect(rowData.text()).toContain('length1');
  });

  it('provides a link to watch the course', () => {
    const course = { id: 'id1', watchHref: 'watchHref1', title: 'Title 1', authorId: 'author1', length: 'length1', category: 'category1'};
    const wrapper = mount(<CourseListRow course={course}/>);
    const firstAnchor = wrapper.find('a').get(0);
    expect(firstAnchor.text).toBe('Watch');
    expect(firstAnchor.getAttribute('href')).toEqual('watchHref1');
  });

  it('provides a link to course details with title', () => {
    const course = { id: 'id1', watchHref: 'watchHref1', title: 'Title 1', authorId: 'author1', length: 'length1', category: 'category1'};
    const wrapper = mount(<CourseListRow course={course}/>);
    const rowData = wrapper.find('tr');
    expect(rowData.text()).toContain('Title 1');
    const linkProps = wrapper.find(Link).props();
    expect(linkProps.to).toEqual('/courses/id1');
  });
});

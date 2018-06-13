import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from "./CourseListRow";

describe('CourseList', () => {
  it('renders table headers', () => {
    const headerText = [
      '',
      'Title',
      'Author',
      'Category',
      'Length'
    ];
    const courses = [];
    const wrapper = shallow(<CourseList courses={courses}/>);
    const columnHeaders = wrapper.find('tr').props().children;

    expect(columnHeaders[1].props.children).toBe(headerText[1]);
    expect(columnHeaders[2].props.children).toBe(headerText[2]);
    expect(columnHeaders[3].props.children).toBe(headerText[3]);
    expect(columnHeaders[4].props.children).toBe(headerText[4]);
  });

  it('renders correct number of CourseListRows', () => {
    const courses = [
      { id: '1', watchHref: 'watchHref1', title: 'Title 1', authorId: 'author1', length: '1', category: 'category1'},
      { id: '2', watchHref: 'watchHref2', title: 'Title 2', authorId: 'author2', length: '2', category: 'category2'}
    ];
    const wrapper = shallow(<CourseList courses={courses}/>);
    const courseListRows = wrapper.find(CourseListRow);
    expect(courseListRows.length).toEqual(2);
  });

  it('renders passes correct data to CourseListRow', () => {
    const courses = [
      { id: '1', watchHref: 'watchHref1', title: 'Title 1', authorId: 'author1', length: '1', category: 'category1'},
      { id: '2', watchHref: 'watchHref2', title: 'Title 2', authorId: 'author2', length: '2', category: 'category2'}
    ];
    const wrapper = shallow(<CourseList courses={courses}/>);
    const courseListRows = wrapper.find(CourseListRow);
    const firstCourse = courseListRows.get(0).props.course;
    expect(firstCourse).toEqual(courses[0]);
    const secondCourse = courseListRows.get(1).props.course;
    expect(secondCourse).toEqual(courses[1]);
  });
});

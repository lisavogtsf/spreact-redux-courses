import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { CoursesPage } from './CoursesPage';
import CourseList from "./CourseList";


describe('CoursesPage', () => {
  let courses, props, wrapper;

  beforeEach(() => {
    courses = [
      { id: 'course-id-1', watchHref: 'watchHref1', title: 'Title 1', authorId: 'author1', length: '1', category: 'category1'},
      { id: 'course-id-2', watchHref: 'watchHref2', title: 'Title 2', authorId: 'author2', length: '2', category: 'category2'}
    ];
    props = {
      courses: courses,
      actions: {}
    };
    wrapper = shallow(<CoursesPage {...props}/>);
  });

  it('renders the heading with correct text', () => {
    const header = wrapper.find('h1');
    expect(header.text()).toBe('Courses');
  });

  describe('"Add Course" button', () => {
    it('renders button with Add Course text', () => {
      const button = wrapper.find('.btn.btn-primary');
      expect(button.props().value).toBe('Add Course');
    });

    xit('onClick redirects to add course page');
  });

  describe('CourseList component', () => {
    describe('when there are courses', () => {
      it('renders a CourseList component', () => {
        const courseList = wrapper.find(CourseList);
        expect(courseList.length).toEqual(1);
      });

      it('passes the correct data to CourseList', () => {
        const courseList = wrapper.find(CourseList);
        expect(courseList.get(0).props.courses).toEqual(courses);
      });
    });

    describe('when there are no courses', () => {
      beforeEach(() => {
        courses = [];
        props = {
          courses: courses,
          actions: {}
        };

        wrapper = shallow(<CoursesPage {...props}/>);
      });

      it('shows a message that there are no courses', () => {
        const message = wrapper.find('.empty-courses-message');
        expect(message.text()).toBe('No courses available');
      });

      it('does not render the CourseList', () => {
        expect(wrapper.find(CourseList).length).toEqual(0);
      });
    });
  });
});

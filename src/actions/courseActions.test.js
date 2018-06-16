import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

//test a synchronous action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      //act
      const createdCourse = courseActions.createCourseSuccess(course);

      //assert
      expect(createdCourse).toEqual(expectedAction);
    });
  });
});

import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

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

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe('Course Actions -- async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // sample call to nock with real endpoint vs mockApi
    // returns desired response
    // nock('http://www.example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{id: 1, firstName: 'Grace', lastName: 'Hopper'}] }});

    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL},
      { type: types.LOAD_COURSES_SUCCESS, body: { course: [{id: 1, firstName: 'Grace', lastName: 'Hopper'}] }}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});

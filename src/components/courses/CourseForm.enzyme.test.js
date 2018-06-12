import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import CourseForm from './CourseForm';
import TestUtils from "react-addons-test-utils";

function setup(loading) {
  const props = {
    allAuthors: [],
    course: {},
    errors: {},
    loading: loading,
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>);
}

it('renders form and heading', () => {
  const wrapper = setup(false);
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h1').text()).toEqual('Manage Course');
});

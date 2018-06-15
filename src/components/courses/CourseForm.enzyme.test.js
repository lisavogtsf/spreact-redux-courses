import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import CourseForm from './CourseForm';

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

describe('CourseForm via enzyme', () => {
  it('renders form and heading', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});


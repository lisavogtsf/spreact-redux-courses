import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(loading) {
  let props = {
    allAuthors: [],
    course: {},
    errors: {},
    loading: loading,
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Utils', () => {
  it('renders form and heading', () => {
    const { output } = setup();

    expect(output.type).toBe('form');
    // let [ firstChild ] = output.props.children;
    let firstChild = output.props.children[0];
    expect(firstChild.type).toBe('h1');
  });

  it('renders a save button labeled "Save" when not saving', () => {
    const { output } = setup(false);
    const sixthChild = output.props.children[5];
    expect(sixthChild.props.value).toBe('Save');
  });

  it('renders a save button labeled "Saving..." when saving', () => {
    const { output } = setup(true);
    const sixthChild = output.props.children[5];
    expect(sixthChild.props.value).toBe('Saving...');
  });
});

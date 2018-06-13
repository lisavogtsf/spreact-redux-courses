import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SelectInput from './SelectInput';


describe('SelectInput (Common)', () => {
  let wrapper, props, emptyFunction;
  emptyFunction = () => {};

  beforeEach(() => {
    props = {
      name: 'thingId',
      label: 'Thing we are selecting',
      onChange: emptyFunction,
      defaultOption: 'Use this to select a thing',
      value: 'thingValue',
      options: [{value: 'val1', text: 'Kittens McGee'}, { value: 'val2', text: 'Fluffy Mittens'}]
    };
  });

  describe('when there is not an error', () => {
    beforeEach(() => {
      wrapper = shallow(<SelectInput {...props} />);
    });

    it('renders the correct label', () => {
      expect(wrapper.find('label').text()).toBe(props.label);
    });

    it('has no error message', () => {
      expect(wrapper.find('.field').children().length).toEqual(1);
    });

    it('renders a select element with correct name and value', () => {
      const selectProps = wrapper.find('select').get(0).props;
      expect(selectProps.name).toBe('thingId');
      expect(selectProps.value).toBe('thingValue');
      expect(selectProps.onChange).toBe(emptyFunction);
    });

    it('renders a default value', () => {
      const defaultOption = wrapper.find('option').get(0);
      expect(defaultOption.props.children).toBe('Use this to select a thing');
    });

    it('renders the provided options in the select element', () => {
      const options = wrapper.find('option');
      expect(options.length).toEqual(3);

      const option1 = options.get(1);
      const option2 = options.get(2);
      expect(option1.props.children).toBe('Kittens McGee');
      expect(option2.props.children).toBe('Fluffy Mittens');
    });
  });

  describe('when there is an error', () => {
    beforeEach(() => {
      props = Object.assign({}, props, {error: "bad bad thing"});
      wrapper = shallow(<SelectInput {...props} />);
    });
    it('renders the error', () => {
      expect(wrapper.find('.field').children().length).toEqual(2);
      expect(wrapper.find('.alert-danger').text()).toBe('bad bad thing');
    });
  });
});

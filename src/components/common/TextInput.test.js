import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import TextInput from './TextInput';

describe('TextInput (Common)', () => {
  let wrapper, props, emptyFunction;

  beforeEach(() => {
    emptyFunction = () => {};

    props = {
      name: 'title',
      label: 'Title',
      onChange: emptyFunction,
      placeholder: 'holding the place',
      value: 'To Kill a Mockingbird',
      error: ''
    };
    wrapper = shallow(<TextInput {...props}/>);
  });

  it('renders a label with the correct text and htmlFor', () => {
    const label = wrapper.find('label');
    expect(label.text()).toBe('Title');
    expect(label.get(0).props.htmlFor).toBe('title');
  });

  it('renders an input with correct values from props', () => {
    const inputProps = wrapper.find('input').get(0).props;
    expect(inputProps.name).toBe('title');
    expect(inputProps.value).toBe('To Kill a Mockingbird');
    expect(inputProps.placeholder).toBe('holding the place');
    expect(inputProps.onChange).toBe(emptyFunction);
  });


  describe('given there are no errors', () => {
    beforeEach(() => {
      emptyFunction = () => {};

      props = {
        name: 'title',
        label: 'Title',
        onChange: emptyFunction,
        placeholder: 'holding the place',
        value: 'To Kill a Mockingbird',
        error: ''
      };
      wrapper = shallow(<TextInput {...props}/>);
    });

    it('adds only "form-group" class if there are no errors', () => {
      let formGroupClassName = wrapper.get(0).props.className;
      expect(formGroupClassName).toBe('form-group');
      expect(formGroupClassName).toNotInclude('has-error');
    });

    it('does not render an alert with error text', () => {
      const field = wrapper.find('.field');
      expect(field.length).toEqual(1);
    });
  });

  describe('given there are errors', () => {
    beforeEach(() => {
      emptyFunction = () => {};

      props = {
        name: 'title',
        label: 'Title',
        onChange: emptyFunction,
        placeholder: 'holding the place',
        value: 'To Kill a Mockingbird',
        error: 'TypeError'
      };
      wrapper = shallow(<TextInput {...props}/>);
    });

    it('adds "form-group" and "has-error" classes if there are any errors', () => {
      let formGroupClassName = wrapper.get(0).props.className;
      expect(formGroupClassName).toBe('form-group has-error');
    });

    it('renders an alert with error text', () => {
      const field = wrapper.find('.field');
      expect(field.find('.alert-danger').length).toEqual(1);
      expect(field.find('.alert-danger').text()).toBe(props.error);
    });
  });


});

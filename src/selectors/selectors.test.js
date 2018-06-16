import expect from 'expect';
import {authorsFormattedForDropdown} from "./selectors";

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'jules-verne', firstName: 'Jules', lastName: 'Verne'},
        {id: 'ursula-leguin', firstName: 'Ursula', lastName: 'LeGuin'}
      ];

      const expected = [
        { value: 'jules-verne', text: 'Jules Verne' },
        { value: 'ursula-leguin', text: 'Ursula LeGuin'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});

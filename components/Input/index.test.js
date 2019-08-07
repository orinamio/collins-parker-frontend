import React from 'react';
import { render, fireEvent } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import Input from './index.js';

const setup = () => {
  const utils = render(
    <Input
      placeholder="First Name"
      aria-label="first-name"
      prepend={<h6 aria-label="prepended-element">$</h6>}
    />
  );
  const input = utils.getByLabelText('first-name');

  return {
    input,
    ...utils
  };
};

test('<Input /> handles "onChange" when input value changes', () => {
  const { input } = setup();
  expect(input.value).toBe('');
  fireEvent.change(input, { target: { value: 'Orinami' } });
  expect(input).toHaveValue('Orinami');
});

test('<Input /> shows prepended element', () => {
  const { getByLabelText } = setup();
  const prependedElement = getByLabelText('prepended-element');
  expect(prependedElement).toBeInTheDocument();
});

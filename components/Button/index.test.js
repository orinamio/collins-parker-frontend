import React from 'react';
import { render, fireEvent } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';

import Button from './index.js';

test('calls "onClick" prop on <Button /> click and button has a title', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button title="Login" onClick={onClick} />);
  const button = getByText(/^login/i);

  expect(button).toHaveTextContent('Login');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

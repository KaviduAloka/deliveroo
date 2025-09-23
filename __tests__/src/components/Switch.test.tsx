import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Switch from '../../../src/components/Switch';

jest.mock('../../../src/assets', () => ({
  images: {
    switch_on: 'on_image',
    switch_off: 'off_image',
  },
}));

describe('Switch component', () => {
  it('renders the ON image when value is true', () => {
    const { getByTestId } = render(
      <Switch value={true} onChange={jest.fn()} />,
    );
    // The Image is given accessibilityRole="image" automatically
    const img = getByTestId('switch-icon');
    expect(img.props.source).toBe('on_image');
  });

  it('renders the OFF image when value is false', () => {
    const { getByTestId } = render(
      <Switch value={false} onChange={jest.fn()} />,
    );
    const img = getByTestId('switch-icon');
    expect(img.props.source).toBe('off_image');
  });

  it('calls onChange with the opposite value when pressed', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <Switch value={false} onChange={onChangeMock} />,
    );
    const button = getByRole('button'); // TouchableOpacity maps to role=button
    fireEvent.press(button);
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  it('toggles from true to false when pressed', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <Switch value={true} onChange={onChangeMock} />,
    );
    fireEvent.press(getByRole('button'));
    expect(onChangeMock).toHaveBeenCalledWith(false);
  });
});

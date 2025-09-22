import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../../../src/components/Button'; // adjust the path to match your project

describe('<Button />', () => {
  it('renders its children text', () => {
    const { getByText } = render(<Button onPress={() => {}}>Hello</Button>);
    expect(getByText('Hello')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByRole } = render(<Button onPress={onPressMock}>Tap</Button>);

    // TouchableOpacity exposes the "button" accessibilityRole by default
    const button = getByRole('button');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not crash if onPress is a no-op', () => {
    const { getByRole } = render(<Button onPress={() => {}}>No Crash</Button>);
    const button = getByRole('button');

    // Should not throw even if the callback is empty
    expect(() => fireEvent.press(button)).not.toThrow();
  });
});

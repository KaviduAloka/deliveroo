import React from 'react';
import { render } from '@testing-library/react-native';
import Divider from '../../../src/components/Divider'; // adjust import path
import { ThemeContext } from '../../../src/components/ThemeContext'; // adjust to your actual ThemeContext

// A simple fake theme to pass to the provider
const mockTheme = {
  mode: '',
  backgroundColor: '',
  backgroundLightColor: '#e0e0e0',
  textColor: '',
  textLightColor: '',
};

describe('<Divider />', () => {
  const renderWithTheme = (ui: React.ReactElement) =>
    render(
      <ThemeContext.Provider
        value={{ theme: mockTheme, toggleTheme: () => {} }}
      >
        {ui}
      </ThemeContext.Provider>,
    );

  it('renders with default styles and theme border color', () => {
    const { getByTestId } = renderWithTheme(<Divider />);
    const divider = getByTestId('divider');

    // Should include borderBottomColor from the theme
    const styleArray = divider.props.style;
    const flattened = Array.isArray(styleArray)
      ? Object.assign({}, ...styleArray)
      : styleArray;

    expect(flattened.borderBottomColor).toBe(mockTheme.backgroundLightColor);
  });

  it('merges extra style prop', () => {
    const extraStyle = { marginVertical: 10 };
    const { getByTestId } = renderWithTheme(<Divider style={extraStyle} />);
    const divider = getByTestId('divider');

    const styleArray = divider.props.style;
    const flattened = Array.isArray(styleArray)
      ? Object.assign({}, ...styleArray)
      : styleArray;

    expect(flattened.marginVertical).toBe(10);
  });
});

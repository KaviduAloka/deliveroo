import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from '../../../../src/components/typography';
import { ThemeContext } from '../../../../src/components/ThemeContext';

// a simple mock theme
const mockTheme = {
  theme: {
    textColor: '#ff0000',
  },
};

describe('Text component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={mockTheme}>
        <Text>Hello World</Text>
      </ThemeContext.Provider>,
    );
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('applies the correct fontWeight from weight prop', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={mockTheme}>
        <Text weight="700">Bold Text</Text>
      </ThemeContext.Provider>,
    );
    const node = getByText('Bold Text');
    expect(node.props.style.fontWeight).toBe('700');
  });

  it('includes theme textColor in style when style is an object', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={mockTheme}>
        <Text>Hello Theme</Text>
      </ThemeContext.Provider>,
    );
    const node = getByText('Hello Theme');
    // style is merged into an object; theme textColor should appear
    expect(node.props.style.color).toBe('#ff0000');
  });

  it('merges style array correctly (does not overwrite color if array)', () => {
    const customColor = { color: '#00ff00' };
    const { getByText } = render(
      <ThemeContext.Provider value={mockTheme}>
        <Text style={[customColor, { fontSize: 18 }]}>Styled Array</Text>
      </ThemeContext.Provider>,
    );
    const node = getByText('Styled Array');
    // when style is array, component just prepends fontWeight
    const merged = node.props.style;
    expect(Array.isArray(merged)).toBe(true);
    // first element is { fontWeight: ... }
    expect(merged[0]).toHaveProperty('fontWeight', 'normal');
    // ensure our custom color is preserved
    expect(merged).toEqual(
      expect.arrayContaining([expect.objectContaining({ color: '#00ff00' })]),
    );
  });

  it('passes down defaultTextProps', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={mockTheme}>
        <Text defaultTextProps={{ numberOfLines: 2 }}>With Props</Text>
      </ThemeContext.Provider>,
    );
    const node = getByText('With Props');
    expect(node.props.numberOfLines).toBe(2);
  });
});

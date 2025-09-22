import React from 'react';
import { render } from '@testing-library/react-native';
import CommonSpace from '../../../src/components/CommonSpace'; // adjust the path if needed

describe('<CommonSpace />', () => {
  it('renders a View with no explicit width/height by default', () => {
    const { getByTestId } = render(<CommonSpace />);
    const view = getByTestId('common-space');

    // When no props are provided, width/height should be undefined
    expect(view.props.style).toMatchObject({
      width: undefined,
      height: undefined,
    });
  });

  it('applies width and height when passed as props', () => {
    const { getByTestId } = render(<CommonSpace width={20} height={40} />);
    const view = getByTestId('common-space');

    expect(view.props.style).toMatchObject({ width: 20, height: 40 });
  });

  it('handles only width or only height correctly', () => {
    const { getByTestId } = render(<CommonSpace width={15} />);
    const view = getByTestId('common-space');

    expect(view.props.style).toMatchObject({ width: 15, height: undefined });
  });
});

import React, { ReactNode, useContext } from 'react';
import { Text as RNText, StyleProp, TextProps, TextStyle } from 'react-native';
import { ThemeContext } from '../ThemeContext';

interface Props {
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
  defaultTextProps?: TextProps;
}

const Text: React.FC<Props> = ({
  weight = 'normal',
  children,
  style = {},
  defaultTextProps = {},
}) => {
  const theme = useContext(ThemeContext);

  let customStyle: StyleProp<TextStyle> = {};
  if (style instanceof Array) {
    customStyle = [{ fontWeight: weight }, ...style];
  } else {
    customStyle = {
      fontWeight: weight,
      color: theme.theme.textColor,
      fontFamily: 'IBMPlexSans-Regular',
      ...style,
    };
  }

  return (
    <RNText {...defaultTextProps} style={customStyle}>
      {children}
    </RNText>
  );
};

export default Text;

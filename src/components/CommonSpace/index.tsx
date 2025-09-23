import React from 'react';
import { View } from 'react-native';

interface Props {
  width?: number;
  height?: number;
}

const CommonSpace: React.FC<Props> = ({ width, height }) => {
  return <View testID="common-space" style={{ width, height }} />;
};

export default CommonSpace;

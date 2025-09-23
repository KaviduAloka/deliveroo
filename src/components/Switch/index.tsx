import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { images } from '../../assets';

interface Props {
  value: boolean;
  onChange: (state: boolean) => void;
}

const Switch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      onPress={() => onChange(!value)}
    >
      <Image
        testID="switch-icon"
        source={value ? images.switch_on : images.switch_off}
      />
    </TouchableOpacity>
  );
};

export default Switch;

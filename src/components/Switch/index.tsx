import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { images } from '../../assets';

interface Props {
  value: boolean;
  onChange: (state: boolean) => void;
}

const Switch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onChange(!value)}>
      <Image source={value ? images.switch_on : images.switch_off} />
    </TouchableOpacity>
  );
};

export default Switch;

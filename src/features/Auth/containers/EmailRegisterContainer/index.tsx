import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Image, ScrollView } from 'react-native';
import { TextInput } from '../../../../components/typography';
import Button from '../../../../components/Button';
import { images } from '../../../../assets';
import styles from './styles';
import { ThemeContext } from '../../../../components/ThemeContext';
import { emailRegister } from '../../store/actions';

const EmailRegisterContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const validate = () => {
    let errorMessage = null;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errorMessage = 'Invalid e-mail address';
    } else if (password.length < 6) {
      errorMessage = 'Password must be at least 6 characters';
    } else if (password !== confirmPassword) {
      errorMessage = 'Passwords do not match';
    }

    if (errorMessage !== null) {
      Alert.alert('Invalid input', errorMessage, [
        { text: 'Ok', style: 'destructive' },
      ]);
    } else {
      registerUser();
    }
  };

  const registerUser = () => {
    dispatch(emailRegister({ data: { email: 'ASDSAD', password: 'sadasd' } }));
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.backgroundLightColor },
      ]}
    >
      <Image
        source={images.deliveroo_logo_transparent}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        label="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button style={styles.button} onPress={validate}>
        Register
      </Button>
    </ScrollView>
  );
};

export default EmailRegisterContainer;

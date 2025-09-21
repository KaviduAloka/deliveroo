import React, { useContext, useState } from 'react';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../../../components/ThemeContext';
import styles from './styles';
import { images } from '../../../../assets';
import { goBack } from '../../../../navigation/NavigationService';
import { Text, TextInput } from '../../../../components/typography';
import Button from '../../../../components/Button';
import { googleSignin } from '../../store/actions';
import { navigateToRegisterWithEmail } from '../../../../navigation/navigationHelpers';

const LoginScreenContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    dispatch(googleSignin());
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.backgroundLightColor },
      ]}
    >
      <TouchableOpacity style={styles.backArrowButton} onPress={goBack}>
        <Image source={images.back_arrow_24} style={styles.backArrowIcon} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image
          source={images.deliveroo_logo_horizontal}
          style={styles.logo}
          resizeMode="contain"
        />
        <TextInput
          label="Email address"
          placeholder="Johndoe@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label="Password"
          placeholder="*********"
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={() => {}} style={styles.button}>
          Sign in
        </Button>
        <TouchableOpacity onPress={navigateToRegisterWithEmail}>
          <Text style={styles.signUpText}>Sign up with email address</Text>
        </TouchableOpacity>
        <Text>{'\nOR\n'}</Text>
        <GoogleSigninButton
          style={styles.googleSigninButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleSignIn}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreenContainer;

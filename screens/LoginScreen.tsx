import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { onboardingStyles } from './SignUpScreen';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('locavore@greenthumb.market');
  const [password, setPassword] = useState('fefefefe');

  const handleLogin = () => {
    console.log('Login:', { email, password });
    setEmail('');
    setPassword('');
    navigation.push('Home');
  };

  const handleRedirect = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={onboardingStyles.container}>
      <Text style={onboardingStyles.header}>Welcome back 👋</Text>
      <Text style={onboardingStyles.label}>Email</Text>
      <TextInput
        style={onboardingStyles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType={'email-address'}
        placeholder="locavore@mycoolmarket.com"
      />

      <Text style={onboardingStyles.label}>Password</Text>
      <TextInput
        style={onboardingStyles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={onboardingStyles.button} onPress={handleLogin}>
        <Text style={onboardingStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRedirect}>
        <Text style={onboardingStyles.link}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface SignUpScreenProps {
  navigation: any;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Signup:', { email, password });
    navigation.push('Home');
  };

  const handleRedirect = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={onboardingStyles.container}>
      <Text style={onboardingStyles.header}>Welcome 👋</Text>
      <Text style={onboardingStyles.label}>Email</Text>
      <TextInput
        style={onboardingStyles.input}
        keyboardType={'email-address'}
        placeholder={'locavore@mycoolmarket.com'}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={onboardingStyles.label}>Password</Text>
      <TextInput
        style={onboardingStyles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={onboardingStyles.button} onPress={handleSignUp}>
        <Text style={onboardingStyles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRedirect}>
        <Text style={onboardingStyles.link}>
          Alreday have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#3FB8AF',
    padding: 10,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: '#696969',
  },
});

export default SignUpScreen;

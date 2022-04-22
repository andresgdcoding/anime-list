import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SigninScreen = ({ navigation }) => {
  return <>
    <Spacer>
      <Text h3> Sign In </Text>
    </Spacer>
    <Spacer>
      <Input label="Email" />
    </Spacer>
    <Spacer>
      <Input label="Password" />
    </Spacer>
    <Spacer>
      <Button title="Sign In" onPress={() => navigation.navigate('Login')}/>
    </Spacer>
  </>
};

const styles = StyleSheet.create({});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SigninScreen;


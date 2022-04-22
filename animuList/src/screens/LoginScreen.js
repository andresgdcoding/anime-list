import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

const LoginScreen = ({ navigation }) => {
  return <>
    <Text style = {{fontSize: 40}}>LoginScreen</Text>
    <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')}></Button> 
    <Button title="Login" onPress={() => navigation.navigate('mainFlow')}></Button> 
  </>  
};

const styles = StyleSheet.create({});

export default LoginScreen;


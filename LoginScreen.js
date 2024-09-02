import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles';

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={require('../assets/coffee-bean-logo.png')} style={styles.logo} />
    <Image source={require('../assets/coffee-image.png')} style={styles.bannerImage} />
    <Text style={styles.bannerText}>Start your day with a lovely cup of freshly brewed coffee...</Text>
    <TextInput style={styles.input} placeholder="Enter your Email address" />
    <TextInput style={styles.input} placeholder="Enter your passcode" secureTextEntry />
    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Order')}>
      <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
    <Text style={styles.forgotPassword}>Forgot password?</Text>
    <Text>or login with account</Text>
    <View style={styles.socialButtons}>
      <TouchableOpacity style={styles.googleButton}>
        <Text>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton}>
        <Text>Apple</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default LoginScreen;
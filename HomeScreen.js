import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';

const HomeScreen = () => (
  <View style={styles.container}>
    <Image source={require('../assets/coffee-bean-logo.png')} style={styles.logo} />
    <View style={styles.banner}>
      <Text style={styles.bannerHeader}>FRESH BREWED COFFEE</Text>
      <Text style={styles.bannerSubHeader}>DELIVERED TO YOUR DOOR-STEP</Text>
    </View>
  </View>
);

export default HomeScreen;
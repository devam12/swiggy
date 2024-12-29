import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const CreditCardBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>CREDIT CARD</Text>
        <Text style={styles.subtitle}>LIFETIME FREE, JUST FOR YOU</Text>
      </View>
      <Image 
        src={require('../../assets/images/splash.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5EE',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B00',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 60,
    height: 40,
  },
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlertScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Price Alerts</Text>
      <Text style={styles.sub}>Set alerts on markets to get notified when probability crosses your target.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
    padding: 24,
  },
  heading: {
    color: '#F8F9FA',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  sub: {
    color: '#ADB5BD',
    fontSize: 15,
    lineHeight: 22,
  },
});

export default AlertScreen;

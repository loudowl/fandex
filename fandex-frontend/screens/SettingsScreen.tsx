import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userSlice';

const SettingsScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <Text style={styles.item} onPress={() => dispatch(logout())}>
        Sign Out
      </Text>
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
    marginBottom: 24,
  },
  item: {
    color: '#DC3545',
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#343A40',
  },
});

export default SettingsScreen;

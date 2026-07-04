import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Market {
  id: string;
  title: string;
  yesProbability: number;
  volume: number;
  category: string;
}

const MarketCard = ({ market }: { market: Market }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('MarketDetail', { marketId: market.id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.title}>{market.title}</Text>
      <Text style={styles.probability}>YES: {market.yesProbability}%</Text>
      <Text style={styles.volume}>Volume: {market.volume}</Text>
      <Text style={styles.category}>{market.category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  probability: {
    fontSize: 16,
    color: '#007BFF',
  },
  volume: {
    fontSize: 14,
    color: '#6C757D',
  },
  category: {
    fontSize: 14,
    color: '#6F42C1',
  },
});

export default MarketCard;

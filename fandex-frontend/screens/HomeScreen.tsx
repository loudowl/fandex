import React, { useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarketsStart, fetchMarketsSuccess, fetchMarketsFailure } from '../redux/slices/marketSlice';
import MarketCard from '../components/MarketCard';
import api from '../utils/api';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { markets, loading, error } = useSelector((state: any) => state.market);

  useEffect(() => {
    const fetchMarkets = async () => {
      dispatch(fetchMarketsStart());
      try {
        const response = await api.get('/api/markets');
        dispatch(fetchMarketsSuccess(response.data));
      } catch (err) {
        dispatch(fetchMarketsFailure(err.toString()));
      }
    };

    fetchMarkets();
    const intervalId = setInterval(fetchMarkets, 60000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={markets}
        renderItem={({ item }) => <MarketCard market={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
  },
});

export default HomeScreen;

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const PortfolioScreen = () => {
  const { items } = useSelector((state: any) => state.portfolio);

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <Text style={styles.empty}>No positions yet. Add markets from the feed.</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.prob}>YES: {item.yesProbability}%</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
    padding: 16,
  },
  empty: {
    color: '#ADB5BD',
    textAlign: 'center',
    marginTop: 48,
    fontSize: 15,
  },
  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#343A40',
  },
  title: {
    color: '#F8F9FA',
    fontSize: 16,
    fontWeight: '600',
  },
  prob: {
    color: '#0D6EFD',
    fontSize: 14,
    marginTop: 4,
  },
});

export default PortfolioScreen;

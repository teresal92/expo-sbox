import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ColorPalettePreview = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.heading}>{item.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={item.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => {
          return (
            <View
              style={[styles.box, { backgroundColor: item.hexCode }]}
            ></View>
          );
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  box: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default ColorPalettePreview;

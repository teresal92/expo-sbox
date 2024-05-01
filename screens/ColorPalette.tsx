import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ColorBox from '../components/ColorBox';

// TODO: type route
const ColorPalette = ({ route }) => {
  /* Get the param from route object */
  const { colors } = route.params.item;

  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
  },
});

export default ColorPalette;

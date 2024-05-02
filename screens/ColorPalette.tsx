import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

import ColorBox from '../components/ColorBox';

// TODO: type route
const ColorPalette = ({ route }) => {
  /* Get the param from route object */
  const { colors } = route.params;

  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default ColorPalette;

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Color } from '../screens/Home';

type ColorPalettePreviewProp = {
  colors: Array<Color>;
};

const ColorPalettePreview: React.FC<ColorPalettePreviewProp> = ({ colors }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => {
          const backgroundStyle = {
            backgroundColor: item.hexCode,
          };
          return <View style={[styles.box, backgroundStyle]}></View>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  box: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    marginRight: 10,
  },
});

export default ColorPalettePreview;

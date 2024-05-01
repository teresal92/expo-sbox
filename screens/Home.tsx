import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import ColorPalettePreview from '../components/ColorPalettePreview';

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
  {
    paletteName: 'Solarized',
    colors: SOLARIZED,
  },
  {
    paletteName: 'Rainbow',
    colors: RAINBOW,
  },
  {
    paletteName: 'FrontEnd Masters',
    colors: FRONTEND_MASTERS,
  },
];

// TODO: typecheck navigate: https://reactnavigation.org/docs/typescript/#type-checking-the-navigator

// update the app so that the colors and name are being passed into the ColorPalette component, making it reusable. Docs
// make sure the page title will be the name of the color palette instead of the name of the page. Docs
// add two more color schemes: Rainbow and Frontend Masters (hint: you create a COLOR_PALETTES array and use a FlatList to render them)
// update the Home page to display the first 5 colors of the color scheme as preview (stretch goal)

const Home = ({ navigation: { navigate } }) => {
  return (
    <FlatList
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              /* Navigate to route with colors params */
              navigate('ColorPalette', {
                item,
              });
            }}
          >
            <Text style={styles.textStyle}>{item.paletteName}</Text>
          </TouchableOpacity>
          <ColorPalettePreview colors={item.colors} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Home;

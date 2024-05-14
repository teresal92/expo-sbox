import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import ColorPalettePreview from '../components/ColorPalettePreview';

const Home = ({ navigation, route }) => {
  // get new color palette from AddNewPaletteModal to add to color palette
  const newColorPalette = route.params?.newColorPalette;

  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchColorPalettes();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchColorPalettes();
    setIsRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.push('AddNewPaletteModal')}>
          <Text style={styles.buttonText}>Add a color scheme</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.list}
          data={colorPalettes}
          keyExtractor={(item) => item.paletteName}
          renderItem={({ item }) => (
            <ColorPalettePreview
              item={item}
              onPress={() => {
                navigation.push('ColorPalette', {
                  paletteName: item.paletteName,
                  colors: item.colors,
                });
              }}
            />
          )}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 30,
  },
  list: {
    flex: 1,
  },
});

export default Home;

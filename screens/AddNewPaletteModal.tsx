import React, { useState, useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import ColorPicker from '../components/ColorPicker';

import { COLORS } from '../data/colors';

export type Color = {
  colorName: string;
  hexCode: string;
};

const AddNewPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState<Color[]>([]);

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('You must enter a name for the color palette');
      return;
    } else if (selectedColors.length < 3) {
      Alert.alert('You must select at least 3 colors for the color palette');
      return;
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: selectedColors,
      };
      navigation.navigate('Home', { newColorPalette });
    }
  }, [name]);

  // track selected colors
  const handleUpdate = useCallback(
    (color, isSelected) => {
      if (isSelected) {
        setSelectedColors((current) => [...current, color]);
      } else {
        setSelectedColors((current) =>
          current.filter((c) => c.colorName !== color.colorName),
        );
      }
    },
    [selectedColors, setSelectedColors],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name of your color palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        defaultValue="Palette name"
      />
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorPicker
            item={item}
            handleUpdate={(isSelected) => handleUpdate(item, isSelected)}
            selectedColors={selectedColors}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    marginBottom: 40,
    padding: 10,
    backgroundColor: '#3FB8AF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
});

export default AddNewPaletteModal;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { Color } from '../screens/AddNewPaletteModal';

type ColorPickerProps = {
  item: Color;
  selectedColors: any;
  handleUpdate: (
    color: { colorName: string; hexCode: string },
    newVal: boolean,
  ) => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({
  item,
  selectedColors,
  handleUpdate,
}) => {
  return (
    <View style={styles.container}>
      <Text>{item.colorName}</Text>
      <Switch
        trackColor={{ false: '#767577', true: item.hexCode }}
        thumbColor={true ? '#767577' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(newVal) => handleUpdate(item, newVal)}
        value={!!selectedColors.find((c) => c.colorName === item.colorName)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ColorPicker;

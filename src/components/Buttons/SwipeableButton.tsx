import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
interface ISweapleButton {
  action: (item?: string) => void;
  buttonBackground: string;
  title: string;
  topLeft?: number;
  bottomLeft?: number;
  bottomRight?: number;
  topRight?: number;
  iconName: string;
  iconSize: number;
  iconColor: string;
}

const SwipeableButton = ({
  action,
  title,
  topLeft,
  bottomLeft,
  bottomRight,
  topRight,
  buttonBackground,
  iconName,
  iconSize,
  iconColor,
}: ISweapleButton) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer(
        buttonBackground,
        topLeft,
        bottomLeft,
        bottomRight,
        topRight,
      )}
      onPress={action}>
      <Icon
        style={{marginBottom: 8}}
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
      <Text style={styles.buttonTitle}> {title} </Text>
    </TouchableOpacity>
  );
};

export default SwipeableButton;

const styles = StyleSheet.create({
  buttonContainer: (
    buttonBackground: string,
    topLeft: number,
    bottomLeft: number,
    bottomRight: number,
    topRight: number,
  ) => ({
    flexDirection: 'row',
    backgroundColor: buttonBackground,
    width: 64,
    flexDirection: 'column',
    borderBottomLeftRadius: bottomLeft ?? 0,
    borderTopLeftRadius: topLeft ?? 0,
    borderBottomRightRadius: bottomRight ?? 0,
    borderTopRightRadius: topRight ?? 0,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  buttonTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

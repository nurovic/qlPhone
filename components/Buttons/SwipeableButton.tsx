import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface ISweapleButton {
  action: (item?: string) => void;
  buttonBackground: string;
  title: string;
  topLeft?: number;
  bottomLeft?: number;
  bottomRight?: number;
  topRight?: number;
}

const SwipeableButton = ({
  action,
  title,
  topLeft,
  bottomLeft,
  bottomRight,
  topRight,
  buttonBackground,
}: ISweapleButton) => {
  return (
    <View
      style={styles.buttonContainer(
        buttonBackground,
        topLeft,
        bottomLeft,
        bottomRight,
        topRight,
      )}>
      <TouchableOpacity onPress={action}>
        <Text style={styles.buttonTitle}> {title} </Text>
      </TouchableOpacity>
    </View>
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

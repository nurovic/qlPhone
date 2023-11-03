import {Alert} from 'react-native';
import React from 'react';
import SwipeableButton from '../Buttons/SwipeableButton';
const RightButtonActions = () => {
  const completeDelete = (item: string) => {
    console.log('deleted Product', item);
  };
  const handleDelete = (item: string) => {
    Alert.alert('Error', 'Are you sure to delete the product?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Delete',
        onPress: () => completeDelete(item),
      },
    ]);
  };
  return (
    <SwipeableButton
      action={() => handleDelete('8')}
      buttonBackground={'red'}
      title={'Sil'}
      bottomRight={15}
      topRight={15}
      iconName="trash"
      iconSize={24}
      iconColor="#fff"
    />
  );
};

export default RightButtonActions;

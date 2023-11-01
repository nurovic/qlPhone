import React from 'react';
import SwipeableButton from '../Buttons/SwipeableButton';
const LeftButtonActions = () => {
  const handleDelete = (item: string) => {
    console.log(item);
  };
  return (
    <SwipeableButton
      action={() => handleDelete('4')}
      buttonBackground={'green'}
      title="Edit"
      topLeft={15}
      bottomLeft={15}
    />
  );
};

export default LeftButtonActions;

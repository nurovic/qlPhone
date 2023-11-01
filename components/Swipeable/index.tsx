import React from 'react';
import {Swipeable} from 'react-native-gesture-handler';

interface IProps {
  leftActions?: () => void;
  rightActions?: () => void;
  component?: () => void;
}
const index = ({leftActions, rightActions, component}: IProps) => {
  const design = component();
  return (
    <Swipeable
      renderLeftActions={null || leftActions}
      renderRightActions={null || rightActions}>
      {design}
    </Swipeable>
  );
};

export default index;

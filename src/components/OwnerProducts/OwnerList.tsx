import React from 'react';
import Swipeable from '../Swipeable';
import OwnerListItem from './OwnerListItem';
import RightActions from './RightButtonActions';
import LeftActions from './LeftButtonActions';
export default function OwnerList() {
  return (
    <Swipeable
      rightActions={RightActions}
      leftActions={LeftActions}
      component={OwnerListItem}
    />
  );
}

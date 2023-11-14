import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const index = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.route)}
      style={styles.containerWrap}>
      <View style={styles.container}>
        <Icon style={{marginRight: 6}} name={item.icon} size={25} />

        <Text style={{fontSize: 18, fontWeight: 700, color: '#424242'}}>
          {item.title}{' '}
        </Text>
      </View>

      <Icon style={{marginRight: 6}} name="chevron-forward" size={25} />
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    height: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerWrap: {
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    marginBottom: 8,
  },
});

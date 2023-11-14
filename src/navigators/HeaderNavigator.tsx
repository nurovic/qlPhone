import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
interface IHeaderNavigate {
  title: string;
  backButton: boolean;
}

const HeaderNavigator = ({title, backButton}: IHeaderNavigate) => {
  const navigation = useNavigation();

  return (
    <View style={styles.coontainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {backButton ? <Icon name="arrowleft" size={25} color="#fff" /> : null}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View></View>
    </View>
  );
};

export default HeaderNavigator;

const styles = StyleSheet.create({
  coontainer: {
    height: 50,
    backgroundColor: '#181cf197',
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    margin:6
  },
  title: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#fff',
  },
});

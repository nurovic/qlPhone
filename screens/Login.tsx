import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ResuableInput from '../components/Resuable/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export default function Login() {
  const navigation = useNavigation();
  const handleComment = async values => {
    // await AsyncStorage.removeItem('Token');
    await AsyncStorage.setItem('Token', values.email);
    navigation.replace('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          email: 'MERT',
          password: 'Nurovic',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          handleComment(values);
          resetForm();
        }}>
        {({
          values,
          setFieldTouched,
          handleChange,
          errors,
          isValid,
          handleSubmit,
        }) => (
          <View>
            <View>
              <View>
                <View></View>
                <View style={styles.inputWrap}>
                  <ResuableInput
                    placeholder="E Mail"
                    value={values.email}
                    handleChangeField={handleChange('email')}
                    focus={() => setFieldTouched('email')}
                    onBlur={() => setFieldTouched('email')}
                    autoCorrect={false}
                  />
                </View>
                <View style={styles.inputWrap}>
                  <ResuableInput
                    placeholder="Password"
                    value={values.password}
                    handleChangeField={handleChange('passwoASDrd')}
                    focus={() => setFieldTouched('password')}
                    onBlur={() => setFieldTouched('password')}
                    autoCorrect={false}
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.buttonWrap}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.button}>
                    <Text style={{color: '#181cf1b0', fontWeight: 500}}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    alignItems: 'center',
  },
  inputWrap: {
    height: 40,
    width: 200,
    borderWidth: 0.4,
    borderRadius: 6,
    paddingLeft: 12,
    marginBottom: 20,
  },
  buttonWrap: {
    justifyContent: 'center',
    marginTop: 8,
  },
  button: {
    alignItems: 'center',
    borderRadius: 6,
    borderColor: '#181cf1b0',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
  },
});

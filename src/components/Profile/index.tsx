import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ResuableInput from '../Resuable/Input.tsx';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
});

const handleComment = values => {
  console.log('VALUES INPUTS£');
  console.log(values, 'VALUES INPUTS');
};

export default function MakeComment() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: 'MERT',
          surname: 'Nurovic',
          email: 'nurovic@gmail.com',
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
                    placeholder="Name"
                    value={values.name}
                    handleChangeField={handleChange('name')}
                    focus={() => setFieldTouched('name')}
                    onBlur={() => setFieldTouched('name')}
                    autoCorrect={false}
                  />
                </View>
                <View style={styles.inputWrap}>
                  <ResuableInput
                    placeholder="Surname"
                    value={values.surname}
                    handleChangeField={handleChange('surname')}
                    focus={() => setFieldTouched('surname')}
                    onBlur={() => setFieldTouched('surname')}
                    autoCorrect={false}
                  />
                </View>
                <View style={styles.inputWrap}>
                  <ResuableInput
                    placeholder="Mail"
                    value={values.email}
                    handleChangeField={handleChange('email')}
                    focus={() => setFieldTouched('email')}
                    onBlur={() => setFieldTouched('email')}
                    autoCorrect={false}
                  />
                </View>
                <View style={styles.buttonWrap}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.button}>
                    <Text style={{color: '#181cf1b0', fontWeight: 500}}>
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
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

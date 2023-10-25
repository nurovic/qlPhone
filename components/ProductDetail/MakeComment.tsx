import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  comment: Yup.string().required('Required'),
});

const handleComment = values => {
  console.log(values, 'IN');
};

export default function MakeComment() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{comment: ''}}
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
                <View style={styles.inputWrap}>
                  <TextInput
                    placeholder="Enter Comment..."
                    onFocus={() => {
                      setFieldTouched('comment');
                    }}
                    onBlur={() => {
                      setFieldTouched('comment');
                    }}
                    value={values.comment}
                    onChangeText={handleChange('comment')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{flex: 1}}
                  />
                </View>
                <View style={styles.buttonWrap}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.button}>
                    <Text style={{color: '#181cf1b0', fontWeight: 500}}>
                      Comment
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
  },
  inputWrap: {
    height: 32,
    borderWidth: 0.4,
    borderRadius: 6,
    paddingLeft: 12,
  },
  buttonWrap: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 8,
  },
  button: {
    borderRadius: 6,
    borderColor: '#181cf1b0',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
  },
});

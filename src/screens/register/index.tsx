import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, commonStyles, fonts, fontSize, images } from '../../utils';
import { HEIGHT, widgetPadding } from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Input, Spacer } from '../../components';
import TextView from '../../components/common/TextView';
import { ShadowView } from 'react-native-inner-shadow';
import { onSignUp } from '../../network/requests';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }: any) => {
  const [isRemember, setIsRemember] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = () => {
    if (email === '' || password === '' || name === '' || phone === '') {
      alert('Please fill all the fields');
      return;
    }

    setIsLoading(true);

    onSignUp({
      email: email,
      password: password,
      name: name,
      phone: phone,
    })
      .then(response => {
        if (response?.token) {
          AsyncStorage.setItem('@user', JSON.stringify(response));
          global.userInfo = global.userInfo = response;
          navigation.navigate('BottomTab');
        }
      })
      .catch(error => {
        console.error('Signup error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={images.registerHeader} style={styles.authHeader} />
      <ShadowView
        inset
        backgroundColor="white"
        shadowColor="#00000022"
        shadowOffset={{ width: 1, height: 1 }}
        shadowBlur={10}
        style={styles.innerContainer}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={images.logo} style={commonStyles.logo} />
          <Spacer height={widgetPadding} />
          <Input placeholder="Name" onChangeText={value => setName(value)} />
          <Input
            keyboardType="email-address"
            placeholder="Email"
            onChangeText={value => setEmail(value)}
          />
          <Input
            keyboardType="numeric"
            placeholder="Phone Number"
            onChangeText={value => setPhone(value)}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={value => setPassword(value)}
          />
          <Input placeholder="Confirm Password" />

          <Pressable
            style={styles.checkboxContainer}
            onPress={() => setChecked(!checked)}
          >
            <View style={[styles.checkbox, checked && styles.checked]}>
              {checked && <View style={styles.innerCheck} />}
            </View>

            <Text style={styles.text}>
              I agree to the <Text style={styles.link}>Terms & Conditions</Text>{' '}
            </Text>
          </Pressable>
          <Spacer height={widgetPadding * 2} />

          <Button
            text={'Sign up'}
            onPress={handleSignup}
            isDisabled={isLoading}
            isLoading={isLoading}
          />

          <View style={styles.lineView}>
            <View style={styles.line} />
            <TextView style={styles.or} text={'Or'} />
            <View style={styles.line} />
          </View>

          <View style={styles.socialView}>
            <TextView style={styles.signWith} text={'Sign in with '} />
            <View style={commonStyles.rowCenter}>
              <Image source={images.apple} style={commonStyles.image5} />
              <Image source={images.google} style={commonStyles.image5} />
            </View>

            <Text style={styles.dontHave}>
              Already have an account?{' '}
              <TextView
                onPress={() => navigation.goBack()}
                style={styles.signup}
                text={'Log in'}
              />
            </Text>
          </View>

          <Spacer height={widgetPadding * 2} />
        </ScrollView>
      </ShadowView>
      <View style={styles.terms}>
        <Pressable>
          <TextView style={styles.termsOfUSe} text={'Terms of use'} />
        </Pressable>

        <Pressable>
          <TextView style={styles.termsOfUSe} text={'Privacy policy'} />
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authHeader: {
    width: '100%',
    height: HEIGHT * 0.6,
    resizeMode: 'stretch',
    position: 'absolute',
  },
  innerContainer: {
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 90,
    borderRadius: 20,
    paddingVertical: 10,
  },
  logo: {
    width: 140,
    height: 120,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
  },

  rememberMe: {
    color: colors.textBlack,
    fontFamily: fonts.medium,
    marginStart: 5,
    fontSize: fontSize.semiSmall,
  },
  forgot: {
    color: colors.purple,
    fontFamily: fonts.semibold,
    marginStart: 5,
    fontSize: fontSize.semiSmall,
  },
  socialView: {
    alignItems: 'center',
  },
  lineView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  line: {
    backgroundColor: colors.line,
    height: 4,
    flex: 1,
    width: '100%',
  },
  or: {
    color: colors.textBlack,
    fontFamily: fonts.semibold,
    marginHorizontal: 10,
  },
  signWith: {
    fontFamily: fonts.semibold,
    fontSize: fontSize.semiSmall,
    marginBottom: 10,
    color: colors.textBlack,
  },
  dontHave: {
    fontFamily: fonts.semibold,
    fontSize: fontSize.semiSmall,
    color: colors.textBlack,
    marginTop: 5,
  },
  signup: {
    fontFamily: fonts.bold,
    fontSize: fontSize.medium,
    color: colors.purple,
  },
  terms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 10,
  },
  termsOfUSe: {
    color: colors.darkBlack,
    textDecorationLine: 'underline',
    fontFamily: fonts.light,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.textGrey,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: 'rgba(255, 196, 124, 1)',
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 196, 124, 1)',
  },
  innerCheck: {
    width: 10,
    height: 10,
    backgroundColor: 'rgba(255, 196, 124, 1)',
    borderRadius: 2,
  },
  text: {
    fontSize: 13,
    color: '#333',
    fontFamily: fonts.medium,
  },
  link: {
    color: colors.blue,
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: widgetPadding / 2,
  },
});

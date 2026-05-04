import React, { useState } from 'react';
import {
  Image,
  Platform,
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
import { onLogin } from '../../network/requests';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [isRemember, setIsRemember] = useState(false);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email == '' || password == '') {
      alert('Please user name and password');
      return;
    }

    setIsLoading(true);
    onLogin({ email, password })
      .then(response => {
        console.log('Login response:', response);
        if (response?.token) {
          // Store the token securely, e.g., using AsyncStorage
          global.userInfo = global.userInfo = response;
          AsyncStorage.setItem('@user', JSON.stringify(response));
          navigation.navigate('BottomTab');
        }
      })
      .finally(() => setIsLoading(false))
      .catch(error => {
        console.error('Login error:', error);
        // Handle login error, e.g., show an error message
      });
  };

  return (
    <View
      // colors={colors.purpleGradient}
      style={styles.container}
    >
      <Image source={images.authHeader} style={styles.authHeader} />
      <ShadowView
        inset
        backgroundColor="white"
        shadowColor="#00000022"
        shadowOffset={{ width: 1, height: 1 }}
        shadowBlur={10}
        style={styles.innerContainer}
      >
        <ScrollView>
          <Image source={images.logo} style={styles.logo} />
          <Spacer height={widgetPadding} />
          <Input
            placeholder="User Name"
            onChangeText={value => setEmail(value)}
          />

          <Input
            placeholder="Password"
            onChangeText={value => setPassword(value)}
          />
          <View style={styles.forgotView}>
            <View style={commonStyles.row}>
              <TouchableOpacity
                onPress={() => setIsRemember(!isRemember)}
                style={[
                  styles.checkbox,
                  isRemember && { backgroundColor: colors.purple },
                ]}
              ></TouchableOpacity>
              <TextView style={styles.rememberMe} text={'Remember me'} />
            </View>

            <Pressable>
              <TextView style={styles.forgot} text={'Forgotten password'} />
            </Pressable>
          </View>

          <Spacer height={30} />

          <Button
            isLoading={isLoading}
            isDisabled={isLoading}
            text={'Log In'}
            onPress={handleLogin}
          />

          <View style={styles.lineView}>
            <View style={styles.line} />
            <TextView style={styles.or} text={'Or'} />
            <View style={styles.line} />
          </View>

          <View style={styles.socialView}>
            <TextView style={styles.signWith} text={'Sign in with '} />
            <View style={commonStyles.rowCenter}>
              <Image source={images.google} style={commonStyles.image5} />
              <Image source={images.apple} style={commonStyles.image5} />
            </View>

            <Text style={styles.dontHave}>
              Don't have an account?{' '}
              <TextView
                onPress={() => navigation.navigate('Register')}
                style={styles.signup}
                text={'Sign up'}
              />
            </Text>
          </View>
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

export default Login;

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
    marginTop: Platform.OS == 'android' ? 100 : 130,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  logo: {
    width: 120,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  checkbox: {
    borderColor: colors.purple,
    borderWidth: 1,
    borderRadius: 5,
    width: 18,
    height: 18,
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
    fontFamily: fonts.medium,
    fontSize: fontSize.medium,
    color: colors.textBlack,
    marginTop: 10,
  },
  signup: {
    fontFamily: fonts.bold,
    fontSize: fontSize.medium,
    color: colors.purple,
  },
  terms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  termsOfUSe: {
    color: colors.darkBlack,
    textDecorationLine: 'underline',
    fontFamily: fonts.light,
  },
});

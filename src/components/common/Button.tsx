import {View, Pressable, StyleSheet, Text, ActivityIndicator, Image} from 'react-native';
import React from 'react';
import {colors, commonStyles, fontSize, fonts} from '../../utils';
import TextView from './TextView';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

type Prop = {
  text: String;
  customStyle?: any;
  isDisabled?: boolean;
  onPress?: () => {};
  isLoading?:boolean;
  isRound?:boolean;
  textStyle?:any;
  isPurple?:boolean;
  icon?:any
};

const Button = ({text, customStyle, isDisabled, onPress,isLoading,isRound,textStyle,route,isPurple,icon}: Prop) => {
  const navigation = useNavigation();
  return (
<Pressable onPress={route?()=>navigation.navigate(route): ()=>onPress && onPress()}>
    <LinearGradient 
    start={{x:isPurple?0.3:0.7,y:isPurple? 0:1}}
    end={{x:1,y:1}}
    style={[
      styles.container,
      customStyle,
      isRound&&{borderRadius:50}
    ]}
    colors={isPurple?
      ['rgba(93, 56, 145, 1)', 'rgba(255, 170, 239, 1)']:
      ['rgba(249, 148, 23, 1)','rgba(255, 196, 124, 1)']}>

    
    {isLoading ?
    <ActivityIndicator color={'white'}/>:
      <View style={commonStyles.row}>
      {icon && <Image source={icon} style={[commonStyles.image2,{marginRight:10}]}/>}
    <TextView text={text} style={[styles.btnText,textStyle]}/>
      </View>}
    </LinearGradient>
</Pressable>


  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontFamily: fonts.semibold,
    fontSize: fontSize.medium,
  },
});

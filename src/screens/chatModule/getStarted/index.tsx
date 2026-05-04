import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, commonStyles, fonts, images } from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { BottomView } from '../../paymentDetail';
import { Button } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../../../components/common/Header';

const GetStarted = () => {
    const navigation = useNavigation();
    return (
        <LinearGradient
            start={{ x: 0.1, y: 1 }}
            end={{ x: 0, y: 1 }}
            colors={colors.mainContainer}
            style={commonStyles.mainContainer}>
            <HomeHeader showBack/>
            <Image source={images.getStarted} style={styles.getStarted} />

            <Text style={styles.howMayIHelp}>{'How may I help\nyou today?'}</Text>
            
           <View style={{position:'absolute',bottom:0,width:'100%',height:100}}>
           <Button
            onPress={()=>navigation.navigate('HowMayIHelp')}
           customStyle={{width:'90%',alignSelf:'center'}}
                text={"Get Started"}
                isPurple/>
           </View>
        </LinearGradient>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    getStarted: {
        width: '90%',
        height: 350,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop:0,
    },
    howMayIHelp: {
        color: 'black',
        fontFamily: fonts.semibold,
        fontSize: 36,
        textAlign: 'center',
        lineHeight: 50
    }
})
import React from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, commonStyles, fonts, fontSize, images } from "../../utils";
import FastImage from "react-native-fast-image";
import { widgetPadding } from "../../utils/constants";
import { Button, Input, Spacer, TextView } from "../../components";
import HomeHeader from "../../components/common/Header";
import LinearGradient from "react-native-linear-gradient";

const CardDetails = ({navigation}) => {
    return (
        <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={colors.mainContainer}
            style={commonStyles.mainContainer}>
            <HomeHeader title="Card Details" showBack />
        <View style={{marginHorizontal:20}}>
        <Input label="Card Holder Name" placeholder="Enter Address"/>
        <Input label="Card Number" placeholder="_ _ _ _  /  _ _ _ _  /  _ _ _ _  /  _ _ _ _"/>
        <Input label="Expiry Date" placeholder="MM  /  YY"/>
        <Input label="CVV" placeholder="_ _ _ _ _"/>


            <Spacer height={30}/>

        

            <Button
            onPress={()=>navigation.navigate('OrderDetails')}
            isPurple
            customStyle={{borderRadius:50,marginTop:60}} text={"Save Card"}/>

        
            </View>


        </LinearGradient>

    )
}

export default CardDetails;

const styles = StyleSheet.create({
    map: {
        height: 220,
        width: '90%',
        alignSelf: 'center',
        resizeMode: 'stretch'

    },
    addressView: {
        backgroundColor: 'white',
        width: '90%',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent:'space-between'

    },
    searchBarView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        marginTop: widgetPadding,
        // backgroundColor:'red',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 10
    },
    searchBar: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        height: '100%',
        flex: 1,
        marginEnd: 10
    },
    searchInput: {
        fontFamily: fonts.light,
        color: colors.placeholder,
        fontSize: fontSize.medium,
        marginStart: 15
    },
    bottomView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 10,
        height: 100,
        position: 'absolute',
        backgroundColor: 'white',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 23,
        paddingBottom: 15
    },
    subTotal: {
        fontFamily: fonts.medium,
        fontSize: fontSize.semiMedium,
        color: colors.darkBlack
    },
    totalAmount: {
        fontFamily: fonts.semibold,
        fontSize: fontSize.semiMedium,
        color: colors.purple
    },
    confirmAddressBtn: {
        backgroundColor: colors.purple,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmText: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        color: 'white',
        fontFamily: fonts.semibold
    },
    masterCardView: {
        marginLeft: widgetPadding / 1.5,
        justifyContent: 'space-between',
        height: 50
    },
    cardType:{
        color:colors.darkBlack,
        fontFamily:fonts.semibold,
        fontSize:fontSize.medium
    },
    cardNumber:{
        color:colors.textBlack,
        fontFamily:fonts.regular,
        fontSize:fontSize.semiSmall
    },
    addNewCard:{
        borderColor:'rgba(0, 0, 0, 0.24)',
        borderWidth:1,
        width:'90%',
        alignSelf:'center',
        height:50,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    addNewText:{
        color:colors.purple,
        fontFamily:fonts.semibold,
        fontSize:fontSize.medium

    }
})
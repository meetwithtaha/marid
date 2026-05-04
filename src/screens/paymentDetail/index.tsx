import React from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors, commonStyles, fonts, fontSize, images } from "../../utils";
import FastImage from "react-native-fast-image";
import { widgetPadding } from "../../utils/constants";
import { Button, Input, Spacer, TextView } from "../../components";
import HomeHeader from "../../components/common/Header";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { ShadowView } from "react-native-inner-shadow";

const PaymentDetail = ({ navigation }) => {
    return (
        <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={colors.mainContainer}
            style={commonStyles.mainContainer}>
            <HomeHeader title="Payment Details" showBack />
            <Image style={styles.map} source={images.card} />


            <View style={styles.addressView}>
                <View style={commonStyles.row}>
                    <Image style={commonStyles.image3} source={images.cardImage} />
                    <View style={styles.masterCardView}>
                        <TextView style={styles.cardType} text={"Master Card"} />
                        <TextView style={styles.cardNumber} text={"**** **** 0783 7873"} />
                    </View>

                </View>
                <Image source={images.mastercard} style={commonStyles.image4} />
            </View>

            <View style={styles.addressView}>
                <View style={commonStyles.row}>
                    <Image style={commonStyles.image3} source={images.cardImage} />
                    <View style={styles.masterCardView}>
                        <TextView style={styles.cardType} text={"Visa"} />
                        <TextView style={styles.cardNumber} text={"**** **** 0783 7873"} />
                    </View>

                </View>
                <Image source={images.visa} style={commonStyles.image4} />
            </View>

            <Spacer height={30} />

            <TouchableOpacity onPress={()=>navigation.navigate('CardDetails')}>

            <ShadowView
                backgroundColor="white"
                inset
                shadowColor="rgba(255, 200, 245, 0.8)"
                shadowOffset={{ width: 1, height: 1 }}
                shadowBlur={5}
                style={{
                    width: '90%',
                    height: 50,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}
            >
                <TextView style={styles.addNewText} text={"+ Add New Card"} />

            </ShadowView>
            </TouchableOpacity>

            <BottomView route='OrderDetails' btnText='Confirm Payment' />

        </LinearGradient>

    )
}

export default PaymentDetail;

export const BottomView = ({ btnText, route,style, price }: any) => {
    const navigation = useNavigation();
    return (
        // <View >
             <ShadowView
             style={[styles.bottomView,style]}
                                // inset
                                backgroundColor="white"
                                // shadowColor="#00000022"
                                // shadowOffset={{ width: 1, height: 1 }}
                                // shadowBlur={5}
                                shadowColor="rgba(0, 0, 0, 0.2)"
                                shadowOffset={{ width: 1, height: 1 }}
                                shadowBlur={10}>

                               
            <Text style={styles.subTotal}>Sub Total <TextView style={styles.totalAmount} text={"SAR " + price} /> </Text>
            <LinearGradient
                start={{ x: 0.2, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={styles.getStarted}
                colors={['rgba(249, 148, 23, 1)', 'rgba(255, 196, 124, 1)']}>

                <Pressable onPress={() => navigation.navigate(route)}
                >
                    <Text style={styles.getStartedText}>{btnText}</Text>
                </Pressable>
            </LinearGradient>
            {/* <Pressable onPress={()=>navigation.navigate(route)} style={styles.confirmAddressBtn}>
            <TextView style={styles.confirmText} text={btnText||"Confirm Address"} />
        </Pressable> */}
         </ShadowView>
    )
}

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
        borderWidth: 2,
        borderRadius: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        borderColor: 'rgba(0, 0, 0, 0.12)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // bottom only
        shadowOpacity: 0.1,
        shadowRadius: 2,

        // Android shadow
        elevation: 6,

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
        height: 100,
        position: 'absolute',
        backgroundColor: 'white',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        // paddingHorizontal: 23,
        paddingBottom: 15,
        paddingHorizontal:10,
        paddingLeft:25,
        paddingRight:0
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
    cardType: {
        color: colors.darkBlack,
        fontFamily: fonts.semibold,
        fontSize: fontSize.medium
    },
    cardNumber: {
        color: colors.textBlack,
        fontFamily: fonts.regular,
        fontSize: fontSize.semiSmall
    },
    addNewCard: {
        borderColor: 'rgba(0, 0, 0, 0.24)',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    addNewText: {
        color: colors.purple,
        fontFamily: fonts.semibold,
        fontSize: fontSize.medium

    },
    getStarted: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        borderRadius: 100,
        height: 50
    },
    getStartedText: {
        color: 'white',
        fontFamily: fonts.semibold,
    },
})

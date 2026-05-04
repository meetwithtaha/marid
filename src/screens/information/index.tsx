import React, { useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, commonStyles, fonts, fontSize, images } from "../../utils";
import FastImage from "react-native-fast-image";
import { widgetPadding } from "../../utils/constants";
import { Button, Input, Spacer, TextView } from "../../components";
import HomeHeader from "../../components/common/Header";
import LinearGradient from "react-native-linear-gradient";
import SucessModal from "../../components/successModal";
import CustomModal from "../../components/successModal";
import { ShadowView } from "react-native-inner-shadow";

const Information = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={colors.mainContainer}
            style={commonStyles.mainContainer}>
            <HomeHeader title="Order Summary" showBack />

            <ScrollView style={{ flex: 1, marginBottom: 20 }}>

                <View style={styles.column}>
                    <TextView text={"Order Number:"} style={styles.columnName} />
                    <TextView text={" #250302-01"} style={styles.columnName} />
                </View>

                <View style={styles.column}>
                    <TextView text={"Order Status:"} style={styles.columnName} />
                    <TextView text={"Order confirmed"} style={[styles.columnName, { color: 'rgba(2, 190, 11, 0.7)' }]} />
                </View>

                <View style={styles.column}>
                    <TextView text={"Delivery Time: 10 : 11 Am"} style={styles.columnName} />
                    <TextView text={"Date: Oct, 06, 2025"} style={styles.columnName} />
                </View>

                <ShadowView
                    backgroundColor="white"
                    inset
                    shadowColor="rgba(0, 0, 0, 0.2)"
                    shadowOffset={{ width: 1, height: 1 }}
                    shadowBlur={6}
                    style={styles.addressView}>
                    {/* <View style={styles.addressView}> */}
                    <View style={[commonStyles.rowJustified, commonStyles.mb20]}>
                        <TextView style={styles.header} text={"Delivery address"} />
                        <TextView style={styles.addNewAddress} text={"Add New Address"} />
                    </View>
                    <Image source={images.map} style={styles.map} />

                    <TextView style={styles.address} text={"Villa 23, Street 12, Dubai, United Arab Emirates"} />
                </ShadowView>


                <ShadowView
                    backgroundColor="white"
                    inset
                    shadowColor="rgba(0, 0, 0, 0.2)"
                    shadowOffset={{ width: 1, height: 1 }}
                    shadowBlur={6}
                    style={styles.addressView}>
                    <View style={[commonStyles.rowJustified, commonStyles.mb20]}>
                        <TextView style={styles.header} text={"Payment Method"} />
                    </View>
                    <View style={commonStyles.rowJustified}>
                        <View style={commonStyles.row}>
                            <Image style={commonStyles.image3} source={images.cardImage} />
                            <View style={styles.masterCardView}>
                                <TextView style={styles.cardType} text={"Visa"} />
                                <TextView style={styles.cardNumber} text={"**** **** 0783 7873"} />
                            </View>
                        </View>
                        <Image source={images.visa} style={commonStyles.image4} />
                    </View>

                </ShadowView>

                <View style={styles.subTotalView}>
                    <View style={styles.subTotal1}>
                        <TextView style={styles.subTotalText} text={'Sub Total'} />
                        <TextView style={styles.subTotalAmounnt} text={'SAR 99.0'} />
                    </View>
                    <View style={styles.subTotal1}>
                        <TextView style={styles.itemHistory} text={'View Item History'} />
                        <TextView text={'SAR 99.0'} />
                    </View>

                </View>
                <Spacer height={widgetPadding * 2} />
                <Button
                    isPurple
                    onPress={() => setModalVisible(true)}
                    customStyle={{ borderRadius: 30, width: '90%' }} text={"Contact Us"} />
            </ScrollView>

            <CustomModal
                visible={modalVisible} onClose={() => setModalVisible(false)}
            >

                <View style={{ paddingTop: widgetPadding }}>



                    <Pressable style={{ position: 'absolute', right: 5, top: 0 }} onPress={() => setModalVisible(false)}>
                        <Image style={[commonStyles.image5, { alignSelf: 'flex-end' }]} source={images.cross} />
                    </Pressable>
                    <Image source={images.orderConfirm} style={styles.confirm} />
                    <Text style={styles.orderSuccessfull}>Order Successful</Text>
                    {/* <Text style={styles.message}>Your order is under review. Our team will update the price shortly.</Text> */}
                    <Text style={styles.placed}>This Order Has been Placed</Text>

                <Pressable   onPress={() => setModalVisible(false)}>
                   <Image source={images.goBackBtn} style={styles.goBackBtn}/>

                </Pressable>

                    {/* <Button 
                  
                    customStyle={styles.goBack} 
                    isPurple
                    text={"Go Back"}  /> */}



                </View>

            </CustomModal>


        </LinearGradient>

    )
}

export default Information;

const NameQuantity = ({ text, quantity }) => {
    return (
        <View style={commonStyles.rowJustified}>
            <TextView style={styles.val} text={text} />
            <TextView style={styles.quantity} text={quantity} />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 100,
        width: '100%',
        alignSelf: 'center',
        resizeMode: 'stretch',
        borderRadius: 10

    },
    addressView: {
        backgroundColor: 'white',
        width: '90%',
        marginTop: widgetPadding,
        borderRadius: 20,
        alignSelf: 'center',
        paddingVertical: 15,

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
    orderDetails: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        width: '90%',
        padding: 20
    },
    heading: {
        color: colors.darkBlack,
        fontFamily: fonts.semibold,
        fontSize: fontSize.medium
    },
    header: {
        color: colors.darkBlack,
        fontFamily: fonts.semibold,
        fontSize: fontSize.large
    },
    column: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.lightColor,
        borderBottomWidth: 1,
        marginTop: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 }, // bottom only
        shadowOpacity: 0.2,
        shadowRadius: 10,

        // Android shadow
        elevation: 6,
    },
    border: {
        borderBottomColor: colors.lightColor,
        borderBottomWidth: 1,
        marginVertical: 20
    },
    columnName: {
        fontFamily: fonts.regular,
        color: colors.darkBlack,
        fontSize: fontSize.semiSmall

    },
    val: {
        color: 'rgba(0, 0, 0, 0.49)',
        fontFamily: fonts.medium,
        fontSize: fontSize.medium,
        marginTop: 10
    },
    quantity: {
        color: colors.darkBlack,
        fontFamily: fonts.medium,
        fontSize: fontSize.medium,
        marginTop: 10
    },
    address: {
        marginTop: 10,
        fontFamily: fonts.regular,
        color: colors.textBlack
    },
    addNewAddress: {
        fontFamily: fonts.medium,
        color: colors.purple,
        textDecorationLine: 'underline'
    },
    subTotalView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: widgetPadding,
        borderRadius: 10,
        // padding:20,
    },
    subTotal1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0, 0, 0, 0.06)',
        borderBottomWidth: 1,
        padding: 15,
        paddingHorizontal: 20
    },
    subTotalText: {
        color: colors.darkBlack,
        fontFamily: fonts.semibold,
        fontSize: fontSize.large
    },
    subTotalAmounnt: {
        color: colors.purple,
        fontFamily: fonts.semibold,
        fontSize: fontSize.large
    },
    itemHistory: {
        color: colors.textBlack,
        fontFamily: fonts.semibold,
        fontSize: fontSize.small
    },
    confirm: {
        width: 200,
        height: 180,
        alignSelf: 'center',
    },
    orderSuccessfull: {
        marginTop: -50,
        fontFamily: fonts.bold,
        fontSize: fontSize.large,
        alignSelf: 'center',
    },
    placed: {
        marginTop: 10,
        fontFamily: fonts.light,
        fontSize: fontSize.small,
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: 20
    },
    message: {
        marginTop: 10,
        fontFamily: fonts.regular,
        fontSize: fontSize.semiSmall,
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: 40
    },
    goBack: {
        width: '80%',
        marginTop: widgetPadding,

    },
    btnText: {
        color: 'white',
        fontFamily: fonts.semibold,
        fontSize: fontSize.medium,
    },
    goBackBtn:{
        width:'90%',
        resizeMode:'contain',
        height:80,
        alignSelf:'center',
        marginTop:widgetPadding
    }
})
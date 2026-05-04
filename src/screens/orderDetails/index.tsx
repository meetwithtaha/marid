import React, { useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, commonStyles, fonts, fontSize, images } from "../../utils";
import FastImage from "react-native-fast-image";
import { widgetPadding, WIDTH } from "../../utils/constants";
import { Button, Input, Spacer, TextView } from "../../components";
import HomeHeader from "../../components/common/Header";
import LinearGradient from "react-native-linear-gradient";
import { ShadowView } from "react-native-inner-shadow";
import CustomModal from "../../components/successModal";

const OrderDetails = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={colors.mainContainer}
            style={commonStyles.mainContainer}>
            <HomeHeader title="Order Details" showBack />

            <ScrollView style={{ flex: 1, marginBottom: 100 }}>

                <ShadowView
                    backgroundColor="white"
                    inset
                    shadowColor="rgba(0, 0, 0, 0.2)"
                    shadowOffset={{ width: 1, height: 1 }}
                    shadowBlur={6}
                    style={styles.orderDetail}>

                    <ScrollView showsHorizontalScrollIndicator={false}  horizontal>
                    {[1, 2, 3].map((res) => (
                        <View style={{marginRight:5}}>
                            <Image source={images.maridItem} style={styles.itemImage} />
                            <TextView style={styles.addNewText} text={"Tent Cards"} />
                            <TextView style={styles.quantityText} text={"Quantity: x1"} />
                        </View>
                    ))}
                    </ScrollView>
                   
                </ShadowView>

                <Spacer height={widgetPadding}/>

                <ShadowView
                    backgroundColor="white"
                    inset
                    shadowColor="rgba(0, 0, 0, 0.2)"
                    shadowOffset={{ width: 1, height: 1 }}
                    shadowBlur={6}
                    style={styles.shadowBtn}
                >
                    <TextView style={styles.addNewText} text={"+ Add New Item"} />

                </ShadowView>

                <ShadowView
                    backgroundColor="white"
                    inset
                    shadowColor="rgba(0, 0, 0, 0.2)"
                    shadowOffset={{ width: 1, height: 1 }}
                    shadowBlur={6}
                    style={styles.addressView}>
                    <View style={[commonStyles.rowJustified, commonStyles.mb20]}>
                        <TextView style={styles.header} text={"Delivery address"} />
                        <Image source={images.pencil} style={commonStyles.image2} />

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
                        <Image source={images.pencil} style={commonStyles.image2} />

                    </View>
                    <View style={commonStyles.rowJustified}>
                        <View style={commonStyles.row}>
                            <Image style={commonStyles.image3} source={images.cardImage} />
                            <View style={styles.masterCardView}>
                                <TextView style={styles.cardType} text={"Master Card"} />
                                <TextView style={styles.cardNumber} text={"**** **** 0783 7873"} />
                            </View>
                        </View>
                        <Image source={images.mastercard} style={commonStyles.image4} />
                    </View>
                </ShadowView>



                <Spacer height={80} />
            </ScrollView>

            <View style={styles.bottomView}>
                <Text style={styles.subTotal}>Sub Total <TextView style={styles.totalAmount} text={"SAR 99.0"} /> </Text>
                <Pressable 
                onPress={() => setModalVisible(true)} 
                style={styles.confirmAddressBtn}>
                    <TextView style={styles.confirmText} text={"Confirm Order"} />
                </Pressable>
            </View>

            <CustomModal
                visible={modalVisible} onClose={() => setModalVisible(false)}
            >

                <View style={{ paddingTop: widgetPadding }}>



                    <Pressable style={{ position: 'absolute', right: 5, top: 0 }} onPress={() => setModalVisible(false)}>
                        <Image style={[commonStyles.image5, { alignSelf: 'flex-end' }]} source={images.cross} />
                    </Pressable>
                    <Image source={images.orderConfirm} style={styles.confirm} />
                    <Text style={styles.orderSuccessfull}>Confirm Order</Text>
                    {/* <Text style={styles.message}>Your order is under review. Our team will update the price shortly.</Text> */}
                    <Text style={styles.placed}>Are you sure you want to confirm your order?</Text>

                {/* <Pressable   onPress={() => }>
                   <Image source={images.goBackBtn} style={styles.goBackBtn}/>

                </Pressable> */}

                    <Button 
                    onPress={()=>{
                        setModalVisible(false)
                        navigation.navigate('Information')
                    }}
                    customStyle={styles.goBackBtn} 
                    isPurple
                    text={"Go Back"}  />



                </View>

            </CustomModal>


        </LinearGradient>

    )
}

export default OrderDetails;

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
        marginTop: 20,
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
    quantityText: {
        color: 'rgba(0, 0, 0, 0.59)',
        fontFamily: fonts.light,
        fontSize: fontSize.medium,
        marginTop: 4
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
        paddingBottom: 10,
        marginTop: 20,
        marginBottom: 10
    },
    border: {
        borderBottomColor: colors.lightColor,
        borderBottomWidth: 1,
        marginVertical: 20
    },
    columnName: {
        fontFamily: fonts.regular,
        color: colors.darkBlack,
        fontSize: fontSize.medium

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
    shadowBtn: {
        width: '90%',
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    itemImage: {
        width: WIDTH/2.5,
        height: 100,
        borderRadius: 5,
        marginBottom: widgetPadding
    },
    orderDetail: {
        width: '90%',
        borderRadius: 20,
        alignSelf: 'center',
        paddingVertical: 10,
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
        textAlign:'center',
        marginHorizontal:30
    },
    placed: {
        marginTop: 10,
        fontFamily: fonts.light,
        fontSize: fontSize.small,
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: 20
    },
    goBackBtn:{
        width:'90%',
        resizeMode:'contain',
        height:50,
        alignSelf:'center',
        marginVertical:widgetPadding*2,
    }
})
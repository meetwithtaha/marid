import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, commonStyles, fonts, fontSize, images } from "../../utils";
import FastImage from "react-native-fast-image";
import { widgetPadding } from "../../utils/constants";
import { Button, Input, Spacer, TextView } from "../../components";
import { BottomView } from "../paymentDetail";
import { SearchBar } from "../../components/common/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchLocation = ({navigation}) => {
    return (
        <View style={commonStyles.mainContainer}>
          
           
            <ScrollView style={styles.addressView}>

            <FastImage style={styles.map} source={images.map}>
                <SafeAreaView>
                    <SearchBar searchBarPlaceHolder='Search location'/>
                </SafeAreaView>


            </FastImage>
          
                <Spacer height={widgetPadding}/>
                <Input 
                label="Enter Your address" placeholder="Enter Your address"/>
                <Input
                label="City" placeholder="City" dropdown/>
                <Input 
                label="Postal Code" placeholder="Postal Code"/>
                <Spacer height={widgetPadding*1.5}/>
                <Button isPurple customStyle={{borderRadius:50}} text={"Save Address"}/>
                <Spacer height={widgetPadding*3}/>

            </ScrollView>

            <BottomView
            btnText='Confirm Address'
            route='PaymentDetail'
            />

            {/* <View style={styles.bottomView}>
                <Text style={styles.subTotal}>Sub Total <TextView style={styles.totalAmount} text={"$99.0"}/> </Text>

                <Pressable onPress={()=>navigation.navigate('PaymentDetail')} style={styles.confirmAddressBtn}>
                    <TextView style={styles.confirmText} text={"Confirm Address"}/>
                </Pressable>
            </View> */}
         

        </View>
    )
}

export default SearchLocation;

const styles = StyleSheet.create({
    map: {
        height: 450,
        resizeMode: 'cover',
        width: '100%'
    },
    addressView: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: -20,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        flex:1,
        marginBottom:100,
        padding:widgetPadding

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
        borderRadius:10
    },
    searchBar: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        height:'100%',
        flex:1,
        marginEnd:10
    },
    searchInput: {
        fontFamily: fonts.light,
        color: colors.placeholder,
        fontSize: fontSize.medium,
        marginStart:15
    },
    bottomView:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        borderRadius:10,
        height:100,
        position:'absolute',
        backgroundColor:'white',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:23,
        paddingBottom:15
    },
    subTotal:{
        fontFamily:fonts.medium,
        fontSize:fontSize.semiMedium,
        color:colors.darkBlack
    },
    totalAmount:{
        fontFamily:fonts.semibold,
        fontSize:fontSize.semiMedium,
        color:colors.purple
    },
    confirmAddressBtn:{
        backgroundColor:colors.purple,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    confirmText:{
        paddingVertical:15,
        paddingHorizontal:25,
        color:'white',
        fontFamily:fonts.semibold
    }
})
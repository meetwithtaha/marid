import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors, commonStyles, fonts, fontSize, images } from "../../../utils";
import FastImage from "react-native-fast-image";
import { widgetPadding } from "../../../utils/constants";
import { Button, Input, Spacer, TextView } from "../../../components";
import { BottomView } from "../../paymentDetail";
import HomeHeader, { ProView, SearchBar } from "../../../components/common/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { ChatItem } from "../../../routes/CustomDrawerContent";
import { useNavigation } from "@react-navigation/native";

const HowMayIHelp = ({  }: any) => {
    const [input, setInput] = useState('');
    const navigation = useNavigation()


    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
            <TouchableOpacity style={{paddingHorizontal:20}}>
                    <Image source={images.menu} style={{width:40,height:40}}/>
                </TouchableOpacity>
            </SafeAreaView>
         
                {/* <HomeHeader /> */}
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
                <View style={commonStyles.mainContainer}>
                    <Image source={images.robot2} style={styles.robot2} />
                    <View style={styles.addressView}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={styles.howMayIHelp}>How may I help you today?</Text>
                        <Text style={styles.subHeading}>Customize your events, weddings & gatherings with the help of AI.</Text>
                        <Spacer height={widgetPadding / 2} />
                        <SearchBar
                            searchBarStyle={{ width: '100%' }}
                            searchBarPlaceHolder='Search' />

                        <Pressable 
                        onPress={()=>navigation.navigate('Chat')}
                        style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center',marginBottom:-30,marginHorizontal:5,marginTop: Platform.OS === 'android'?0:30 }}>

                                <Image
                                style={styles.cardImage}
                                source={images.card1}
                                />
                                 <Image
                                style={styles.cardImage}
                                source={images.card2}
                                />
                                {/* <Pressable onPress={()=>navigation.navigate('Chat')} style={styles.learnMoreAbout}>
                                    <Text style={styles.text}>Learn more about Marid AI</Text>
                                </Pressable> */}
                                {/* <Pressable onPress={()=>navigation.navigate('Chat')} style={styles.engageInConversation}>
                                <Text  style={styles.text}>Engage in conversation with Marid AI</Text>

                                    </Pressable> */}
                        </Pressable>

                        <View style={{width:'100%',justifyContent:'space-between',flexDirection:'row',marginBottom:widgetPadding/2}}>
                            <Text style={styles.heading}>Chats</Text>
                            <Text style={styles.seeAll}>See all</Text>

                        </View>

                        <ChatItem style={styles.chatItem} title="Need suggestions event" active />
                        <ChatItem style={styles.chatItem} title="Adjust the equipment's for corporate functions  " />
                        <ChatItem style={styles.chatItem} title="Plan an event for Wedding night" />
                        </ScrollView>
                    </View>



                </View>



                <View style={styles.inputContainer}>
                    <Image style={commonStyles.image2} source={images.plus} />
                    <View style={styles.textInput}>
                        <Image style={commonStyles.image2} source={images.emoji} />
                        <TextInput
                            style={styles.input}
                            placeholder="Type your message..."
                            value={input}
                            onChangeText={setInput}
                            placeholderTextColor={colors.placeholder}
                            returnKeyType="send"
                        />
                    </View>
                    <Image style={[commonStyles.image2,{marginLeft:16}]} source={images.audio} />

                </View>
            </KeyboardAvoidingView>

        </View>
    )
}

export default HowMayIHelp;

const styles = StyleSheet.create({
    map: {
        height: 450,
        resizeMode: 'cover',
        width: '100%'
    },
    addressView: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: -250,
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
        flex: 1,
        // marginBottom: 100,
        padding: 20,
        paddingVertical: 30

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
    howMayIHelp: {
        color: 'black',
        fontFamily: fonts.semibold,
        fontSize: 24,
    },
    subHeading: {
        color: 'rgba(0, 0, 0, 0.59)',
        fontFamily: fonts.regular,
        fontSize: 14,
        marginTop: widgetPadding / 2
    },
    robot2: {
        width: '90%',
        height: 400,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: -50
    },
    inputContainer: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        width: '100%',
        height: Platform.OS == 'android' ? 80 : 120,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingBottom: widgetPadding,
        
    },
    textInput: {
        height: 50,
        paddingHorizontal: 10,
        borderColor: 'rgba(237, 237, 237, 1)',
        borderWidth: 1,
        marginStart: widgetPadding,
        borderRadius: 5,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        color: colors.textBlack,
        fontFamily: fonts.regular,
        fontSize: fontSize.semiSmall,
        marginStart: widgetPadding / 2
    },
    cardImage: {
        width: '60%',
        height: 300,
    },
    chatItem:{
        marginHorizontal:0,
        marginTop:widgetPadding,
        marginBottom:0
    },
    seeAll:{
        color:'rgba(93, 56, 145, 1)',
        fontFamily:fonts.regular,
    },
    heading:{
        fontFamily:fonts.regular,
        color:'rgba(0, 0, 0, 1)',
        fontSize:16
    },
    learnMoreAbout:{
        flex:1,
        backgroundColor:'rgba(249, 148, 23, 1)',
        height:200,
        borderRadius:20,
        marginTop:30,
        marginBottom:50,
        marginRight:10,
        padding:16
    },
    engageInConversation:{
        flex:1,
        backgroundColor:'rgba(93, 56, 145, 1)',
        height:200,
        borderRadius:20,
        marginTop:30,
        marginBottom:50,
        padding:16
    },
    text:{
        color:'white',
        fontFamily:fonts.bold,
        fontSize:18
    }
})
import React, { useState } from "react";
import { FlatList, Image, ImageBackground, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import HomeHeader from "../../components/common/Header";
import { colors, commonStyles, fonts, fontSize, images } from "../../utils";
import LinearGradient from "react-native-linear-gradient";
import { categories, serviceSub, widgetPadding } from "../../utils/constants";
import { Button, Spacer, TextView } from "../../components";
import { ServiceCategories } from "..";
import { ShadowView } from "react-native-inner-shadow";
import CustomModal from "../../components/successModal";

const Help = () => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }: any) => {
        const isSelected = selectedServices.includes(item.title.trim());

        return ((
            <TouchableOpacity
                onPress={() => toggleService(item.title.trim())}
                key={item.title}
                style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity
                    onPress={() => toggleService(item.title.trim())}
                    style={[styles.checkbox, isSelected && { backgroundColor: colors.green, borderColor: colors.green }]}>
                    <Image style={styles.tick} source={images.tick} />
                </TouchableOpacity>
            </TouchableOpacity>
        ))
    }

    const toggleService = (title: string) => {
        setSelectedServices(prev =>
            prev.includes(title)
                ? prev.filter(item => item !== title) // remove if already selected
                : [...prev, title]                    // add if not selected
        );
    };

    return (
        <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={colors.mainContainer}
            style={commonStyles.mainContainer}>
            <HomeHeader

                title="Help"
                heading="Let us help you design your experience"
                showBack />
            <ScrollView>


                <ShadowView
                    inset={true}
                    backgroundColor="white"
                    shadowColor="#00000022"
                    shadowOffset={{ width: 1, height: 1 }}
                    shadowBlur={5}
                    style={styles.selectServices}>
                    <Image source={images.gallery} style={{width:60,height:60,resizeMode:'contain'}} />
                    <Spacer height={widgetPadding} />
                    <TextView style={commonStyles.authHeading} text={'Upload Multiple Images'} />
                    <TextView style={commonStyles.authSubheading} text={'Attach your design, sketchand related documents Accepted formats: JPG, PNG, and JPEG.'} />

                </ShadowView>
                <Spacer height={widgetPadding} />
                <TextView style={styles.tellUs} text={"How many guests you have?"} />
                <ShadowView
                    inset={true}
                    backgroundColor="white"
                    shadowColor="#00000022"
                    shadowOffset={{ width: 1, height: 1 }}
                    shadowBlur={5}
                    style={[styles.writeMessage, { height: 50, justifyContent: 'center' }]}
                >

                    <TextInput placeholder="no. of guests" style={styles.writeMessageText} />
                </ShadowView>
                {/* <View style={[styles.writeMessage,{height:50,justifyContent:'center'}]}>
            </View> */}
                <Spacer height={widgetPadding} />
                <TextView style={styles.tellUs} text={"Tell us what is on your mind"} />

                <ShadowView
                    inset={true}
                    backgroundColor="white"
                    shadowColor="#00000022"
                    shadowOffset={{ width: 1, height: 1 }}
                    shadowBlur={5}
                    style={styles.writeMessage}
                >
                    <TextInput placeholder="Write Message" style={styles.writeMessageText} />
                </ShadowView>


                <Spacer height={widgetPadding * 3} />

                <Button 
                 onPress={() => setModalVisible(true)}
                    isPurple
                    customStyle={{ width: '90%' }}
                    text={"Submit Now"} isRound />
  <Spacer height={widgetPadding * 3} />
            </ScrollView>


            <CustomModal
                visible={modalVisible} onClose={() => setModalVisible(false)}
            >

                <View style={{ paddingTop: widgetPadding }}>



                    <Pressable style={{ position: 'absolute', right: 5, top: 0 }} onPress={() => setModalVisible(false)}>
                        <Image style={[commonStyles.image5, { alignSelf: 'flex-end' }]} source={images.cross} />
                    </Pressable>
                    <Image source={images.orderConfirm} style={styles.confirm} />
                    <Text style={styles.orderSuccessfull}>Submission Successful</Text>
                    {/* <Text style={styles.message}>Your order is under review. Our team will update the price shortly.</Text> */}
                    <Text style={styles.placed}>Your request has been received. Our representative will contact you soon.</Text>

                <Pressable   onPress={() => setModalVisible(false)}>
                   <Image source={images.goBackBtn} style={styles.goBackBtn}/>

                </Pressable>

                </View>

            </CustomModal>

        </LinearGradient>

    )
}

export default Help;

const styles = StyleSheet.create({
    serviceBanner: {
        width: '90%',
        alignSelf: 'center',
        height: 200,
        resizeMode: 'stretch',
        marginTop: widgetPadding
    },
    selectServices: {
        marginTop:Platform.OS ==='android'? 20:0 ,
        width: '90%',
        borderRadius: 20,
        paddingHorizontal: 15,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: widgetPadding,
    },
    container: {
        marginTop: 5
        // padding: 20,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    item: {
        borderColor: 'rgba(235, 235, 235, 1)',
        borderWidth: 1,
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: widgetPadding,
        flexDirection: 'row',

    },
    title: {
        color: colors.darkBlack,
        fontFamily: fonts.semibold,
        fontSize: 16,
    },
    checkbox: {
        borderColor: 'rgba(174, 174, 178, 1)',
        borderWidth: 1,
        borderRadius: 5,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tick: {
        width: 15,
        height: 15,
        resizeMode: "contain"
    },
    tellUs: {
        marginHorizontal: 20,
        color: colors.darkBlack,
        fontFamily: fonts.semibold,
        fontSize: fontSize.medium
    },
    writeMessage: {
        marginHorizontal: 20,
        marginTop: widgetPadding,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        height: 120
    },
    writeMessageText: {
        height:45,
        color:'black'
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

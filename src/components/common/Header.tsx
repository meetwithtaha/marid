import React from "react";
import { Image, Platform, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import images from "../../utils/images";
import TextView from "./TextView";
import { colors, commonStyles, fonts, fontSize } from "../../utils";
import Spacer from "./Spacer";
import { useNavigation } from "@react-navigation/native";
import { widgetPadding } from "../../utils/constants";
import { ShadowView } from "react-native-inner-shadow";
import { SafeAreaView } from "react-native-safe-area-context";

type Prop = {
    sidebar?: boolean;
    searchBar?: boolean;
    showBack?: boolean;
    title?: string;
    showSearch?: boolean;
    searchBarPlaceHolder?: string;
    showFilter?: boolean;
    heading?: string;
    showHeadPhone?: boolean;
    chatBot?: boolean
}

const HomeHeader = ({ sidebar, searchBar, showBack, title, showSearch, searchBarPlaceHolder, showFilter, heading, showHeadPhone, chatBot }: Prop) => {
    const navigation = useNavigation()
    console.log(JSON.stringify(global.userInfo))
    return (
        <SafeAreaView style={[styles.mainContainer,]}>
            <StatusBar backgroundColor={'#E8E2E2'}/>
            {showBack ?
                <View style={[commonStyles.rowJustified, { marginBottom: widgetPadding, marginHorizontal: 20}]}>

                    <View style={commonStyles.rowAlign}>

                        <Pressable onPress={() => navigation.goBack()}>
                            <Image source={images.headerBackBtn} style={commonStyles.image50} />
                        </Pressable>


                        {chatBot && <View style={styles.chatBot}>
                            <Image source={images.chatBpot} style={commonStyles.image5} />
                            <View style={commonStyles.mh10}>
                                <TextView style={[styles.title,{fontSize:fontSize.medium}]} text={'Chat Bot'} />
                                <TextView text={"Help"} style={styles.help} />
                            </View>
                        </View>}

                    </View>


                    <TextView style={styles.title} text={title} />

                    {showSearch ? <Pressable>
                        <Image source={images.search} style={commonStyles.image40} />
                    </Pressable> :

                        showHeadPhone ?
                            <Pressable>
                                <Image source={images.roboto} style={[commonStyles.image100,{position:'absolute',right:-30,bottom:-65}]} />
                            </Pressable> :

                            <Pressable style={commonStyles.image40}></Pressable>}


                </View> :
                <View style={styles.container}>
                    {sidebar ? <SidebarView /> : <UserView />}
                    <ProView />

                </View>}

            {sidebar &&
                <View>
                    <Spacer height={widgetPadding} />
                    <View style={commonStyles.rowJustified}>
                        <UserView />
                        <Image style={commonStyles.image40} source={images.notification} />
                    </View>
                </View>}

            {heading && <TextView style={[styles.title, commonStyles.mh20, commonStyles.mt10]} text={heading} />}

            {searchBar &&
                <SearchBar showFilter={showFilter} searchBarPlaceHolder={searchBarPlaceHolder} />}

        </SafeAreaView>
    )
}

export default HomeHeader;


export const ProView = () => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={()=>navigation?.toggleDrawer()} style={styles.row}>
            <Image source={images.menu} style={[commonStyles.image5, { marginStart: 10 }]} />
        </Pressable>
    )
}

export const UserView = () => {
    return (
        <View style={commonStyles.row}>
            <Image style={commonStyles.image60} source={images.user} />
            <View>
                <View style={commonStyles.row}>
                    <Text style={styles.welcome}>Hi <TextView style={[styles.welcome, { fontFamily: fonts.medium }]} text="Welcome" /></Text>
                    <Image style={commonStyles.image2} source={images.hi} />
                </View>
                <TextView style={styles.username} text={global?.userInfo?.user?.name} />
            </View>
        </View>
    )
}

const SidebarView = () => {
    return (
        <View style={commonStyle.row}>
            <Image source={images.menu} style={commonStyle.image30} />
            <View>
                <TextView text="Current Location" style={styles.currentLoc} />
                <View style={commonStyle.row}>
                    <TextView style={styles.address} text="15A, James Street" />
                    <Image source={images.downArrow} style={[commonStyle.image10, { marginTop: 5 }]} />
                </View>
            </View>

            <View>

            </View>

        </View>
    )
}

export const SearchBar = ({ showFilter, searchBarPlaceHolder,searchBarStyle }: any) => {
    return (
        <View style={[styles.searchBarView,searchBarStyle]}>

            {/* <View style={styles.searchBar}> */}
            <ShadowView
            inset
            backgroundColor="white"
            shadowColor="#00000022"
            shadowOffset={{ width: 1, height: 1 }}
            shadowBlur={4}
           
           style={styles.searchBar}>
            
                <Image source={images.search} style={commonStyles.image4} />
                <TextInput
                    placeholderTextColor={'rgba(0, 0, 0, 0.69)'}
                    style={styles.searchInput} placeholder={searchBarPlaceHolder || "Find amazing events"} />
            </ShadowView>

            {showFilter &&
                <ShadowView
                inset
                backgroundColor="white"
                shadowColor="#00000022"
                shadowOffset={{ width: 1, height: 1 }}
                shadowBlur={4}
               
               style={styles.filterView}>
                    <Image source={images.filter} style={commonStyles.image3} />
                </ShadowView>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: widgetPadding / 2,
        marginHorizontal: 20
    },
    username: {
        fontFamily: fonts.semibold,
        color: colors.darkBlack,
        fontSize: fontSize.large,
        marginStart: 10,
        marginTop: 5
    },
    welcome: {
        fontFamily: fonts.regular,
        color: colors.textDetail,
        fontSize: fontSize.medium,
        marginHorizontal: 10,
    },
    row: {
        alignItems: 'flex-start',
        flexDirection: 'row',

    },
    pro: {
        fontFamily: fonts.regular,
        fontSize: fontSize.large
    },
    currentLoc: {
        fontFamily: fonts.light,
        fontSize: fontSize.small,
        marginStart: 10,
    },
    address: {
        fontFamily: fonts.regular,
        fontSize: fontSize.small,
        marginHorizontal: 10,
        marginTop: 5
    },
    mainContainer: {
    },
    searchInput: {
        fontFamily: fonts.medium,
        color: colors.placeHolderColor,
        fontSize: fontSize.medium,
        marginStart: 15
    },
    searchBar: {
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 5,
        height: '100%',
        flex: 1,
        marginEnd: 10
    },
    title: {
        color: colors.darkBlack,
        fontFamily: fonts.semibold,
        fontSize: fontSize.xlarge,
    },
    help: {
        color: colors.textBlack,
        fontFamily: fonts.semibold,
        fontSize: fontSize.small,
    },
    searchBarView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        marginTop: widgetPadding,
        width: '90%',
        alignSelf: 'center',
        marginBottom:Platform.OS == 'ios'? -34:0
    },
    filterView: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: 50,
        borderRadius: 25
    },
    chatBot: {
        marginStart: widgetPadding/2,
        flexDirection:'row',
        alignItems:'center'
    }
})
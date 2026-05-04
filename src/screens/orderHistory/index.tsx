import React, { useState } from "react";
import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeHeader, { SearchBar } from "../../components/common/Header";
import { colors, commonStyles, fonts, fontSize, images } from "../../utils";
import LinearGradient from "react-native-linear-gradient";
import { categories, categoryItem, widgetPadding } from "../../utils/constants";
import { TextView } from "../../components";
import FastImage from "react-native-fast-image";

const OrderDetail = ({ navigation }: any) => {
    const [tab, setTab] = useState(0);
    const [materials, setMaterials] = useState([
        { id: '1', title: 'Kunafe', count: 0 ,desc:'Lorem ipsum dolor sit amet consectetur. Porttitor non id', image:images.kunaf},
        { id: '2', title: 'Ice Cream', count: 0 ,desc:'Lorem ipsum dolor sit amet consectetur. Porttitor non id ', image:images.iceCream},
        { id: '4', title: 'Pudding', count: 0 ,desc:'Lorem ipsum dolor sit amet consectetur. Porttitor non id ', image:images.pudding},
    ]);


    const [types,setType]=useState([
        {id:1,type:"Appetizers",image:images.appetizers},
        {id:2,type:"Deserts",image:images.desers},
        {id:3,type:"Beverages",image:images.beverage},
        {id:4,type:"Food",image:images.vegs},
    ])
    const [selectedTypeId, setSelectedTypeId] = useState(null);


    const updateCount = (id, change) => {
        setMaterials(prev =>
            prev.map(item =>
                item.id === id ? { ...item, count: item.count + change } : item
            )
        );
    };
    const renderItem = ({ item }: any) => (
        <Pressable onPress={() => {
            navigation.navigate('Information', item)
        }} key={item.title}
            style={styles.item}>
            <FastImage source={item.image} style={styles.itemImage} />
            <View style={styles.desc}>
                <Text style={styles.title}>{'Order # 250131'}</Text>
                <TextView text={'Delivered on: 01 Jan 2025'} style={styles.delivery} />
                <TextView text={item.desc} style={styles.description} />
                <View style={[commonStyles.rowJustified,{marginTop:widgetPadding/2}]}>

                    <TextView style={styles.amount} text={"SAR 99.0"}/>


                    <View style={styles.counterContainer}>

                        <Text style={styles.count}>{'Yesterday'}</Text>

                    </View>

                </View>
            </View>
        </Pressable>
    );

    return (
        <LinearGradient
        start={{ x: 0.1, y: 1 }}
        end={{ x: 0, y: 1 }}
            colors={colors.mainContainer}
            style={commonStyles.mainContainer}>
                <HomeHeader
                searchBar
                    title="Order History"
                    showBack
                    searchBarPlaceHolder="Search By Item"
                    />
                {/* <View style={styles.tabsContainer}>
                    <Pressable onPress={() => setTab(0)} style={[styles.tab, tab == 0 && styles.selectedTab]}>
                        <TextView style={styles.tabText} text={"Order History"} />
                    </Pressable>

                    <Pressable onPress={() => setTab(1)}
                        style={[styles.tab, tab == 1 && styles.selectedTab]}>
                        <TextView style={styles.tabText} text={"Draft"} />
                    </Pressable>
                </View> */}

                {/* <SearchBar searchBarPlaceHolder='Search By Item'/> */}
                <View style={styles.selectServices}>
                    <FlatList
                        data={materials}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.title}
                        contentContainerStyle={styles.container}
                    />
                </View>
        </LinearGradient>

    )
}

export default OrderDetail;

const styles = StyleSheet.create({
    serviceBanner: {
        width: '90%',
        alignSelf: 'center',
        height: 200,
        resizeMode: 'stretch',
        marginTop: widgetPadding
    },
    selectServices: {
        height: '100%',
        marginTop: widgetPadding * 1.5,
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 15
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
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderRadius: 10,
        padding: 10,
        flexDirection:'row',
        alignItems:'flex-start',
        marginBottom:widgetPadding
    },
    title: {
        color: colors.darkBlack,
        fontSize: fontSize.semiMedium,
        fontFamily: fonts.semibold
    },
    itemImage: {
        width: 130,
        height: '100%',
        borderRadius:10
    },
    desc: {
        marginStart: 10,
        width:'58%',
    },
    description: {
        color: colors.lightBlack,
        fontFamily: fonts.regular,
        marginTop:widgetPadding/2,
        fontSize: fontSize.small
    },
    delivery: {
        color: colors.lightBlack,
        fontFamily: fonts.regular,
        fontSize: fontSize.mini,
        marginTop:widgetPadding/2
    },
    addToCartBtn: {
        flexDirection: 'row',
        backgroundColor: colors.purple,
        borderRadius: 50,
        width: 75,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartImage: {
        width: 8,
        height: 8,
        resizeMode: 'contain'
    },
    addToCart: {
        color: 'white',
        fontFamily: fonts.medium,
        fontSize: fontSize.xmini,
        marginStart: 5
    },
    tabsContainer: {
        flexDirection: 'row',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
    },
    tab: {
        // borderBottomColor:'rgba(0, 0, 0, 0.1)',
        // borderBottomWidth:1,
        paddingBottom: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        color: 'rgba(0, 0, 0, 0.4)',
        fontFamily: fonts.medium,
        fontSize: fontSize.medium

    },
    selectedTab: {
        borderBottomWidth: 4,
        borderBottomColor: colors.textBlack
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        fontSize: 12,
        fontFamily: fonts.regular,
        color:'rgba(0, 0, 0, 0.2)',
    },
    button: {
        backgroundColor: 'rgba(147, 147, 147, 0.15)',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgba(250, 250, 250, 1)',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
    },
    typeStyle:{
        backgroundColor:'rgba(240, 240, 240, 1)',
        height:45,
        flexDirection:'row',
        alignItems:'center',
        marginRight:10,
        padding:5,
        borderRadius:30,
        paddingHorizontal:10,
        paddingEnd:20
        
    },
    type:{
        marginStart:10,
        fontFamily:fonts.medium,
        fontSize:fontSize.semiSmall,
        alignSelf:'center',
        textAlign:'center',
    },
    amount:{
        fontFamily:fonts.medium,
        color:colors.darkBlack,
        fontSize:fontSize.small
    }
})

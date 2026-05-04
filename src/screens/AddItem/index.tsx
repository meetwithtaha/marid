import React, { useState } from "react";
import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeHeader, { SearchBar } from "../../components/common/Header";
import { colors, commonStyles, fonts, fontSize, images } from "../../utils";
import LinearGradient from "react-native-linear-gradient";
import { categories, categoryItem, widgetPadding } from "../../utils/constants";
import { TextView } from "../../components";
import FastImage from "react-native-fast-image";

const AddItem = ({ navigation }: any) => {
    const [tab, setTab] = useState(0);
    const [materials, setMaterials] = useState([
        { id: '1', title: 'Kunafe', count: 0 ,desc:'Lorem ipsum dolor sit amet consectetur. Porttitor non id', image:images.kunaf},
        { id: '2', title: 'Ice Cream', count: 0 ,desc:'Lorem ipsum dolor sit amet consectetur. Porttitor non id ', image:images.iceCream},
        { id: '3', title: 'Banana Split', count: 0 ,desc:'Lorem ipsum dolor sit amet consectetur. Porttitor non id ', image:images.banana},
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
            navigation.navigate('ItemDetail', item)
        }} key={item.title}
            style={styles.item}>
            <FastImage source={item.image} style={styles.itemImage} />
            <View style={styles.desc}>
                <Text style={styles.title}>{item.title}</Text>
                <TextView text={item.desc} style={styles.description} />
                <View style={[commonStyles.rowJustified,commonStyles.mt20]}>
                    <TouchableOpacity style={styles.addToCartBtn}>
                        <Image style={styles.cartImage} source={images.cart} />
                        <TextView style={styles.addToCart} text={"Add To Cart"} />

                    </TouchableOpacity>


                    <View style={styles.counterContainer}>
                        <TouchableOpacity onPress={() => updateCount(item.id, -1)} style={styles.button}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.count}>{item?.count}</Text>

                        <TouchableOpacity onPress={() => updateCount(item.id, 1)} style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
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
                    title="Add Item"
                    showFilter={false}
                    showBack />

                <View style={styles.tabsContainer}>
                    <Pressable onPress={() => setTab(0)} style={[styles.tab, tab == 0 && styles.selectedTab]}>
                        <TextView style={styles.tabText} text={"Photography"} />
                    </Pressable>

                    <Pressable onPress={() => setTab(1)}
                        style={[styles.tab, tab == 1 && styles.selectedTab]}>
                        <TextView style={styles.tabText} text={"Catering"} />
                    </Pressable>

                    <Pressable onPress={() => setTab(2)} style={[styles.tab, tab == 2 && styles.selectedTab]}>
                        <TextView style={styles.tabText} text={"Venue "} />
                    </Pressable>

                </View>

                <SearchBar searchBarPlaceHolder='Search By Item'/>


                <View style={[commonStyles.mt20]}>
                  <ScrollView style={{paddingStart:20}} showsHorizontalScrollIndicator={false} horizontal>
                  {types?.map((res)=>{
                       const isSelected = selectedTypeId === res.id;
                        return(
                            <TouchableOpacity
                            onPress={() => setSelectedTypeId(res.id)}
                            key={res?.id} style={[styles.typeStyle,
                                isSelected&&{backgroundColor:colors.purple}
                            ]}>
                                
                                <Image source={res?.image} style={commonStyles.image3}/>
                                <TextView style={[styles.type,
                                    isSelected&&{color:'white'}]} text={res?.type}/>
                            </TouchableOpacity>
                        )
                    })}
                  </ScrollView>
                 
                </View>



                <View style={styles.selectServices}>

                    <FlatList
                        data={materials}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.title}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        contentContainerStyle={styles.container}
                    />

                </View>
        </LinearGradient>

    )
}

export default AddItem;

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
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 10,
        padding: 5
    },
    title: {
        color: colors.darkBlack,
        fontSize: fontSize.large,
        fontFamily: fonts.semibold
    },
    itemImage: {
        width: '100%',
        height: 120,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    desc: {
        marginVertical: 10,
        marginStart: 10
    },
    description: {
        color: colors.lightBlack,
        fontFamily: fonts.regular,
        marginTop: widgetPadding / 2,
        fontSize: fontSize.small
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
        marginTop: widgetPadding
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
        marginHorizontal: 10,
        fontFamily: fonts.semibold
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
    }
})

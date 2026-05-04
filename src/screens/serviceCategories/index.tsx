import React, { useState } from "react";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeHeader from "../../components/common/Header";
import { colors, commonStyles, fonts, images } from "../../utils";
import LinearGradient from "react-native-linear-gradient";
import { categories, serviceSub, widgetPadding } from "../../utils/constants";
import { Button, TextView } from "../../components";
import { ServiceCategories } from "..";
import { ShadowView } from "react-native-inner-shadow";

const ServicesCategory = () => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);


    const renderItem = ({ item }: any) => {
        const isSelected = selectedServices.includes(item.title.trim());

        return ((
            <View 
            backgroundColor="white"
            shadowColor="#00000022"
            shadowOffset={{ width: 1, height: 10 }}
            shadowBlur={10}
            style={styles.item}>
            <TouchableOpacity
            style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}
                onPress={() => toggleService(item.title.trim())}
                key={item.title}
               >
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity
                    onPress={() => toggleService(item.title.trim())}
                    style={[styles.checkbox, isSelected && { backgroundColor: colors.green, borderColor: colors.green }]}>
                    <Image style={styles.tick} source={images.tick} />
                </TouchableOpacity>
            </TouchableOpacity>
            </View>
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
            end={{ x: 1, y: 1 }}
            colors={colors.mainContainer}
            style={commonStyles.mainContainer}>
            <HomeHeader
                title="Services"
                showBack />


          

            <View style={styles.selectServices}>
                <TextView style={[commonStyles.heading, { marginHorizontal: 5 }]} text={'Events Design & Setup'} />
                <TextView style={[commonStyles.subHeading,{alignSelf:'flex-start',marginBottom:widgetPadding,marginTop:0,marginHorizontal: 5}]} text={'Select service what are you looking for'} />
                <FlatList
                    data={serviceSub}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.container}
                    ListFooterComponent={() => {
                        return (
                            <Button isPurple route='Help' customStyle={{ marginTop: widgetPadding*3, }} isRound text={"Next"} />

                        )
                    }}
                />
  <Button
            isPurple
            text={"Next"}
            />
                
            </View>

        </LinearGradient>
    )
}

export default ServicesCategory;

const styles = StyleSheet.create({
    serviceBanner: {
        width: '90%',
        alignSelf: 'center',
        height: 200,
        resizeMode: 'stretch',
        marginTop: widgetPadding
    },
    selectServices: {
        backgroundColor: 'white',
        height: '100%',
        marginTop: -widgetPadding * 1.5,
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 15
    },
    container: {
        marginTop: 5,
        // padding: 20,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    item: {
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: widgetPadding,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: 'white',
        alignItems:'center',
        padding:5,
        paddingHorizontal:10,
        paddingVertical:10
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
    }
})

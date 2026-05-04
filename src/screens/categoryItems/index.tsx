import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeHeader from '../../components/common/Header';
import { colors, commonStyles, fonts, fontSize, images } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { categories, categoryItem, widgetPadding } from '../../utils/constants';
import { Button, Spacer, TextView } from '../../components';
import FastImage from 'react-native-fast-image';
import { ShadowView } from 'react-native-inner-shadow';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyModal from '../../components/successModal';
import { getServicesItems } from '../../network/requests';
import { SvgUri } from 'react-native-svg';

const CategoryItem = ({ navigation, route }: any) => {
  const [showModal, setModal] = useState(false);
  const [categoryItems, setCategoryItems] = useState([]);
  const { item } = route?.params;

  useEffect(() => {
    getServicesItems(item?.id).then(data => {
      if (data) {
        setCategoryItems(data?.related_items);
      }
    });
  }, []);

  const renderItem = ({ item }: any) => (
    <ShadowView
      inset
      backgroundColor="white"
      shadowColor="#00000022"
      shadowOffset={{ width: 1, height: 1 }}
      shadowBlur={4}
      style={styles.item}
    >
      <Pressable
        onPress={() => {
          navigation.navigate('ItemDetail', item);
        }}
        key={item.title}
      >
        <View
          style={[{ borderRadius: 10, overflow: 'hidden' }, styles.itemImage]}
        >
          <SvgUri
            uri={item?.image_url}
            width="100%" // Make it larger than container
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </View>

        <View style={styles.desc}>
          <Text style={styles.title}>{item.name}</Text>
          <TextView
            numOfLines={3}
            text={item?.short_description}
            style={styles.description}
          />
          <TouchableOpacity onPress={() => setModal(true)}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.aTCLinear}
              colors={['rgba(171, 131, 215, 1)', 'rgba(231, 202, 220, 1)']}
            >
              <View style={styles.addToCartBtn}>
                <Image style={styles.cartImage} source={images.cart} />
                <TextView style={styles.addToCart} text={'Add To Cart'} />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Pressable>
    </ShadowView>
  );

  return (
    <LinearGradient
      start={{ x: 0.1, y: 1 }}
      end={{ x: 0, y: 1 }}
      colors={colors.mainContainer}
      style={commonStyles.mainContainer}
    >
      <HomeHeader
        title="Add Item"
        searchBar
        heading={item.title}
        showFilter={true}
        searchBarPlaceHolder="Search By Item"
        showBack
      />

      <View style={styles.selectServices}>
        <FlatList
          data={categoryItems}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginBottom: 300 }}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.container}
          ListFooterComponent={() => (
            <View>
              <Spacer height={widgetPadding} />
              <Button route="MyCart" isPurple text={'Place Order'} />
              <Spacer height={widgetPadding} />
            </View>
          )}
        />
      </View>
      <Spacer height={widgetPadding} />

      <Modal
        onRequestClose={() => setModal(false)}
        visible={showModal}
        transparent
        animationType="fade"
      >
        <View style={styles.overlay}>
          <LinearGradient
            colors={colors.mainContainer}
            style={styles.container1}
          >
            {/* Close */}
            <TouchableOpacity
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              style={styles.close}
              onPress={() => setModal(false)}
            >
              <Text style={{ fontSize: 18 }}>✕</Text>
            </TouchableOpacity>
            <View style={{ padding: 20 }}>
              {/* Title */}
              <Text style={styles.title}>Request an item</Text>
              <Text style={styles.subtitle}>
                You may add your request for more items.
              </Text>

              <View style={styles.uploadBox}>
                <Text style={styles.uploadText}>Add image here</Text>

                <TouchableOpacity style={styles.uploadBtn}>
                  <Image
                    source={images.uploadBtn}
                    style={commonStyles.image3}
                  />
                  <Text style={styles.uploadBtnText}>Upload</Text>
                </TouchableOpacity>
              </View>

              {/* <ShadowView
                            inset
                                backgroundColor="red"
                                shadowColor="#00000022"
                                shadowOffset={{ width: 1, height: 3 }}
                                shadowBlur={5}
                                
                                style={{
                                    width: '100%',
                                    marginVertical: 5,
                                    alignSelf: 'center',
                                    marginTop: widgetPadding,
                                    borderRadius: 2120,
                                }}
                            > */}
              <TextInput
                placeholder="Description"
                multiline
                style={styles.input}
              />

              {/* </ShadowView> */}

              <Spacer height={widgetPadding} />

              <Button
                onPress={() => setModal(false)}
                isPurple
                text={'Place Order'}
              />
            </View>
          </LinearGradient>
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  serviceBanner: {
    width: '90%',
    alignSelf: 'center',
    height: 200,
    resizeMode: 'stretch',
    marginTop: widgetPadding,
  },
  selectServices: {
    height: '100%',
    marginTop: widgetPadding * 1.5,
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
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
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 2,
  },
  title: {
    color: colors.darkBlack,
    fontSize: fontSize.large,
    fontFamily: fonts.semibold,
    alignSelf: 'center',
  },
  itemImage: {
    width: '100%',
    height: 120,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  desc: {
    marginVertical: 10,
    marginStart: 10,
  },
  description: {
    color: colors.lightBlack,
    fontFamily: fonts.regular,
    marginTop: widgetPadding / 2,
    fontSize: fontSize.small,
  },
  addToCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aTCLinear: {
    flexDirection: 'row',
    borderRadius: 50,
    width: 120,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: widgetPadding,
  },
  cartImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  addToCart: {
    color: 'white',
    fontFamily: fonts.medium,
    fontSize: fontSize.small,
    marginStart: 5,
  },
  modalView: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  close: {
    position: 'absolute',
    right: 15,
    top: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    marginVertical: 6,
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: 'white',
  },
  uploadText: {
    color: 'rgba(63, 63, 63, 1)',
    marginBottom: 10,
    fontFamily: fonts.regular,
  },
  uploadBtn: {
    backgroundColor: 'rgba(249, 148, 23, 1)',
    paddingVertical: 6,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 120,
  },
  uploadBtnText: {
    color: '#fff',
    fontFamily: fonts.semibold,
    marginRight: 10,
  },
  input: {
    height: 100,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  button: {
    marginTop: 20,
    borderRadius: 30,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

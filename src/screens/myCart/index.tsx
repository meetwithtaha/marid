import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeHeader, { SearchBar } from '../../components/common/Header';
import { colors, commonStyles, fonts, fontSize, images } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { categories, categoryItem, widgetPadding } from '../../utils/constants';
import { TextView } from '../../components';
import FastImage from 'react-native-fast-image';
import { BottomView } from '../paymentDetail';
import { ShadowView } from 'react-native-inner-shadow';
import {
  getCart,
  onAddToCart,
  onDeleteCartItem,
  onUpdateCart,
} from '../../network/requests';
import { SvgUri } from 'react-native-svg';

const MyCart = ({ navigation }: any) => {
  const [myCart, setCart] = useState([]);
  const [sections, setSections] = useState([
    {
      id: '1',
      title: 'Events',
      desc: '(Events Branding & Promotional Item)',
      collapsed: true,
      items: [
        {
          id: '1',
          title: 'Kunafe',
          count: 0,
          desc: 'Lorem ipsum...',
          image: images.kunaf,
        },
        {
          id: '2',
          title: 'Ice Cream',
          count: 0,
          desc: 'Lorem ipsum...',
          image: images.iceCream,
        },
        // { id: '3', title: 'Banana Split', count: 0, desc: 'Lorem ipsum...', image: images.banana },
        // { id: '4', title: 'Pudding', count: 0, desc: 'Lorem ipsum...', image: images.pudding },
      ],
    },
    // {
    //     id: '2',
    //     title: 'Photography',
    //     collapsed: true,
    //     items: [
    //         // { id: '1', title: 'Kunafe', count: 0, desc: 'Lorem ipsum...', image: images.kunaf },
    //         // { id: '2', title: 'Ice Cream', count: 0, desc: 'Lorem ipsum...', image: images.iceCream },
    //         { id: '3', title: 'Banana Split', count: 0, desc: 'Lorem ipsum...', image: images.banana },
    //         { id: '4', title: 'Pudding', count: 0, desc: 'Lorem ipsum...', image: images.pudding },
    //     ]
    // },
  ]);

  const updateCount = (sectionId, itemId, change) => {
    setSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map(item =>
                item.id === itemId
                  ? { ...item, count: Math.max(0, item.count + change) }
                  : item,
              ),
            }
          : section,
      ),
    );
  };

  const toggleSection = (sectionId: string) => {
    setSections(prev =>
      prev.map(sec =>
        sec.id === sectionId ? { ...sec, collapsed: !sec.collapsed } : sec,
      ),
    );
  };

  useEffect(() => {
    getCart()
      .then(res => {
        if (res) {
          setCart(res);
          console.log('cart', JSON.stringify(res));
        }
      })
      .catch(e => console.log('Cart', e));
  }, []);

  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={colors.mainContainer}
      style={commonStyles.mainContainer}
    >
      <HomeHeader title="MyCart" showFilter={false} showBack />

      <View style={styles.selectServices}>
        <ScrollView contentContainerStyle={styles.container}>
          {myCart?.data?.items?.map(item => {
            return (
              <ShadowView
                backgroundColor="white"
                style={styles.itemView}
                shadowColor="rgba(0, 0, 0, 0.2)"
                shadowOffset={{ width: 1, height: 5 }}
                shadowBlur={5}
                // key={section.id}
              >
                <Pressable
                  key={item?.id}
                  onPress={() => navigation.navigate('ItemDetail', item?.item)}
                  style={styles.item}
                >
                  <View style={[styles.itemImage, { overflow: 'hidden' }]}>
                    <SvgUri
                      uri={item?.item?.image_url}
                      width="100%" // Make it larger than container
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </View>

                  <View style={styles.desc}>
                    <View>
                      <Text style={[styles.title, { maxWidth: 100 }]}>
                        {item?.item?.name}
                      </Text>
                      <TextView text={item.desc} style={styles.description} />
                    </View>
                    <View style={[commonStyles.rowJustified]}>
                      <View style={styles.counterContainer}>
                        <TouchableOpacity
                          onPress={() => {
                            if (item?.quantity === 1) {
                              onDeleteCartItem({
                                item_id: item?.cart_item_id,
                              }).then(res => {
                                setCart((prev: any) => {
                                  const updatedItems =
                                    prev?.data?.items?.filter(
                                      (i: any) => i.id !== item.id,
                                    );
                                  return {
                                    ...prev,
                                    data: {
                                      ...prev.data,
                                      subtotal: res?.data?.subtotal,
                                      items: updatedItems,
                                    },
                                  };
                                });
                              });
                            } else {
                              onUpdateCart({
                                item_id: item?.cart_item_id,
                                quantity: Number(item?.quantity) - 1,
                              })
                                .then(res => {
                                  console.log(
                                    '🚀 ~ MyCart ~ res:',
                                    JSON.stringify(res),
                                  );
                                  setCart((prev: any) => {
                                    const updatedItems = prev?.data?.items?.map(
                                      (i: any) =>
                                        i.id === item.id
                                          ? {
                                              ...i,
                                              quantity: item?.quantity - 1,
                                            }
                                          : i,
                                    );
                                    return {
                                      ...prev,
                                      data: {
                                        ...prev.data,
                                        subtotal: res?.data?.subtotal,
                                        items: updatedItems,
                                      },
                                    };
                                  });
                                })
                                .catch(e => console.log('Add to cart', e));
                            }
                          }}
                          style={styles.button}
                        >
                          <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.count}>{item?.quantity}</Text>

                        <TouchableOpacity
                          onPress={() => {
                            onUpdateCart({
                              item_id: item?.cart_item_id,
                              quantity: item?.quantity + 1,
                            })
                              .then(res => {
                                setCart((prev: any) => {
                                  const updatedItems = prev?.data?.items?.map(
                                    (i: any) =>
                                      i.id === item.id
                                        ? {
                                            ...i,
                                            quantity: item?.quantity + 1,
                                          }
                                        : i,
                                  );
                                  return {
                                    ...prev,
                                    data: {
                                      ...prev.data,
                                      subtotal: res?.data?.subtotal,
                                      items: updatedItems,
                                    },
                                  };
                                });
                              })
                              .catch(e => console.log('Add to cart', e));
                          }}
                          style={styles.button}
                        >
                          <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Pressable>
              </ShadowView>
            );
          })}

          {false &&
            sections.map(section => (
              <ShadowView
                backgroundColor="white"
                style={styles.itemView}
                shadowColor="rgba(0, 0, 0, 0.2)"
                shadowOffset={{ width: 1, height: 5 }}
                shadowBlur={5}
                key={section.id}
              >
                {/* Section Header */}
                <TouchableOpacity
                  onPress={() => toggleSection(section.id)}
                  style={styles.listHeader}
                >
                  <View>
                    <TextView
                      style={styles.listHeaderText}
                      text={section.title}
                    />
                    <TextView style={styles.listDescText} text={section.desc} />
                  </View>

                  <Image
                    source={images.rightArrw}
                    style={[
                      commonStyles.image2,
                      {
                        transform: [
                          { rotate: section.collapsed ? '90deg' : '0deg' }, // right → down
                        ],
                      },
                    ]}
                  />
                </TouchableOpacity>

                {section.collapsed &&
                  section.items.map(item => (
                    <Pressable
                      key={item.id}
                      onPress={() => navigation.navigate('ItemDetail', item)}
                      style={styles.item}
                    >
                      <FastImage
                        resizeMode="contain"
                        source={item.image}
                        style={styles.itemImage}
                      />
                      <View style={styles.desc}>
                        <View>
                          <Text style={styles.title}>{item.title}</Text>
                          <TextView
                            text={item.desc}
                            style={styles.description}
                          />
                        </View>
                        <View style={[commonStyles.rowJustified]}>
                          <View style={styles.counterContainer}>
                            <TouchableOpacity
                              onPress={() =>
                                updateCount(section.id, item.id, -1)
                              }
                              style={styles.button}
                            >
                              <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>

                            <Text style={styles.count}>{item.count}</Text>

                            <TouchableOpacity
                              onPress={() =>
                                updateCount(section.id, item.id, 1)
                              }
                              style={styles.button}
                            >
                              <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </Pressable>
                  ))}
              </ShadowView>
            ))}
        </ScrollView>
      </View>

      <BottomView
        route="SearchLocation"
        btnText={'Place Order'}
        price={myCart?.data?.subtotal}
      />
    </LinearGradient>
  );
};

export default MyCart;

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
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 15,
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
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    // borderTopWidth: 1,
    paddingTop: widgetPadding,
    height: 120,
    paddingVertical: widgetPadding,
  },
  title: {
    color: colors.darkBlack,
    fontSize: fontSize.semiMedium,
    fontFamily: fonts.semibold,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  desc: {
    marginStart: widgetPadding,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  description: {
    color: colors.lightBlack,
    fontFamily: fonts.regular,
    marginTop: widgetPadding / 2,
    fontSize: fontSize.small,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 12,
    marginHorizontal: 10,
    fontFamily: fonts.semibold,
  },
  button: {
    backgroundColor: 'rgba(147, 147, 147, 0.15)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(250, 250, 250, 1)',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  typeStyle: {
    backgroundColor: 'rgba(240, 240, 240, 1)',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    padding: 5,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingEnd: 20,
  },
  type: {
    marginStart: 10,
    fontFamily: fonts.medium,
    fontSize: fontSize.semiSmall,
    alignSelf: 'center',
    textAlign: 'center',
  },
  listStyle: {
    backgroundColor: 'white',
    borderRadius: widgetPadding,
  },
  listHeaderText: {
    fontFamily: fonts.semibold,
    color: colors.darkBlack,
    fontSize: fontSize.large,
  },
  listDescText: {
    fontFamily: fonts.medium,
    color: 'rgba(0, 0, 0, 0.59)',
    fontSize: fontSize.small,
    marginTop: widgetPadding / 4,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  itemView: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: widgetPadding,
    padding: widgetPadding / 4,
    marginHorizontal: 5,
  },
});

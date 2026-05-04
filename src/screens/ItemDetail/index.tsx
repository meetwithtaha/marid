import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeHeader from '../../components/common/Header';
import { colors, commonStyles, fonts, fontSize, images } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { widgetPadding } from '../../utils/constants';
import { Button, Spacer, TextView } from '../../components';
import { SvgUri } from 'react-native-svg';
import { onAddToCart } from '../../network/requests';

const ItemDetail = ({ route }: any) => {
  const params = route?.params;
  const [count, setCount] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const [materials, setMaterials] = useState([
    { id: '1', name: 'Silicone', count: 0 },
    { id: '2', name: 'Cement', count: 0 },
    { id: '3', name: 'Grout', count: 0 },
  ]);

  const updateCount = (id, change) => {
    setMaterials(prev =>
      prev.map(item =>
        item.id === id ? { ...item, count: item.count + change } : item,
      ),
    );
  };

  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={colors.mainContainer}
      style={commonStyles.mainContainer}
    >
      <HomeHeader title={'Product Details'} showBack />

      <SafeAreaView>
        <ScrollView>
          {/* <Image source={params?.image} style={styles.serviceBanner} /> */}

          <View
            style={[
              styles.serviceBanner,
              { borderRadius: 10, overflow: 'hidden' },
            ]}
          >
            <SvgUri
              uri={params?.image_url}
              width="100%" // Make it larger than container
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </View>

          <Spacer height={widgetPadding} />
          <View style={styles.detailView}>
            <TextView style={styles.heading} text={params?.name} />
            <Spacer height={widgetPadding} />
            <View style={commonStyles.rowJustified}>
              <TextView
                style={styles.subTotalAmounnt}
                text={`$${params?.price}`}
              />
              <View style={styles.material}>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      if (count > 0) {
                        setCount(count - 1);
                      }
                    }}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.count}>{count}</Text>

                  <TouchableOpacity
                    onPress={() => setCount(count + 1)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Spacer height={widgetPadding} />
            <TextView
              style={[styles.heading, { fontSize: fontSize.medium }]}
              text={`${params?.short_description}`}
            />
            <TextView text={params?.description} style={styles.description} />
          </View>

          <View style={styles.selectServices}>
            {/* <View style={styles.tabsContainer}>
                    <Pressable onPress={() => setTab(0)} style={[styles.tab, tab == 0 && styles.selectedTab]}>
                        <TextView style={styles.tabText} text={"Material"} />
                    </Pressable>

                    <Pressable onPress={() => setTab(1)} style={[styles.tab, tab == 1 && styles.selectedTab]}>
                        <TextView style={styles.tabText} text={"Printing"} />
                    </Pressable>

                    <Pressable onPress={() => setTab(2)} style={[styles.tab, tab == 2 && styles.selectedTab]}>
                        <TextView style={styles.tabText} text={"Customization"} />
                    </Pressable>
                </View> */}

            <Spacer height={20} />

            {/* {materials.map(item => (
                    <CounterItem
                        key={item.id}
                        name={item.name}
                        count={item.count}
                        onIncrease={() => updateCount(item.id, 1)}
                        onDecrease={() => updateCount(item.id, -1)}
                    />
                ))} */}

            {/* <View style={styles.subTotalView}>
                    <View style={styles.subTotal}>
                            <TextView style={styles.subTotalText} text={'Sub Total'}/>
                            <TextView style={styles.subTotalAmounnt} text={'$99.0'}/>
                    </View>
                    <View style={styles.subTotal}>
                            <TextView style={styles.itemHistory} text={'View Item History'}/>
                            <TextView  text={'$99.0'}/>
                    </View>

                </View> */}

            <Spacer height={20} />

            <Button
              icon={images.whiteCart}
              isPurple
              isLoading={isLoading}
              isDisabled={isLoading}
              customStyle={styles.btnStyle}
              text={'Add to Cart'}
              onPress={async () => {
                setLoading(true);
                const response = await onAddToCart({
                  quantity: count,
                  item_id: params?.id,
                });

                setLoading(false);

                alert('Added to cart successfully!');
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ItemDetail;

const CounterItem = ({ name, count, onIncrease, onDecrease }) => (
  <View style={styles.material}>
    <Text style={styles.materialName}>{name}</Text>
    <View style={styles.counterContainer}>
      <TouchableOpacity onPress={onDecrease} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity onPress={onIncrease} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

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
    backgroundColor: '#4ECDC4',
    flex: 1,
    marginHorizontal: 5,
    height: 120,
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 15,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: 'rgba(0, 0, 0, 0.59)',
    fontFamily: fonts.regular,
    marginTop: widgetPadding,
    fontSize: fontSize.medium,
    letterSpacing: 0.4,
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
    fontSize: fontSize.medium,
  },
  selectedTab: {
    borderBottomWidth: 4,
    borderBottomColor: colors.textBlack,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 16,
    marginHorizontal: 10,
    fontFamily: fonts.bold,
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
    fontSize: 20,
    fontFamily: fonts.light,
  },
  material: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  materialName: {
    color: 'rgba(0, 0, 0, 0.59)',
    fontFamily: fonts.medium,
  },
  subTotalView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 50,
    borderRadius: 10,
    // padding:20,
  },
  subTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0, 0, 0, 0.06)',
    borderBottomWidth: 1,
    padding: 15,
    paddingHorizontal: 20,
  },
  subTotalText: {
    color: colors.darkBlack,
    fontFamily: fonts.semibold,
    fontSize: fontSize.large,
  },
  subTotalAmounnt: {
    color: colors.purple,
    fontFamily: fonts.bold,
    fontSize: fontSize.large,
    marginHorizontal: 10,
  },
  itemHistory: {
    color: colors.textBlack,
    fontFamily: fonts.semibold,
    fontSize: fontSize.small,
  },
  btnStyle: {
    borderRadius: 30,
    width: '90%',
  },
  detailView: {
    marginHorizontal: 20,
    marginTop: widgetPadding,
  },
  heading: {
    fontFamily: fonts.medium,
    fontSize: fontSize.large,
  },
});

import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeHeader from '../../components/common/Header';
import { colors, commonStyles, fonts, fontSize, images } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { categories, widgetPadding, WIDTH } from '../../utils/constants';
import { Button, TextView } from '../../components';
import FastImage from 'react-native-fast-image';
import { getServices } from '../../network/requests';
import { SvgUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/native';

const Services = ({ navigation }: any) => {
  const [services, setServices] = React.useState([]);
  const route = useRoute().params;
  console.log('🚀 ~ Services ~ services:', JSON.stringify(services));

  useEffect(() => {
    // Fetch home data from the API and set it to state
    getServices(route?.id).then(data => {
      if (data) setServices(data?.data);
    });
  }, []);

  const renderItem = ({ item }: any) => (
    <Pressable
      style={[styles.item, { padding: 0 }]}
      onPress={() => {
        navigation.navigate('CategoryItem', {
          item,
        });
      }}
    >
      <View
        style={[
          {
            borderRadius: 10,
            overflow: 'hidden', // important for border radius clipping
            opacity: 0.95,
          },
          StyleSheet.absoluteFill,
        ]}
      >
        <SvgUri
          uri={item?.image_url}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
      </View>
      <Text style={styles.title}>{item?.name}</Text>
    </Pressable>
  );

  return (
    <LinearGradient
      start={{ x: 0.1, y: 1 }}
      end={{ x: 0, y: 1 }}
      colors={colors.mainContainer}
      style={commonStyles.mainContainer}
    >
      <HomeHeader title="Events Services" showBack />

      <FastImage
        resizeMode="cover"
        source={images.serviceBannerBack}
        style={styles.banner}
      >
        <View style={styles.serviceOffer}>
          <TextView style={styles.service} text={'Service We Offer'} />

          <TextView
            style={styles.customize}
            text={'Customize Your\nOwn Event'}
          />

          <Pressable
            onPress={() => navigation.navigate('Chat')}
            style={styles.btn}
          >
            <TextView text={'Start Now >'} style={styles.startNow} />
          </Pressable>
        </View>
      </FastImage>

      {/* <Image source={images.serviceBanner} style={styles.serviceBanner} /> */}

      <View style={styles.selectServices}>
        <TextView
          style={[commonStyles.heading, { marginHorizontal: 5 }]}
          text={'Select service what are\nyou looking for'}
        />

        <FlatList
          data={services}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.container}
        />
      </View>
    </LinearGradient>
  );
};

export default Services;

const styles = StyleSheet.create({
  serviceBanner: {
    width: '90%',
    alignSelf: 'center',
    height: 200,
    resizeMode: 'stretch',
    marginTop: widgetPadding,
  },
  selectServices: {
    backgroundColor: 'white',
    height: '100%',
    marginTop: widgetPadding * 1.5,
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
    marginHorizontal: 5,
    height: 120,
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 15,
    width: WIDTH / 2.3,
    marginTop: 5,
  },
  title: {
    color: '#fff',
    fontFamily: fonts.medium,
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 5,
    fontWeight: '800',
  },
  customize: {
    color: '#fff',
    fontFamily: fonts.semibold,
    fontSize: 23,
    marginTop: widgetPadding / 2,
  },
  banner: {
    backgroundColor: colors.purple,
    width: '90%',
    height: 180,
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  serviceOffer: {
    flex: 1,
  },
  service: {
    color: 'white',
    fontFamily: fonts.regular,
    fontSize: fontSize.small,
  },
  btn: {
    backgroundColor: 'white',
    marginTop: widgetPadding,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    borderRadius: 20,
  },
  startNow: {
    fontFamily: fonts.regular,
    fontSize: fontSize.small,
  },
});

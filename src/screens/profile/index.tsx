import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeHeader from '../../components/common/Header';
import FastImage from 'react-native-fast-image';
import { colors, commonStyles, fonts, fontSize, images } from '../../utils';
import { Spacer, TextView } from '../../components';
import { widgetPadding } from '../../utils/constants';
import { ShadowView } from 'react-native-inner-shadow';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const navigation = useNavigation();

  const renderItem = (icon, label, route) => (
    <ShadowView
      backgroundColor="white"
      shadowColor="rgba(0, 0, 0, 0.2)"
      shadowOffset={{ width: 1, height: 5 }}
      shadowBlur={10}
      style={{
        marginBottom: widgetPadding,
        borderRadius: 50,
        paddingHorizontal: 5,
      }}
    >
      <TouchableOpacity
        style={styles.item}
        onPress={() => (route ? navigation.navigate(route) : null)}
      >
        <View style={styles.itemLeft}>
          <Image
            source={icon}
            style={[commonStyles.image4, { borderRadius: 50 }]}
          />
          <TextView style={styles.itemText} text={label} />
        </View>
        <Image source={images.rightArrw} style={commonStyles.image2} />
      </TouchableOpacity>
    </ShadowView>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        style={styles.profileHeader}
        source={images.profileHeader}
      >
        <HomeHeader showBack />
      </FastImage>
      <Image
        source={images.profile}
        style={[styles.profile, { zIndex: 9999999 }]}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, zIndex: 999999, marginBottom: 80 }}
      >
        <View style={styles.header}>
          <Text style={styles.name}>{global?.userInfo?.user?.name}</Text>
          <Text style={styles.email}>{global?.userInfo?.user?.email}</Text>
        </View>

        {/* Sections */}
        <ShadowView
          shadowColor="rgba(0, 0, 0, 0.2)"
          shadowOffset={{ width: 1, height: 10 }}
          shadowBlur={10}
          style={styles.section}
        >
          <View>
            <Text style={styles.sectionTitle}>Account Settings</Text>
            {renderItem(images.personal, 'Personal Information')}
            {renderItem(images.password, 'Password & Security')}
            {renderItem(images.address, 'Address Book')}
            {/* Toggle Switch */}
            <ShadowView
              backgroundColor="white"
              shadowColor="rgba(0, 0, 0, 0.2)"
              shadowOffset={{ width: 1, height: 10 }}
              shadowBlur={10}
              style={{
                marginBottom: widgetPadding,
                borderRadius: 50,
                paddingHorizontal: 5,
              }}
            >
              <View style={styles.item}>
                <View style={styles.itemLeft}>
                  <Image
                    source={images.notification}
                    style={commonStyles.image4}
                  />
                  <Text style={styles.itemText}>Notification</Text>
                </View>
                <Switch
                  trackColor={{ false: '#767577', true: '#6C3FB4' }}
                  thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
                  onValueChange={() =>
                    setNotificationsEnabled(!notificationsEnabled)
                  }
                  value={notificationsEnabled}
                  style={{
                    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
                  }}
                />
              </View>
            </ShadowView>
          </View>
        </ShadowView>

        {/* <View style={styles.section}> */}
        <ShadowView
          backgroundColor="white"
          shadowColor="rgba(0, 0, 0, 0.2)"
          shadowOffset={{ width: 1, height: 10 }}
          shadowBlur={10}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Payment Settings</Text>
          {renderItem(images.payment, 'Payment Information')}
          {renderItem(images.billing, 'Billing History')}
        </ShadowView>

        <ShadowView
          backgroundColor="white"
          shadowColor="rgba(0, 0, 0, 0.2)"
          shadowOffset={{ width: 1, height: 10 }}
          shadowBlur={10}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Order Detailed</Text>
          {renderItem(images.payment, 'Order History', 'OrderHistory')}
          {renderItem(images.viewCart, 'View Cart', 'MyCart')}
        </ShadowView>

        <ShadowView
          backgroundColor="white"
          shadowColor="rgba(0, 0, 0, 0.2)"
          shadowOffset={{ width: 1, height: 10 }}
          shadowBlur={10}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Resources</Text>
          {renderItem(images.address, 'About us')}
          {renderItem(images.support, 'Support')}
          {renderItem(images.sharedFeedback, 'Share feedback')}
        </ShadowView>
        {/* {Platform.OS == 'ios' && <Spacer height={800}/>} */}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileHeader: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  profile: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: -95,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.semibold,
    color: colors.darkBlack,
    marginTop: widgetPadding,
  },
  email: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.41)',
    marginTop: 8,
    fontFamily: fonts.regular,
  },
  section: {
    paddingVertical: widgetPadding,
    borderRadius: 12,
    marginBottom: widgetPadding,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: fontSize.large,
    fontFamily: fonts.semibold,
    marginBottom: widgetPadding,
    color: '#222',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 5,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    backgroundColor: '#ECECEC',
    padding: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  itemText: {
    fontSize: 14,
    color: '#333',
    fontFamily: fonts.medium,
    marginStart: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import TextView from '../common/TextView';
import { events, widgetPadding } from '../../utils/constants';
import { colors, commonStyles, fonts, fontSize } from '../../utils';
import FastImage from 'react-native-fast-image';
import { useNavigation, useRoute } from '@react-navigation/native';
import Spacer from '../common/Spacer';
import { SvgUri } from 'react-native-svg';

const ChooseEvents = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={[commonStyles.mainContainer, { marginHorizontal: 20 }]}>
      <TextView style={styles.heading} text={'Choose Your Event'} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {data?.event_types?.map((res, index) => (
          <Pressable
            onPress={() => navigation.navigate('Services', { id: res?.id })}
            key={res.name + index}
            style={styles.container}
          >
            <SvgUri
              uri={res.image_url}
              width="100%" // Make it larger than container
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />

            <TextView style={styles.title} text={res?.name} />
          </Pressable>
        ))}
        <Spacer height={widgetPadding * 10} />
      </ScrollView>
    </View>
  );
};

export default ChooseEvents;

const styles = StyleSheet.create({
  heading: {
    marginTop: widgetPadding * 2,
    fontFamily: fonts.semibold,
    fontSize: fontSize.large,
    marginBottom: 10,
  },
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 200,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    // Android shadow
    elevation: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontFamily: fonts.semibold,
    fontSize: fontSize.large,
  },
});

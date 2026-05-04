import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  SafeAreaView,
  Pressable,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { colors, commonStyles, fonts, images } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { onboardingData } from '../../utils/constants';
import { fetchOnboardingData, OnboardingSlide } from '../../network/requests';
import { SvgUri } from 'react-native-svg';
import Loader from '../../components/common/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<OnboardingSlide[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log('🚀 ~ OnboardingScreen ~ slides:', JSON.stringify(slides));

  useEffect(() => {
    AsyncStorage.getItem('@onboardingCompleted').then(value => {
      if (value === 'true') {
        AsyncStorage.getItem('@user').then(user => {
          if (user) {
            global.userInfo = JSON.parse(user);
            navigation.navigate('BottomTab');
          } else {
            navigation.replace('Login');
          }
        });
      } else {
        fetchOnboardingData()
          .then(data => {
            if (data?.length > 0) {
              setSlides(data);
            }
          })
          .catch(() =>
            setSlides(onboardingData as unknown as OnboardingSlide[]),
          )
          .finally(() => setIsLoading(false));
      }
    });
  }, []);

  const renderItem = ({ item, index }: any) => (
    <View style={[styles.slide]}>
      <SvgUri
        uri={item.image_url}
        width="100%" // Make it larger than container
        height="100%"
        style={StyleSheet.absoluteFill} // Center it
        preserveAspectRatio="xMidYMid slice"
      />

      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={['#5D3891', 'rgba(0,0,0,0.3)', 'transparent']}
        style={styles.gradientOverlay}
      >
        <SafeAreaView>
          <View style={styles.textContainer}>
            <Text style={styles.pagination}>
              {index + 1 + '/' + slides.length}
            </Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );

  const handleBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      setCurrentIndex(newIndex);
    }
  };

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  if (isLoading) return <Loader />;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={item => item?.id?.toString()}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
            listener: handleScroll,
          },
        )}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
      <View style={styles.indicatorContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={images.backBtn}
            style={[commonStyles.image12, { marginTop: -23, marginLeft: -20 }]}
          />
        </TouchableOpacity>

        <LinearGradient
          start={{ x: 0.2, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={styles.getStarted}
          colors={['rgba(249, 148, 23, 1)', 'rgba(255, 196, 124, 1)']}
        >
          <Pressable
            onPress={() => {
              AsyncStorage.setItem('@onboardingCompleted', 'true');
              navigation.replace('Login');
            }}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </Pressable>
        </LinearGradient>
        {/* {onboardingData.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.8, 1.4, 0.8],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View
                            key={i}
                            style={[styles.indicator, { transform: [{ scale }] }]}
                        />
                    );
                })} */}
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 10,
    fontFamily: fonts.medium,
  },
  description: {
    fontSize: 18,
    color: colors.description,
    fontFamily: fonts.light,
    marginTop: 5,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 50,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 8,
  },
  textContainer: {
    marginBottom: Platform.OS == 'android' ? 140 : 100,
    paddingHorizontal: 20,
  },
  pagination: {
    color: 'white',
    marginBottom: 10,
    fontFamily: fonts.medium,
  },
  backBtn: {},
  getStarted: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    borderRadius: 30,
  },
  getStartedText: {
    color: 'white',
    fontFamily: fonts.semibold,
  },
  gradientOverlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});

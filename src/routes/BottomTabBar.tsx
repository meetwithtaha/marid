import React, { useEffect, useRef } from 'react';
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import images from '../utils/images';
import { colors } from '../utils';

function MyTabBar({ state, descriptors, navigation }) {
  const currentRoute = state.routes[state.index].name;

  if (currentRoute === 'MyCart') {
    return null; // hides the bottom bar
  }
  
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.bottomWrapper}>
      {/* TAB BAR */}
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;

          let icon;
          if (index === 0) icon = images.Home;
          else if (index === 1) icon = images.myCart;
          else if (index === 2) icon = images.Profile;

          const scaleAnim = useRef(
            new Animated.Value(focused ? 1 : 0.9)
          ).current;

          useEffect(() => {
            Animated.spring(scaleAnim, {
              toValue: focused ? 1 : 0.9,
              friction: 6,
              useNativeDriver: true,
            }).start();
          }, [focused]);

          const onPress = () => {
            if (!focused) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={styles.tabItem}
            >
              <Animated.View
                style={[
                  styles.iconWrapper,
                  focused && styles.activeIcon,
                  { transform: [{ scale: scaleAnim }] },
                ]}
              >
                <Image
                  source={icon}
                  style={[
                    styles.icon,
                    focused && { tintColor: '#fff' },
                  ]}
                />
              </Animated.View>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        style={styles.logoButton}
        onPress={() => navigation.navigate('GetStarted')}
      >
        <Image
          source={images.newLogoo}
          style={styles.logoImage}
        />
      </Pressable>
    </View>
  );
}

export default MyTabBar;


const styles = StyleSheet.create({
    bottomWrapper: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      alignItems: 'center',
    },
  
    tabBarContainer: {
      flexDirection: 'row',
      height: 60,
      width: '70%',           
      marginRight: 80,    
      backgroundColor: '#fff',
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'space-around',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 12,
    },
  
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    iconWrapper: {
      width: 46,
      height: 46,
      borderRadius: 23,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    activeIcon: {
      backgroundColor: colors.purple,
    },
  
    icon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      tintColor: 'rgba(178, 116, 195, 1)',
    },
  
    /* RIGHT FLOATING LOGO */
    logoButton: {
      position: 'absolute',
      right: 20,
      width: 60,
      height: 60,
      borderRadius: 32,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 10,
    },
  
    logoImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  });

  
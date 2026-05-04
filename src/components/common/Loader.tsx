import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator
      style={{zIndex:9999}}
      color={colors.skyBlue} size={'large'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    backgroundColor: 'rgba(0,0,0,0.2),',
    flex: 1,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:1
  },
});

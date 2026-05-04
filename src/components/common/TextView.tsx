import React from 'react';
// import { useTranslation } from 'react-i18next';
// import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';

type PropType = {
  text: any;
  style?: any;
  numOfLines?: number;
  onPress?: any;
};

const TextView = ({text, style, numOfLines, onPress}: PropType) => {
//   const {t} = useTranslation();

  return (
    <Text onPress={onPress} numberOfLines={numOfLines} style={style}>
      {(text)}
      {/* {t(value)} */}
    </Text>
  );
};
export default TextView;

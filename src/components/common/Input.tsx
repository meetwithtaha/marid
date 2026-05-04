import React, { useState } from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { colors, commonStyles, fontSize, fonts, images } from '../../utils';
import moment from 'moment';
import TextView from './TextView';
import { ShadowView } from 'react-native-inner-shadow';


type prop = {
  countryPicker?: boolean;
  placeholder?: string;
  value?: any;
  keyboardType?: 'decimal-pad' | 'email-address' | 'numeric' | 'number-pad' | 'phone-pad';
  onChangeText?: any;
  dropdown?: boolean;
  label?: string;
  isPassword?: boolean;
  editable?: boolean;
  inset?:boolean;
};
const EditText = ({
  countryPicker,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  dropdown,
  label,
  isPassword,
  isLong,
  isDropdown,
  isDate,
  editable = true,
  mode = 'date',
  currency,
  onSubmitEditing,
  showsearch,
  onShowPress,
  inset =true
}: prop) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword ? true : false);

  const onPress = () => {
    if (isDate) {
      setDatePickerVisibility(!isDatePickerVisible)
    }
  }
  const handleConfirm = date => {
    setDatePickerVisibility(false);
    onChangeText(moment(date).format('YYYY-MM-DD'));
  }

  const toggleModal = () => setDatePickerVisibility(!isDatePickerVisible);

  const hidePassword = () => setSecureTextEntry(!secureTextEntry)

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.mainContainer,
        isLong && { height: 140, alignItems: 'flex-start', borderRadius: 20, maxHeight: undefined },
      ]}>
      <View style={{ flex: 1 }}>
        {label ? <TextView text={label} style={styles.label} /> : null}
        <View style={[commonStyles.rowJustified]}>
          <ShadowView
            inset={inset}
            backgroundColor="white"
            shadowColor="#00000022"
            shadowOffset={{ width: 1, height:inset?1: 5 }}
            shadowBlur={5}
            style={{
              width: '100%',
              height: 60,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 5,
              alignSelf: 'center',
              paddingHorizontal: 10
            }}
          >
            <TextInput
              onSubmitEditing={onSubmitEditing}
              multiline={isLong}
              secureTextEntry={secureTextEntry}
              onPressIn={onPress}
              editable={editable}
              returnKeyType="done"
              autoCapitalize={isPassword ? 'none' : 'sentences'}
              keyboardType={keyboardType}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              placeholderTextColor={colors.placeholder}
              style={[styles.inputStyle,
              isLong && {
                height: 100,
              },
              (!editable && !isDate) && { color: 'grey' },
              ]}
            />
          </ShadowView>


          {(isDropdown || isDate || placeholder == 'Select') && (
            <Pressable>
              <Image style={styles.dropdownImage} source={images.dropdown} />
            </Pressable>
          )}
          {(value && showsearch) && (
            <Pressable onPress={onShowPress}>
              <Image style={[styles.dropdownImage, { marginRight: 0 }]} source={images.search} />
            </Pressable>
          )}
        </View>
      </View>

      {isPassword && (
        <Pressable
          style={{ width: 30, height: 30, alignItems: 'flex-end', justifyContent: 'center' }}
          onPress={hidePassword}>
          <Image style={[styles.dropdown]} source={images.eye} />
        </Pressable>
      )}
      {/* <DatePicker
          modal
          open={isDatePickerVisible}
          date={date}
          mode={mode}
          onConfirm={handleConfirm}
          onCancel={toggleModal}
        /> */}
    </Pressable>
  );
};

export default EditText;

const styles = StyleSheet.create({
  downArrow: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  inputStyle: {
    color: colors.textBlack,
    fontFamily: fonts.medium,
    fontSize: fontSize.medium,
    width: '100%',
    borderRadius: 30,
    height:'100%'
  },
  code: {
    color: colors.textBlack,
    fontFamily: fonts.regular,
    fontSize: fontSize.semiSmall,
    height: Platform.OS == 'ios' ? 20 : 35,
    marginTop: Platform.OS == 'ios' ? 3 : 0,
  },
  currenyStyle: {
    color: colors.textBlack,
    fontFamily: fonts.regular,
    fontSize: fontSize.semiSmall,
    marginTop: Platform.OS == 'ios' ? 3 : 0,
    marginRight: 2
  },
  mainContainer: {
    // marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // minHeight:Platform.OS == 'ios'?55:50,
    // maxHeight:Platform.OS == 'ios'?50: 53,
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
  },
  label: {
    color: colors.darkBlack,
    fontFamily: fonts.semibold,
    fontSize: fontSize.medium,
    marginBottom: 10
  },
  dropdown: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  dropdownImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },

  outerShadow: {
    borderRadius: 50,
    backgroundColor: "#F3F3F3",
    shadowColor: "#ffffff",
    shadowOffset: { width: -10, height: -10 },
    shadowOpacity: 1,
    shadowRadius: 12,
    width: '100%',
    alignSelf: 'center',
    height: 55
  },

  innerShadow: {
    borderRadius: 50,
    backgroundColor: "white",
    paddingHorizontal: 20,
    justifyContent: "center",
    shadowColor: "#B9C1D1",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    borderWidth: 1.5,
    borderColor: 'rgb(0,0,0,0.1)d',
    borderBottomWidth: 2,
    height: 50
  },

  input: {
    fontSize: 16,
    color: "#555",
    fontFamily: fonts.medium
  },

});

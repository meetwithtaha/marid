import {StyleSheet} from 'react-native';
import {colors, fontSize, fonts} from '.';
import { widgetPadding } from './constants';

export default StyleSheet.create({
  h1: {
    color: colors.textBlack,
    fontFamily: fonts.semibold,
    fontSize: fontSize.xxxxlarge,
    textAlign: 'center',
    lineHeight: 36,
  },
  authHeading: {
    color: colors.textBlack,
    fontFamily: fonts.semibold,
    fontSize: fontSize.large,
    textAlign: 'center',
    lineHeight: 36,
  },
  authSubheading: {
    color: colors.textBlack,
    fontFamily: fonts.regular,
    fontSize: fontSize.semiSmall,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  h2: {
    color: colors.textBlack,
    fontFamily: fonts.medium,
    fontSize: fontSize.xxlarge,
    textAlign: 'center',
    lineHeight: 36,
    marginTop: 30,
  },
  h3: {
    color: colors.textBlack,
    fontFamily: fonts.medium,
    fontSize: fontSize.medium,
  },
  h4: {
    color: colors.textGrey,
    fontFamily: fonts.medium,
    fontSize: fontSize.medium,
  },
  h4Regular: {
    color: colors.textGrey,
    fontFamily: fonts.regular,
    fontSize: fontSize.medium,
  },
  h4RegularDark: {
    color: colors.textBlack,
    fontFamily: fonts.regular,
    fontSize: fontSize.medium,
  },
  h4Medium: {
    color: colors.textBlack,
    fontFamily: fonts.medium,
    fontSize: fontSize.medium,
  },
  h5: {
    color: colors.textGrey,
    fontFamily: fonts.regular,
    fontSize: fontSize.small,
  },
  h5Light: {
    color: colors.textGrey,
    fontFamily: fonts.exLight,
    fontSize: fontSize.small,
  },
  dock: {
    backgroundColor: colors.textGrey,
    width: 50,
    height: 6,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 25,
  },
  footerTextThin: {
    color: colors.textGrey,
    fontFamily: fonts.regular,
    fontSize: fontSize.semiSmall,
    alignSelf: 'center',
  },
  footerTextBold: {
    color: colors.textBlack,
    fontFamily: fonts.semibold,
    fontSize: fontSize.semiSmall,
    textDecorationLine: 'underline',
  },
  subHeading: {
    alignSelf: 'center',
    fontFamily: fonts.regular,
    color: colors.textGrey,
    marginTop: 10,
    textAlign: 'center',
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: 'white',
  },
  mainContainerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
  rowAlign: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems:'center'
  },
  rowStart: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  rowJustified: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCenter:{
    alignItems:'center',
    justifyContent:'space-between',
    alignSelf:'center',
    flexDirection:'row'
  },
  rowJustifiedCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowJustifiedStart: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnOutlineWhite: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    padding: 10,
  },
  btnOutlineGrey: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.borderColor,
    padding: 10,
  },
  image7: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 10,
  },
  image10: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 35,
    marginRight: 10,
  },
  image15: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  image16: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  image18: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  image20: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 35,
  },
  image12: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  image15: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 75,
  },
  image5: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    margin: 5,
  },
  image4: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  image2: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  image3: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  image1_5: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  columnJustfied: {
    marginStart: 5,
  },
  scrollView: {
    flex: 1,
  },
  tabView: {
    marginTop: 30,
    flexDirection: 'row',
  },
  tab: {
    marginRight: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    paddingBottom: 20,
  },
  tabHeading: {
    fontFamily: fonts.regular,
    color: 'white',
    fontSize: fontSize.semiSmall,
  },
  nextBtn: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
  },
  mt10: {marginTop: 10},
  mt15: {marginTop: 15},
  mt20: {marginTop: 20},
  mt25: {marginTop: 25},
  mt30: {marginTop: 30},
  m5: {marginTop: 5},
  m4: {marginTop: 4},
  m3: {marginTop: 3},
  mb10: {marginBottom: 10},
  mb20: {marginBottom: 20},
  mb30: {marginBottom: 30},
  mh10: {marginHorizontal: 10},
  m10: {margin: 10},
  m20: {margin: 20},
  m30: {margin: 30},
  mh20: {marginHorizontal: 20},
  mh30: {marginHorizontal: 30},
  mh40: {marginHorizontal: 40},
  mh50: {marginHorizontal: 50},
  mh60: {marginHorizontal: 60},

  textAlign: {
    textAlign: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
    fontFamily: fonts.semibold,
    color: colors.blue,
    fontSize: fontSize.semiSmall,
    marginHorizontal: 30,
  },
  center: {
    alignSelf: 'center',
  },
  whiteText: {
    color: 'white',
  },
  whiteTint: {
    tintColor: 'white',
  },
  navyBlue: {
    backgroundColor: '#0D131D',
  },
  skyBlue: {
    color: colors.skyBlue,
  },
  darkBlue: {
    backgroundColor: colors.darkBlue,
  },
  lightGrey: {
    color: colors.lightGrey,
  },
  image30:{
    width:30,
    height:30,
    resizeMode:'contain'
},
image40:{
    width:40,
    height:40,
    resizeMode:'contain'
},
image50:{
    width:50,
    height:50,
    resizeMode:'contain'
},
image60:{
    width:60,
    height:60,
    resizeMode:'contain'
},
image75:{
    width:75,
    height:75,
    resizeMode:'contain'
},
image80:{
    width:80,
    height:80,
    resizeMode:'contain'
},
image100:{
    width:100,
    height:100,
    resizeMode:'contain'
},
heading:{
  marginTop:widgetPadding*1.5,
  fontFamily:fonts.semibold,
  fontSize:fontSize.xlarge,
  marginBottom:10
},
logo: {
  width: 120,
  height: 100,
  alignSelf: 'center',
  resizeMode: "contain",
},
});

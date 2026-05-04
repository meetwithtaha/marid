// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import { AddItem, CardDetails, CategoryItem, GetStarted, Help, Home, HowMayIHelp, Information, Login, OnboardingScreen, OrderDetails, OrderHistory, PaymentDetail, Profile, Register, SearchLocation, ServiceCategories, Services } from '../screens';
import ItemDetail from '../screens/ItemDetail';
import MyCart from '../screens/myCart';
import BottomTab from './bottomTab';
import Chat from '../screens/chatBot';


const Stack = createNativeStackNavigator();

function Route() {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="CategoryItem" component={CategoryItem} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="SearchLocation" component={SearchLocation} />
      <Stack.Screen name="PaymentDetail" component={PaymentDetail} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="ServiceCategories" component={ServiceCategories} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="HowMayIHelp" component={HowMayIHelp} />
   
    </Stack.Navigator>
  );
}

export default Route;

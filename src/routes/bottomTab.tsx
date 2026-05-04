import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './BottomTabBar';
import { ChatBot, Help, Home, Profile, Services } from '../screens';
import MyCart from '../screens/myCart';
import CustomDrawer from './drawerNavigation';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="CustomDrawer" component={CustomDrawer} />
      {/* <Tab.Screen name="Services" component={Services} /> */}
      <Tab.Screen 
       options={{
        tabBarStyle: { display: 'none' },
      }}
      name="MyCart" component={MyCart} />
      {/* <Tab.Screen name="ChatBot" component={ChatBot} /> */}
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTab


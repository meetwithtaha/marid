import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, HowMayIHelp } from '../screens';
import CustomDrawerContent from './CustomDrawerContent';
import { WIDTH } from '../utils/constants';

const Drawer = createDrawerNavigator();

const CustomDrawer =()=> {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false,
      drawerStyle:{
        width:WIDTH*0.7,
        direction:'inherit',
      
      },
      drawerType:'front'
    }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="HowMayIHelp" component={HowMayIHelp} />
    </Drawer.Navigator>
  );
}

export default CustomDrawer;
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { commonStyles, fonts, images } from '../utils';
import { widgetPadding } from '../utils/constants';
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawer(props) {
  return (
    <View style={styles.wrapper}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image
          
            source={images.logo}
            style={styles.logo}
          />
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Text style={styles.close}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <MenuItem route={'Chat'} image={images.newResult} title="New Chat" />
        <MenuItem onPress={() => props.navigation.closeDrawer()} image={images.searchResult} title="Services" />
        <MenuItem route={'OrderHistory'} image={images.orderHistory} title="Order History" />
        <MenuItem route={'Profile'} image={images.audio} title="Personal Profile" />

        <Text style={styles.section}>Chats</Text>

        <ChatItem title="Need suggestions event" active />
        <ChatItem title="Wedding Event" />
        <ChatItem title="Corporate Functions" />
        <ChatItem title="Want equipment's" />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Aman Asghar</Text>
          <Text style={styles.email}>amanasghar28@gmail.com</Text>
        </View>
      </View>
    </View>
  );
}

const MenuItem = ({ title,image,route,onPress }) => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity 
    onPress={()=>{
      onPress?onPress(): route&&navigation.navigate(route)
    }}
    style={styles.menuItem}>
      <Image source={image} style={commonStyles.image2}/>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  )
};



export const ChatItem = ({ title, active,style }) => {
  const navigation = useNavigation();


  return(
    <Pressable onPress={()=>navigation.navigate('Chat')} style={[styles.chatItem, active && styles.activeChat,style]}>
      <Text style={styles.chatText}>{title}</Text>
      <Text style={styles.dots}>⋯</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: '#F3EDFA',
      borderTopRightRadius: 24,
      borderBottomRightRadius: 24,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      paddingEnd:16,
      marginBottom:30
    },
    logo: {
      width: 100,
      height: 70,
      resizeMode: 'contain',
    },
    close: {
      fontSize: 20,
    },
    menuItem: {
      paddingHorizontal: 10,
      paddingVertical: 12,
      flexDirection:'row'
    },
    menuText: {
      fontSize: 16,
      marginStart:10,
      fontFamily:fonts.regular
    },
    section: {
      marginTop: 16,
      marginLeft: 10,
      fontFamily:fonts.bold,
      marginBottom:widgetPadding,
      color: 'rgba(33, 33, 33, 0.9)',
      fontSize:18
    },
    chatItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 14,
      marginHorizontal: 10,
      borderRadius: 12,
      marginBottom:widgetPadding/2
    },
    activeChat: {
      backgroundColor: 'rgba(239, 229, 252, 1)',
    },
    chatText: {
      fontSize: 14,
      fontFamily:fonts.regular  
    },
    dots: {
      fontSize: 18,
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderTopWidth: 1,
      borderColor: '#ddd',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    name: {
      fontWeight: '600',
    },
    email: {
      fontSize: 12,
      color: '#666',
    },
  });
  
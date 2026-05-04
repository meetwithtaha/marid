import React, { useState, useRef } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, commonStyles, fonts, fontSize } from '../../utils';
import { Button, Spacer, TextView } from '../../components';
import images from '../../utils/images';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { chatModule, serviceSub, widgetPadding } from '../../utils/constants';
import HomeHeader from '../../components/common/Header';

const Chat = ({ navigation }: any) => {
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I help you today?', sender: 'bot' },
  ]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const toggleService = (title: string) => {
    setSelectedServices(
      prev =>
        prev.includes(title)
          ? prev.filter(item => item !== title) // remove if already selected
          : [...prev, title], // add if not selected
    );
  };

  const renderItem = ({ item }: any) => {
    const isSelected = selectedServices.includes(item.title.trim());

    return (
      <TouchableOpacity
        onPress={() => toggleService(item.title.trim())}
        key={item.title}
        style={styles.item}
      >
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => toggleService(item.title.trim())}
          style={[
            styles.checkbox,
            isSelected && {
              backgroundColor: colors.green,
              borderColor: colors.green,
            },
          ]}
        >
          <Image style={styles.tick} source={images.tick} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  // const sendMessage = async () => {
  //     if (!input.trim()) return;

  //     const newMessages = [...messages, { text: input, sender: 'user' }];
  //     setMessages(newMessages);
  //     setInput('');

  //     try {
  //         const response = await axios.post(
  //             'https://api.openai.com/v1/chat/completions',
  //             {
  //                 model: 'gpt-3.5-turbo',
  //                 messages: [
  //                     { role: "system", content: "You are a helpful assistant." },
  //                     { role: "user", content: input }
  //                 ]
  //             },
  //             {
  //                 headers: {
  //                     'Authorization': `Bearer ${API_KEY}`,
  //                     'Content-Type': 'application/json'
  //                 }
  //             }
  //         );

  //         const reply = response.data.choices[0].message.content.trim();

  //         setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
  //     } catch (error) {
  //         console.error(error);
  //         setMessages(prev => [...prev, { text: "Something went wrong. Please try again later.", sender: 'bot' }]);
  //     }

  //     setTimeout(() => {
  //         scrollViewRef.current?.scrollToEnd({ animated: true });
  //     }, 100);
  // };

  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 1 }}
      colors={colors.mainContainer}
      style={commonStyles.mainContainer}
    >
      <HomeHeader chatBot showHeadPhone showBack />

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          marginTop: Platform.OS === 'android' ? 0 : -35,
        }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 60}
        >
          <View style={styles.howWeHelp}>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingBottom: 20 }}
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}
            >
              <Image
                source={images.welcomeToMarid}
                style={styles.welcomeToMarid}
              />

              <View style={styles.selectServices}>
                <TextView
                  style={styles.whichService}
                  text={
                    'Which services would you like to avail? Please select the ones you need.'
                  }
                />
                <FlatList
                  style={{ marginVertical: 5 }}
                  data={chatModule}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  contentContainerStyle={styles.container}
                />
                {/* <Button
                                    textStyle={styles.textStyle}
                                    text={"Submit Now"} isRound customStyle={styles.btnStyle} /> */}
              </View>

              {messages.map((msg, index) => (
                <LinearGradient
                  key={index}
                  colors={['rgba(223, 223, 223, 1)', 'rgba(223, 223, 223, 1)']}
                  style={[
                    styles.chatBubbleContainer,
                    {
                      alignSelf:
                        msg.sender === 'user' ? 'flex-end' : 'flex-end',
                    },
                  ]}
                >
                  <TextView
                    style={styles.chatbubble}
                    text={
                      'Lorem ipsum dolor sit amet consectetur. Ipsum sed consectetur arcu egestas in. Eu dignissim tempus imperdiet ut. Faucibus leo dolor maecenas scelerisque odio amet bibendum viverra. Penatibus neque facilisis phasellus at. Dui pellentesque ut amet mattis mauris ultricies est neque. Fermentum non lacus donec quis. Et faucibus dui aliquet amet pellentesque sit.'
                    }
                  />
                </LinearGradient>
              ))}
            </ScrollView>
          </View>
          <View
            style={[
              styles.inputContainer,
              Platform.OS === 'android' && {
                borderTopWidth: 2,
                borderTopColor: '#f5f5f5',
                borderRightWidth: 2,
                borderRightColor: '#f5f5f5',
                borderLeftColor: '#f5f5f5',
                borderLeftWidth: 2,
              },
            ]}
          >
            <Image style={commonStyles.image2} source={images.plus} />
            <View style={styles.textInput}>
              <Image style={commonStyles.image2} source={images.emoji} />
              <TextInput
                style={styles.input}
                placeholder="Type your message..."
                value={input}
                onChangeText={setInput}
                placeholderTextColor={colors.placeholder}
                returnKeyType="send"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
};

export default Chat;

const styles = StyleSheet.create({
  howWeHelp: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignSelf: 'center',
    width: '100%',
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
  },
  chatMsg: {
    color: colors.textBlack,
    fontFamily: fonts.medium,
    fontSize: fontSize.large,
    marginLeft: widgetPadding,
  },
  chatBubbleContainer: {
    borderRadius: 10,
    borderTopColor: colors.borderColor,
    borderRightColor: colors.borderColor,
    borderLeftColor: colors.borderColor,
    borderWidth: 1,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderColor,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: widgetPadding / 1.5,
    maxWidth: '80%',
  },
  chatbubble: {
    fontFamily: fonts.regular,
    color: colors.textBlack,
    alignSelf: 'center',
    paddingVertical: 13,
    fontSize: fontSize.semiSmall,
    marginTop: -2,
    paddingHorizontal: 10,
  },
  separator: {
    backgroundColor: colors.borderColor,
    height: 1,
    width: '100%',
    marginVertical: 15,
  },
  inputContainer: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    width: '100%',
    height: Platform.OS == 'android' ? 80 : 120,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: Platform.OS === 'android' ? 0 : widgetPadding,
  },
  textInput: {
    height: 50,
    paddingHorizontal: 10,
    borderColor: 'rgba(237, 237, 237, 1)',
    borderWidth: 1,
    marginStart: widgetPadding,
    borderRadius: 5,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: colors.textBlack,
    fontFamily: fonts.regular,
    fontSize: fontSize.semiSmall,
    marginStart: widgetPadding / 2,
  },

  selectServices: {
    backgroundColor: colors.purple,
    width: '85%',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  container: {},
  title: {
    color: colors.darkBlack,
    fontFamily: fonts.semibold,
    fontSize: fontSize.mini,
  },
  checkbox: {
    borderColor: 'rgba(174, 174, 178, 1)',
    borderWidth: 1,
    borderRadius: 2,
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tick: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  item: {
    borderRadius: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: widgetPadding / 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 6,
    alignItems: 'center',
  },
  whichService: {
    color: 'white',
    marginVertical: widgetPadding / 2,
    fontFamily: fonts.regular,
    fontSize: fontSize.small,
  },
  btnStyle: {
    backgroundColor: 'white',
    height: 35,
    marginBottom: widgetPadding,
    width: '100%',
  },
  textStyle: {
    color: colors.darkBlack,
    fontFamily: fonts.semibold,
    fontSize: fontSize.semiSmall,
  },
  welcomeToMarid: {
    alignSelf: 'center',
    width: 300,
    height: 180,
    marginBottom: widgetPadding,
    resizeMode: 'contain',
  },
});

import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {colors} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

/**
 * Todo: StyleSheet
 */
function numberOfUnread(number){
  
  return parseInt(number) > 99 ? '99+' : parseInt(number) > 9 ? number : ` ${number} ` 
}

function ChatItem(props) {
  const {user, onPress} = props;
  const {name, url, message, numberOfUnreadMessage} = user;
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <View
          style={{
            paddingTop: 20,
            paddingStart: 10,
            flexDirection: 'row',
          }}>
          <View>
          <Image
            source={{
              uri: url,
            }}
            style={{
              width: 56,
              height: 56,
              borderRadius: 56,
              resizeMode: 'cover',
              alignSelf: 'center',
            }}/>
            <Text style={{
              backgroundColor: 'red',
              // width: 24,
              fontWeight: 'bold',
              position: 'absolute',
              right: 4,
              borderRadius: 20,
              padding: 3,
              fontSize: 12,
              color: 'white'
            }} >{ numberOfUnread(user.numberOfUnreadMessage) }</Text>
          </View>
          <Text style={{
            color: 'black',
            fontSize: 14,
            fontWeight: 'bold',
            marginStart: 16
          }} >{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ChatItem;

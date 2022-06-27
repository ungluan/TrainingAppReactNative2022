import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {UiHeader} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ChatItem from './ChatItem';

function Chat(props) {
  const [users, setUsers] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      name: 'Amanda Weler',
      message: 'Hello, how are you?',
      numberOfUnreadMessage: 3
    },
    {
      url: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Alamenda',
      message: 'Heyzo alo Are you ready.',
      numberOfUnreadMessage: 20
    },
    {
      url: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Bariablo',
      message:
        'You should refer to that book, if you need further information to this subject.',
        numberOfUnreadMessage: 80,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Deft',
      message:
        'You should refer to that book, if you need further information to this subject.',
        numberOfUnreadMessage: 101
    },
  ]);
  const {navigation} = props
  return (
    <SafeAreaView style={{flex: 1}}>
      <UiHeader
        title={'Chat Screen'}
        leftIconName={'arrow-left'}
        rightIconName={'search'}
        onPressLeftIcon={() => {
          alert('Left');
        }}
        onPressRightIcon={() => {
          alert('right');
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 16,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
          }}>
          6 unread message
        </Text>
        <Icon name={'search'} size={16} color={'black'} />
      </View>
      <View
        style={{
          flex: 1,
        }}>
            <FlatList 
                keyExtractor={item => item.url}
                data = {users}
                renderItem={({item})=> <ChatItem
                    user={item}
                    onPress={()=>{
                        navigation.navigate('Messenger',{user: item})
                    }}
                /> }
            />
        </View>
    </SafeAreaView>
  );
}

export default Chat;

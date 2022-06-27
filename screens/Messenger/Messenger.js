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
  SafeAreaView
} from 'react-native';
import {colors} from '../../constants';
import {UiHeader} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MessengerItem from './MessengerItem'

// import React, {useState, useEffect} from 'react';
// import {
//   Text,
//   View,

function Messenger(props) {
  const [messages, setMessages] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      name: 'Amanda Weler',
      message: 'Hello, how are you?',
      numberOfUnreadMessage: 3,
    },
  ]);
  const {navigate, goBack} = props.navigation
  const {user} = props.route.params
  // console.log(props.route)
  // console.log()
  // console.log(props.route.params.user)
  return (
    <SafeAreaView style={{flex: 1}}>
      <UiHeader
        title={user.name}
        leftIconName={'arrow-left'}
        rightIconName={'menu'}
        onPressLeftIcon={goBack()}
        onPressRightIcon={() => {
          alert('right');
        }}
      />
    </SafeAreaView>
  );
}

export default Messenger;

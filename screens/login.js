import React, {setState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Login(props) {
  // States for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  // States to store email/password
  const [email, setEmail] = userState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View
          style={{
            height: '100%',
            paddingStart: 16,
            paddingEnd: 16,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              flex: 30,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 22,
                fontWeight: 'bold',
                width: '30%',
              }}>
              Already have an Account?
            </Text>
            <Image
              source={require('../assets/image_01.jpg')}
              style={{
                width: 200,
                height: 200,
                borderRadius: 75,
              }}
              resizeMode={'cover'}
            />
          </View>

          <View style={{flex: 30, justifyContent: 'center'}}>
            <Text style={{color: '#3949ab', fontWeight: 'bold'}}>Email:</Text>
            <TextInput
              onChangeText={text => {
                setEmail(text);
              }}
              placeholder="example@gmail.com"
              style={{
                color: 'black',
              }}
            />

            <Text style={{color: '#3949ab', fontWeight: 'bold'}}>
              Password:
            </Text>
            <TextInput
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
          </View>

          <View flexDirection="column" style={{flex: 20, alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#3949ab',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 12,
                height: 45,
                width: '50%',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>

            <View flexDirection="row" style={{marginTop: 16}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                }}>
                Haven't account?{' '}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#3949ab',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Register Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flex: 20}}>
            <View flexDirection="row" alignItems="center">
              <View
                style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  margin: 16,
                }}>
                Use other methods
              </Text>
              <View
                style={{height: 1, backgroundColor: 'black', flex: 1}}></View>
            </View>

            <View flexDirection="row" justifyContent="center">
              <Icon name="facebook" size={42} color={'blue'} />
              <View style={{width: 16}} />
              <Icon name="google-plus-g" size={42} color={'red'} />
            </View>
          </View>
          <TouchableOpacity onChangeText={} ></TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Login;

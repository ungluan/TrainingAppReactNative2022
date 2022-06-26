import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, Button, View, Image} from 'react-native';
import {
  user as UserRepository,
  population as PopulationRepository,
} from '../repositories';
import {images, colors, icons, fontsize} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {convertDateTimeToString} from '../utilies/DateTime';
function Profile(props) {
  // UserRepository.getUserDetail();
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    UserRepository.getUserDetail().then(responseUser => setUser(responseUser));
  }, []);
  const {
    dateOfBirth,
    email,
    gender,
    userId,
    address,
    phone,
    username,
    registeredDate,
    url
  } = user;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 16
      }}>
      { user != {} && <View> 
      <Image source={{
        uri: url
      }} style={{
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginVertical: 32
      }} />
      <MyText title={'Username'} content={username} />
      <MyText title={'Email'} content={email} />
      <MyText title={'Gender'} content={gender} />
      <MyText title={'Address'} content={address} />
      <MyText title={'User Id'} content={userId == 'null' ? 'No_ID' : userId} />
      <MyText title={'Birth date'} content={convertDateTimeToString(dateOfBirth)} />
      <MyText title={'Phone'} content={phone} />
      
      </View>}

    </SafeAreaView>
  );
}
function MyText(props){
  const {title, content} = props
  return <View style={{
    flexDirection: 'row',
    alignItems: 'baseline'
  }} >
    <Text style={{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black'
    }} >{title}: </Text>
    <Text>{content}</Text>
  </View>
}

export default Profile;

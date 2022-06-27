import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {images, icons, fontsize, colors} from '../../constants';
import {MyButton} from '../../components';
// import stylesWelcome from './styles';

const Welcome = props => {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Business',
      isSelected: false,
    },
    {
      name: 'Individual',
      isSelected: false,
    },
  ]);
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={stylesWelcome.titleAppBar}>
          <Image source={icons.fire} style={stylesWelcome.icon} />
          <Text style={{color: 'black'}}>HITACHIVANTARA.CO</Text>
          <View style={{flex: 1}} />
          <Image source={icons.question} style={stylesWelcome.icon} />
        </View>
        <View
          style={{
            flex: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={stylesWelcome.title}>Welcome to</Text>
          <Text style={stylesWelcome.titleCompany}>HITACHIVANTARA.CO</Text>
          <Text style={stylesWelcome.title}>
            Please select your account type
          </Text>
        </View>
        <View style={{flex: 40}}>
          {accountTypes.map(account => (
            <MyButton
              key={account.name}
              onPressed={() => {
                let newAccountType = accountTypes.map(item => {
                  return {
                    ...item,
                    isSelected: item.name == account.name,
                  };
                });
                setAccountTypes(newAccountType);
              }}
              title={account.name}
              isSelected={account.isSelected}
            />
          ))}
        </View>
        <View style={{flex: 20}}>
          <MyButton
            onPressed={() => {
              navigate('Login');
            }}
            title={'Login'}
            isSelected={false}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const stylesWelcome = StyleSheet.create({
  title: {
    color: colors.inactive,
    fontSize: fontsize.h6,
  },
  titleAppBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 20,
    paddingTop: 16,
  },
  titleCompany: {
    color: 'black',
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 16,
  },
});
export default Welcome;

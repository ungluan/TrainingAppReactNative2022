import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {colors} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function FiveStars(props) {
  const {numberOfStars} = props;
  return (
    <View style={{flexDirection: 'row'}}>
      {[0, 1, 2, 3, 4].map(item => (
        <Icon
          key={item}
          name={'star'}
          style={{marginEnd: 1}}
          size={14}
          color={item < numberOfStars ? colors.warning : colors.inactive}
        />
      ))}
    </View>
  );
}
export default FiveStars;

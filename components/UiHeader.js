import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function UiHeader(props) {
  const {
    title,
    leftIconName,
    rightIconName,
    onPressLeftIcon,
    onPressRightIcon,
    isEnableLeft,
    isEnableRight,
  } = props;
  return (
    <View
      style={{
        height: 55,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        flexDirection: 'row',
      }}>
      {leftIconName != undefined ? (
        <Icon
          name={leftIconName}
          size={24}
          color={'white'}
          onPress={onPressLeftIcon}
        />
      ) : (
        <View
          style={{
            width: 50,
            height: 50,
          }}
        />
      )}
      <Text
        style={{
          fontSize: 18,
          // justifyContent:'center',
          // alignItems: 'center',
          color: 'white',
        }}>
        {title}
      </Text>
      {rightIconName != undefined ? (
        <Icon
          name={rightIconName}
          size={24}
          color={'white'}
          onPress={onPressRightIcon}
        />
      ) : (
        <View
          style={{
            width: 50,
            height: 50,
          }}
        />
      )}
    </View>
  );
}

export default UiHeader;

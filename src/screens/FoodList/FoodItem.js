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

function FoodItem(props) {
  const {food, onPress} = props;
//   const {socialNetworks} = props.food
    function _getColorFromStatus(status){
        if(status.toLowerCase().trim() == 'opening now')
            return colors.success
        else if(status.toLowerCase().trim() == 'closing soon')
            return colors.alert
        return colors.warning
    }
  return (
    <TouchableOpacity onPress={onPress} >
        <View>
      <View
        style={{
          paddingTop: 20,
          paddingStart: 10,
          flexDirection: 'row',
        }}>
        <Image
          source={{
            uri: food.url,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 12,
            resizeMode: 'cover',
            alignSelf : 'center'
          }}
        />
        <View
          style={{
            flex: 1,
            marginHorizontal: 16,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: 'black',
            }}>
            {food.name}
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: 'black',
            }}
          />
          <View flexDirection={'row'}>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
              }}>
              Status:
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                color: _getColorFromStatus(food.status),
              }}>
              {' '}
              {food.status.toUpperCase()}
            </Text>
          </View>

          <View flexDirection={'row'}>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
              }}>
              Price:
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
              }}>
              {' '}
              {food.price}
            </Text>
          </View>

          <View flexDirection={'row'}>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
              }}>
              Food type:
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
              }}>
              {' '}
              Polish Foods
            </Text>
          </View>

          <View flexDirection={'row'}>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
              }}>
              Website:
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
              }}>
              {' '}
              {food.website}
            </Text>
          </View>
          <View flexDirection={'row'}>
            { food.socialNetworks['facebook'] != undefined && 
            <Icon
              name={'facebook'}
              size={18}
              color={colors.inactive}
              style={{paddingEnd: 8}}
            />}
            { food.socialNetworks['instagram'] != undefined &&
            <Icon
              name={'instagram'}
              size={18}
              color={colors.inactive}
              style={{paddingEnd: 8}}
            />}
            {
                food.socialNetworks['twitter'] != undefined &&
                <Icon name={'twitter'} size={18} colors={colors.inactive} />
            }
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

export default FoodItem;
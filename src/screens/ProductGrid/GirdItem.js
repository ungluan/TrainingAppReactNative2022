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
  ScrollView,
  FlatList,
} from 'react-native';
import FiveStars from './FiveStars';
import {colors} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function GridItem(props) {
  const {item, index, onPress} = props;

  return (
    <View
      style={{
        // height: 256,
        width: '49%',
        justifyContent: 'flex-start',
        marginStart: index % 2 == 0 ? 0 : 4,
        marginEnd: index % 2 == 0 ? 4 : 0,
        marginVertical: 4,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: colors.inactive,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={{
            uri: item.url,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 12,
            resizeMode: 'cover',
            alignSelf: 'center',
            borderRadius: 20,
            marginHorizontal: 8,
            marginTop: 8,
            marginBottom: 4,
          }}
        />
        <Text
          style={{
            textAlign: 'right',
            // alignItem: 'flex-end',
            color: 'black',
            fontSize: 18,
            marginTop: 16,
            marginEnd: 8,
            flex: 1,
            // backgroundColor: 'red'
          }}>
          {item.price}$
        </Text>
      </View>
      <Text
        style={{
          // backgroundColor:'red',
          paddingHorizontal: 8,
          fontSize: 16,
          color: colors.primary,
          fontWeight: 'bold',
        }}>
        {item.productName}
      </Text>
      <View
        style={{
          marginHorizontal: 8,
        }}>
        {item.specifications.map(specification => (
          <Text
            style={{
              color: 'black',
              paddingVertical: 4,
            }}
            key={specification}>
            * {specification}
          </Text>
        ))}
      </View>
      <View style={{flexDirection: 'row', padding: 8}}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItem: 'center',
          }}>
          <Icon
            name={'heart'}
            size={24}
            color={
              item.isSaved == undefined || item.isSaved == false
                ? colors.inactive
                : 'red'
            }
          />
          <Text
            style={{
              marginLeft: 6,
              width: 50,
              fontSize: 12,
              color:
                item.isSaved == undefined || item.isSaved == false
                  ? colors.inactive
                  : 'red',
              fontWeight: 'bold',
            }}>
            Saved for later
          </Text>
        </TouchableOpacity>
        <View>
          <FiveStars numberOfStars={item.stars} />
          <Text
            style={{
              fontSize: 12,
              alignSelf: 'center',
              color: 'green',
            }}>
            {item.reviews} reviews
          </Text>
        </View>
      </View>
    </View>
  );
}

export default GridItem;

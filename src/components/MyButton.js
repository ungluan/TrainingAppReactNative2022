import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function MyButton(props) {
  const {onPressed, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPressed}
      style={{
        borderColor: '#ED6263',
        backgroundColor: isSelected == true ? 'white' : '#ED6263',
        borderWidth: 2,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 24,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isSelected == true && (
        <Icon
          name={'check-circle'}
          size={24}
          style={{
            color: 'green',
            position: 'absolute',
            left: 8,
            top: 8,
          }}
        />
      )}

      <Text
        style={{
          color: isSelected == true ? '#ED6263' : 'white',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default MyButton;

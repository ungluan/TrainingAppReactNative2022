import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import {sum2Number, sub2Number, PI} from '../utilies/Calculation';
import {images, icons} from '../constants';
import {MyButton} from '../components';

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
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flex: 20,
            paddingTop: 16,
          }}>
          <Image
            source={icons.fire}
            style={{
              width: 30,
              height: 30,
              marginStart: 10,
              marginEnd: 5,
            }}
          />
          <Text
            style={{
              color: 'black',
            }}>
            HITACHIVANTARA.CO
          </Text>
          <View style={{flex: 1}} />
          <Image
            source={icons.question}
            style={{
              width: 30,
              height: 30,
              marginEnd: 10,
            }}
          />
        </View>
        <View
          style={{
            flex: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 12}}>Welcome to</Text>
          <Text style={{fontWeight: 'bold'}}>HITACHIVANTARA.CO</Text>
          <Text style={{fontSize: 12}}>Please select your account type</Text>
        </View>
        <View
          style={{
            flex: 40,
          }}>
          {accountTypes.map(account => 
            <MyButton
              onPressed={() => {
                account.isSelected = !account.isSelected;
                alert(account.name)
              }}
              title={account.name}
              isSelected={account.isSelected}
            />
          )}

          {/* <MyButton onPressed={()=>{
            alert('Influencer Clicked')
          }} title={'Influencer'} isSelected={true} />
          <MyButton  onPressed={()=>{
            alert('Business Clicked')
          }} title={'Business'} isSelected={false} />
          <MyButton  onPressed={()=>{
            alert('Individual Clicked')
          }} title={'Individual'} isSelected={false} /> */}
        </View>
        <View
          style={{
            flex: 20,
          }}></View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
/*
function WelcomeScreen(props) {
    return <Text> This is Main Screen </Text>
}
*/

// const WelcomeScreen = (props) =>{
//     // destructuring an object
//     const {x,y} = props
//     const {person} = props
//     const {name, age, email} = person
//     const {products} = props
//     // debugger

//     // const {name, ema}
//     // const => let => var
//     return <View style = {{
//         backgroundColor : 'white',
//     }} >
//         <Text> X = {x}, Y = {y} </Text>
//         <Text> {name}, {age}, {email} </Text>
//         {/* <Text>{JSON.stringify(products)}</Text> */}
//         {products.map(eachProduct =>
//             <Text> {eachProduct.productName}, {eachProduct.year} </Text>
//         )}
//         <Text>sum 2 and 3 = {sum2Number(2,3)}</Text>
//         <Text>sub 2 and 3 = {sub2Number(2,3)}</Text>
//         <Text>PI = {PI}</Text>

//     </View>
// }

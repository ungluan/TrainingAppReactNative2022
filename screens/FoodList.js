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

function FoodList(props) {
  const [foods, setFoods] = useState([
    {
      name: 'Pierogi',
      status: 'Coming soon',
      price: 5234.4,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/pierogi.jpg',
    },
    {
      name: 'Golabki / Gołąbki – Cabbage Rolls',
      status: 'Opening now',
      price: 2312.4,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/pierogi.jpg',
    },
    {
      name: 'Bigos',
      status: 'Opening now',
      price: 1232.4,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/bigos1.jpg',
    },
    {
      name: 'Kotlet Schabowy',
      status: 'Opening now',
      price: 7265.42,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/schabowy.jpg',
    },
    {
      name: 'Kotlet Mielony',
      status: 'Opening now',
      price: 8263.42,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/mielone.jpg',
    },
    {
      name: 'Gulasz',
      status: 'Coming now',
      price: 223.42,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/goulash-3773134_1280.jpg',
    },
    {
      name: 'Kluski Slaskie / śląskie',
      status: 'Opening now',
      price: 1233.42,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/slaskie.jpg',
    },
    {
      name: 'Pyzy & Knedle',
      status: 'Opening now',
      price: 972.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/slaskie.jpg',
    },
    {
      name: 'Leniwe – Lazy Pierogi',
      status: 'Opening now',
      price: 682.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://i1.wp.com/www.acoalcrackerinthekitchen.com/wp-content/uploads/2019/09/lenwie-pierogi.jpg?fit=750%2C382&ssl=1',
    },
    {
      name: 'Placki Ziemniaczane – Potato Pancakes',
      status: 'Opening now',
      price: 723.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://i1.wp.com/www.acoalcrackerinthekitchen.com/wp-content/uploads/2019/09/lenwie-pierogi.jpg?fit=750%2C382&ssl=1',
    },
    {
      name: 'Golonka Gotowana – Pork Hock',
      status: 'Opening now',
      price: 382.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2017/09/SDC10800.jpg',
    },
    {
      name: 'Zrazy',
      status: 'Opening now',
      price: 372.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/zrazy.jpg',
    },
    {
      name: 'Ryba po Grecku',
      status: 'Coming now',
      price: 862.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/ryba_po_grecku_01.jpg',
    },
    {
      name: 'Fasolka po Bretońsku',
      status: 'Coming now',
      price: 564.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2020/12/DSC01091-1200x800.jpg',
    },
    {
      name: 'Ryz z Jablkami / Ryż z Jabłkami – Rice with Apples',
      status: 'Coming now',
      price: 352.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://polki.pl/foto/16_9_LARGE_0200/ryz-z-jablkami-2442746.jpg',
    },
    {
      name: 'Zurek / żurek',
      status: 'Coming now',
      price: 232.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annainthekitchen.com/wp-content/uploads/2021/06/red-borsch.jpg',
    },
    {
      name: 'Oscypek & Bryndza Cheeses',
      status: 'Coming now',
      price: 764.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/zurek.jpg',
    },
    {
      name: 'Wild Mushrooms',
      status: 'Coming now',
      price: 764.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2014/09/IMG_9055-1200x800.jpg',
    },
    {
      name: 'Famous Polish Desserts',
      status: 'Coming now',
      price: 424.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/OceanBlueProject',
          twitter: 'https://twitter.com/All',
          instagram: 'https://www.instagram.com/somin_jj/',
        },
      ],
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/donuts-690281_1280.jpg',
    },
  ]);
  return (
    <View>
      <View
        style={{
          height: 150,
          backgroundColor: 'red',
          paddingTop: 20,
          paddingStart: 10,
          flexDirection: 'row',
        }}>
            <Image source={{
                uri: 'https://annaeverywhere.com/wp-content/uploads/2019/08/donuts-690281_1280.jpg'
            }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 12,
                resizeMode: 'cover',
                // justifyContent: 'center',
                // alignItems: 'center'
            }}
            >

            </Image>
        </View>
    </View>
  );
}

export default FoodList;

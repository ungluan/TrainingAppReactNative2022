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
import {colors} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FoodItem from './FoodItem';

function FoodList(props) {
  const [foods, setFoods] = useState([
    {
      name: 'Pierogi',
      status: 'Coming soon',
      price: 5234.4,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/All',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/pierogi.jpg',
    },
    {
      name: 'Golabki / Gołąbki – Cabbage Rolls',
      status: 'Opening now',
      price: 2312.4,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/OceanBlueProject',
        twitter: 'https://twitter.com/All',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/golabki.jpg',
    },
    {
      name: 'Bigos',
      status: 'Opening now',
      price: 1232.4,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/OceanBlueProject',
        twitter: 'https://twitter.com/All',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/bigos1.jpg',
    },
    {
      name: 'Kotlet Schabowy',
      status: 'Opening now',
      price: 7265.42,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/OceanBlueProject',
        twitter: 'https://twitter.com/All',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/schabowy.jpg',
    },
    {
      name: 'Kotlet Mielony',
      status: 'Coming soon',
      price: 8263.42,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/OceanBlueProject',
        twitter: 'https://twitter.com/All',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/mielone.jpg',
    },
    {
      name: 'Gulasz',
      status: 'Coming soon',
      price: 223.42,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/OceanBlueProject',
        twitter: 'https://twitter.com/All',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/goulash-3773134_1280.jpg',
    },
    {
      name: 'Kluski Slaskie / śląskie',
      status: 'Opening now',
      price: 1233.42,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {instagram: 'https://www.instagram.com/somin_jj/'},
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/slaskie.jpg',
    },
    {
      name: 'Pyzy & Knedle',
      status: 'Coming soon',
      price: 972.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/OceanBlueProject',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/polish-dishes.jpg',
    },
    {
      name: 'Leniwe – Lazy Pierogi',
      status: 'Opening now',
      price: 682.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {twitter: 'https://twitter.com/All'},
      url: 'https://i1.wp.com/www.acoalcrackerinthekitchen.com/wp-content/uploads/2019/09/lenwie-pierogi.jpg?fit=750%2C382&ssl=1',
    },
    {
      name: 'Placki Ziemniaczane – Potato Pancakes',
      status: 'Coming soon',
      price: 723.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        twitter: 'https://twitter.com/All',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/IMG_5526.jpg',
    },
    {
      name: 'Golonka Gotowana – Pork Hock',
      status: 'Opening now',
      price: 382.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/OceanBlueProject',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2017/09/SDC10800.jpg',
    },
    {
      name: 'Zrazy',
      status: 'Opening now',
      price: 372.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {instagram: 'https://www.instagram.com/somin_jj/'},
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/zrazy.jpg',
    },
    {
      name: 'Ryba po Grecku',
      status: 'Closing soon',
      price: 862.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {instagram: 'https://www.instagram.com/somin_jj/'},
      url: 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/ryba_po_grecku_01.jpg',
    },
    {
      name: 'Fasolka po Bretońsku',
      status: 'Closing soon',
      price: 564.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/OceanBlueProject',
        twitter: 'https://twitter.com/All',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2020/12/DSC01091-1200x800.jpg',
    },
    {
      name: 'Ryz z Jablkami / Ryż z Jabłkami – Rice with Apples',
      status: 'Coming soon',
      price: 352.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        facebook: 'https://www.facebook.com/OceanBlueProject',
        twitter: 'https://twitter.com/All',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://polki.pl/foto/16_9_LARGE_0200/ryz-z-jablkami-2442746.jpg',
    },
    {
      name: 'Zurek / żurek',
      status: 'Closing soon',
      price: 232.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {facebook: 'https://www.facebook.com/OceanBlueProject'},
      url: 'https://annainthekitchen.com/wp-content/uploads/2021/06/red-borsch.jpg',
    },
    {
      name: 'Oscypek & Bryndza Cheeses',
      status: 'Coming soon',
      price: 764.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {twitter: 'https://twitter.com/All'},
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/zurek.jpg',
    },
    {
      name: 'Wild Mushrooms',
      status: 'Opening now',
      price: 764.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {instagram: 'https://www.instagram.com/somin_jj/'},
      url: 'https://annaeverywhere.com/wp-content/uploads/2014/09/IMG_9055-1200x800.jpg',
    },
    {
      name: 'Famous Polish Desserts',
      status: 'Coming now',
      price: 424.83,
      website: 'https://annaeverywhere.com/traditional-polish-food/',
      socialNetworks: {
        twitter: 'https://twitter.com/All',
        instagram: 'https://www.instagram.com/somin_jj/',
      },
      url: 'https://annaeverywhere.com/wp-content/uploads/2019/08/donuts-690281_1280.jpg',
    },
  ]);
  const [categories, setCategories] = useState([
    {
      name: 'BBQ',
      url: 'https://cdn.tgdd.vn/2021/03/CookProductThumb/Bbq-la-gi-nguon-goc-va-cac-cach-tu-lam-bbq-tai-nha-vo-cung-don-gian-0b-620x620.jpg',
    },
    {
      name: 'Breakfast',
      url: 'https://www.7-eleven.com.ph/wp-content/uploads/2016/08/Corn-Beef23450.jpg',
    },
    {
      name: 'Coffee',
      url: 'https://product.hstatic.net/1000075078/product/ca-phe-sua-nong_0beecc27870549a5bf016dc6a8fac60e_large.jpg',
    },

    {
      name: 'Noddle',
      url: 'https://thumbs.dreamstime.com/b/fried-noddle-bowl-ingredients-35848810.jpg',
    },
    {
      name: 'Hot dogs',
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Mmm..._sometimes_I_just_want_yellow_mustard._Sue_me._%285914352808%29.jpg',
    },
    {
      name: 'Dinner',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/high-protein-dinners-slow-cooker-meatballs-image-5a04d02.jpg?quality=90&resize=500,454',
    },
    {
      name: 'Beverages',
      url: 'https://i2.wp.com/media.premiumtimesng.com/wp-content/files/2022/01/Mashed.jpg?fit=1600%2C900&ssl=1',
    },
    {
      name: 'Desserts',
      url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg',
    },
    {
      name: 'Wines',
      url: 'https://www.phanphoiruoungoai.net/wp-content/uploads/2020/10/tim-hieu-cac-loai-ruou-vang-full-bodied-red-wine.jpg',
    },
    {
      name: 'Barbecues',
      url: 'https://idvielts.com/wp-content/uploads/2021/05/ielts-speaking-barbecues.jpg',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const filteredFoods = () =>
    foods.filter(food =>
      food.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 60,
          // justifyContent: 'center',
          marginHorizontal: 16,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          style={{
            position: 'absolute',
            top: 22,
            start: 14,
          }}
          name="search"
          size={16}
        />
        <TextInput
          placeholder={'Search foods'}
          onChangeText={text => setSearchText(text)}
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 12,
            height: 45,
            color: 'black',
            paddingLeft: 34,
          }}
        />
        <Icon name="award" size={22} style={{marginStart: 8}} />
      </View>

      <View style={{height: 100}}>
        <View style={{height: 1, backgroundColor: 'black'}} />
        <View style={{flex: 1}}>
          <FlatList
            horizontal={true}
            style={{flex: 1}}
            data={categories}
            keyExtractor={category => category.name}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    alert('Pressed ' + item.name);
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image
                      source={{uri: item.url}}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        marginHorizontal: 8,
                      }}
                    />
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12,
                        alignSelf: 'center',
                        marginTop: 2,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{height: 1, backgroundColor: 'black'}} />
      </View>

      {filteredFoods().length > 0 ? (
        <FlatList
          data={filteredFoods()}
          renderItem={({item}) => (
            <FoodItem
              onPress={() => {
                alert(item.name);
              }}
              key={item.name}
              food={item}
            />
          )}
          keyExtractor={food => food.name}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
            }}>
            No food found.
          </Text>
        </View>
      )}
    </View>
  );
}

export default FoodList;

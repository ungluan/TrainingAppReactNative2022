/**
 * yarn add react-native-navigation
 * yarn add react-native-safe-area-context
 * yarn add @react-navigation/bottom-tabs
 * yarn add @react-navigation/native
 * yarn add @react-navigation/native-stack
 */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StackRouter} from 'react-navigation';
import {fontSize, colors} from '../constants';
import {View, Text, SafeAreaView} from 'react-native';
import {Welcome, Login, FoodList, ProductGirdView} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: colors.inactive,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.primary,
  tabBarBackground: () => (
    <View style={{backgroundColor: colors.primary, flex: 1}} />
  ),
  tabBarIcon: ({focused, color, size}) => {
    let screenName = route.name;
    let iconName = screenName == 'FoodList' ? 'bacon' : 'broom';
    return (
      <Icon
        name={iconName}
        size={18}
        color={focused ? 'white' : colors.inactive}
      />
    );
  },
});
function UITab(props) {
  return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name={'FoodList'}
          component={FoodList}
          options={{
            tabBarLabel: 'Food',
            tabBarLabelStyle: {
                fontSize: 14
            }
          }}

        />
        <Tab.Screen
          name={'ProductGirdView'}
          component={ProductGirdView}
          options={{
            tabBarLabel: 'Cleaner',
            tabBarLabelStyle: {
                fontSize: 14
            }
          }}
        />
      </Tab.Navigator>
  );
}
export default UITab;

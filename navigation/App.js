import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StackRouter} from 'react-navigation';
import {fontSize, colors} from '../constants';
import {View, Text} from 'react-native';
import {Welcome, Login, FoodList, ProductGirdView, Messenger, Chat} from '../screens';
// import 'react-native-gesture-handler';
import UITab from './UITab'

const Stack = createNativeStackNavigator()

function App(props){
    return <NavigationContainer>
        <Stack.Navigator initialRoute={'Welcome'} screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name={"Welcome"} component={Welcome} />
            <Stack.Screen name={"Login"} component={Login} />
            <Stack.Screen name={"UITab"} component={UITab} />
            <Stack.Screen name={"Chat"} component={Chat} />
            <Stack.Screen name={"Messenger"} component={Messenger} />

        </Stack.Navigator>
    </NavigationContainer>
}
export default App
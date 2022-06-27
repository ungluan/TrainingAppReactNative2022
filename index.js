/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {
    Welcome,
    HookScreen,
    Login,
    FoodList,
    ProductGirdView
} from './screens/index';
import App from './src/navigation/App'
// let fakedProducts = [
//     {
//         productName: 'iphone 3',
//         year: '2012'
//     },
//     {
//         productName: 'iphone 4',
//         year: '2012'
//     },
//     {
//         productName: 'iphone 5',
//         year: '2012'
//     },
//     {
//         productName: 'iphone 6',
//         year: '2012'
//     }
// ]

// AppRegistry.registerComponent(appName, () => () => (
//   <WelcomeScreen
//     x={5}
//     y={10}
//     person={{
//       name: 'Ung Nguyen Truong Luan',
//       age: '21',
//       email: 'ungluan@gmail.com',
//     }}
//     products={fakedProducts}
//   />
// ));

// AppRegistry.registerComponent(appName, () => ProductGirdView)
AppRegistry.registerComponent(appName, () => App)
//This is an example code for the Custom Header//
import React from 'react';
//import react in our code. 

import Home from './pages/Home';
import CategoriesMain from './pages/CategoriesMain';
import SearchMain from './pages/SearchMain';
import About from './pages/About';
//import all the screens we are going to switch 

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home, 
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" color={tintColor} style={{ marginTop: -4 }} size={25} />
            )
        }
    }, 
    Categories: {
        screen: CategoriesMain, 
        navigationOptions: {
            tabBarLabel: 'Categories', 
            tabBarIcon: ({ tintColor }) => (
                <Icon name="format-list-bulleted-type" style={{ marginTop: -4 }} color={tintColor} size={25} />
            )
        }
    },
    Search: {
        screen: SearchMain, 
        navigationOptions: {
            tabBarLabel: 'Search', 
            tabBarIcon: ({ tintColor }) => (
                <Icon name="search-web" style={{ marginTop: -4 }} color={tintColor} size={25} />
            )
        }
    },
    About: {
        screen: About, 
        navigationOptions: {
            tabBarLabel: 'About', 
            tabBarIcon: ({ tintColor }) => (
                <Icon name="information-outline" style={{ marginTop: -4 }} color={tintColor} size={25} />
            )
        }
    }
}, 
{       labeled: false,
        initialRouteName: "Home",
        barStyle: { backgroundColor: "#043149", height: 50 },
        activeColor: "#ffffff",
        inactiveColor: "#8c8c8c",
        sceneAnimationEnabled: false
}
);
 
let Navigation =  createAppContainer(TabNavigator);

export default () => {
    let theme = useColorScheme();
  
    return (
      <AppearanceProvider>
        <Navigation theme={theme} />
      </AppearanceProvider>
    )
  }

import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Search from './Search';
import SearchResults from './SearchResults';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const AppNavigator = createStackNavigator({
  Search: {
    screen: Search
  },
  SearchResults: {
    screen: SearchResults
  }
},
{
  initialRouteName: "Search"
}
);

let Navigation = createAppContainer(AppNavigator);

export default function SearchMain() {
  let theme = useColorScheme();

  return (
    <AppearanceProvider>
      <Navigation theme={theme} />
    </AppearanceProvider>
  )
}

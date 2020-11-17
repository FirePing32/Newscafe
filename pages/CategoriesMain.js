import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Categories from './Categories';
import CategoriesResult from './CategoriesResult';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const AppNavigator = createStackNavigator({
  Categories: {
    screen: Categories
  },
  CategoriesResult: {
    screen: CategoriesResult
  }
},
{
  initialRouteName: "Categories"
}
);

let Navigation = createAppContainer(AppNavigator);

export default function CategoriesMain() {
  let theme = useColorScheme();

  return (
    <AppearanceProvider>
      <Navigation theme={theme} />
    </AppearanceProvider>
  )
}


{/*
export default class Categories extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
/>
      </View>
    )
  }
}
*/}
{/*
export default class Categories extends React.Component {
    render() {
        return (
          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CategoriesName', { category: "sports" }) }>
            <Card
            containerStyle={styles.boxCon}
            image={{
              uri: "./../assets/images/sports.svg"
            }}
            imageStyle={{ borderTopLeftRadius: 12.5, borderTopRightRadius: 12.5, overflow: "hidden" }}
          >
            <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold", color: "black" }}>
              Sports
            </Text>
          </Card>
          </TouchableOpacity>
        )
    }
}
*/}
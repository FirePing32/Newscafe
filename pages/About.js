import React from 'react';
import {Linking, View, Text} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ThemeContext } from 'react-navigation';

export default class About extends React.Component {

  static contextType = ThemeContext;

    render() {

      const theme = this.context;

        return(
          <View style={{ backgroundColor: theme === 'dark' ? '#151E29' : '#fff', width: '100%', height: '100%' }} >
    <Card style={{ backgroundColor: theme === 'dark' ? '#1B2737' : '#fff', marginTop: '15%', marginBottom: '15%', marginRight: '15%', marginLeft: '15%', justifyContent: "center", alignSelf: "center", flex: 1, borderColor: '#FFFFFF', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5, borderRadius: 12.5 }}>
  <CardImage 
    source={{uri: 'https://avatars3.githubusercontent.com/u/43035576?s=460&u=737270859480ae531733a0d05b5b6c0f23f53686&v=4'}} 
    resizeMode="cover"
  />
  
  <CardContent>
    <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center", flex: 1, flexDirection: "column" }}>
  <View style={{ alignSelf: "center", justifyContent: "center", marginBottom: 30 }}>
    <Text style={{ color: theme === 'light' ? '#000' : '#fff', textAlign: "center", fontSize: 22.5 }}>Prakhar Gurunani</Text>
    <Text style={{ color: "grey", textAlign: "center", fontSize: 15 }}>Developer, Newscafe</Text>
    </View>
    <View style={{ alignSelf: "center", justifyContent: "center" }}>
      <Text style={{ color: "grey" }}>Proudly Made In India 🇮🇳</Text>
    </View>
  </View>
  </CardContent>
  <CardAction 
    separator={true} 
    inColumn={false}>
  <View style={{ justifyContent: "center", alignSelf: "center", flex: 1, flexDirection: "row" }}>
  <Icon name="web" style={{ margin: 15, color: theme === 'dark' ? 'white' : 'blue' }} size={25} onPress={() => Linking.openURL("https://www.prakhargurunani.com")}/>
  <Icon name="twitter" style={{ margin: 15, color: theme === 'dark' ? 'white' : 'blue' }} size={25} onPress={() => Linking.openURL("https://twitter.com/PrakharGurunani")}/>  
  <Icon name="instagram" style={{ margin: 15, color: theme === 'dark' ? 'white' : 'blue' }} size={25} onPress={() => Linking.openURL("https://www.instagram.com/prakhargurunani/")}/>
  <Icon name="youtube" style={{ margin: 15, color: theme === 'dark' ? 'white' : 'blue' }} size={25} onPress={() => Linking.openURL("https://www.youtube.com/c/PrakharGurunani")}/>
  </View>
  </CardAction>
  <CardAction 
    separator={true} 
    inColumn={false}>
    <View style={{ alignSelf: "center", alignContent: "center", alignItems: "center", justifyContent: "center", flex: 1 }}>
    <CardButton
      onPress={() => Linking.openURL("mailto:prakhargurunani@gmail.com?Subject=[BUG][NEWSCAFE]")}>
        <Text style={{ color: theme === 'dark' ? 'white' : 'blue', fontWeight: "bold", textAlign: "center" }}>REPORT BUG</Text>
    </CardButton>
    </View>
  </CardAction>
</Card>
</View>
        )
    }
}

const styles = {
    devcard: {
        marginTop: '15%',
        marginBottom: '15%',
        marginRight: '15%',
        marginLeft: '15%',
        justifyContent: "center",
        alignSelf: "center",
        flex: 1,
        borderColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 12.5
    }
}
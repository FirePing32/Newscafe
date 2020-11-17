import React from 'react';
import {Text, View, Button, TouchableOpacity, FlatList} from 'react-native';
import { Card } from 'react-native-elements';

import { ThemeContext } from 'react-navigation';

export default class Categories extends React.Component {

static contextType = ThemeContext;

render() {

  const theme = this.context;

  return (
    <FlatList
        style={{ backgroundColor: theme === 'dark' ? '#151E29' : '#fff' }}
        data={[{key: "01", name: "Sports"}, {key: "02", name: "Tech"}, {key: "03", name: "Politics"}, {key: "04", name: "JEE-NEET"}, {key: "05", name: "Bollywood"}, {key: "06", name: "International"}, {key: "07", name: "Lifestyle"}, {key: "08", name: "Gaming"}, {key: "09", name: "Business"}, {key: "10", name: "Food"}, {key: "11", name: "Automobile"}, {key: "12", name: "Health"}]}
        keyExtractor={item => item.key}
        renderItem={({item, index, separators}) => (
          <TouchableOpacity
            key={item.key}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("CategoriesResult", {category_title: item.name }) }
            >
            <Card
              containerStyle={{ backgroundColor: theme === 'dark' ? '#1B2737' : '#fff', margin: 15, marginHorizontal: 10, marginBottom: 17.5, borderColor: theme === 'dark' ? '#1B2737' : '#FFFFFF', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5, borderRadius: 12.5 }}
            >
              <Text style={{ fontSize: 17.5, fontWeight: "bold", color: "black", justifyContent: "center", textAlign: "center", color: theme === 'light' ? '#000' : '#fff' }}>
                {item.name}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
  )
  }
}

const styles = {
  boxCon: {
   margin: 15,
   marginHorizontal: 10,
   marginBottom: 17.5,
   borderColor: '#FFFFFF',
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.3,
   shadowRadius: 5,
   elevation: 5,
   borderRadius: 12.5
  }
};
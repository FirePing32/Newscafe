import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getNews } from './../src/news';
import Article from './../src/components/Article';

import { ThemeContext } from 'react-navigation';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {new_text: ""};
    }

    static contextType = ThemeContext;

    render() {  

        const theme = this.context;

        return(
            <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#151E29' : '#fff', alignItems: "center", justifyContent: "center" }}>
            <Input
                placeholder='Your keywords here...'
                placeholderTextColor="grey"
                inputStyle={{ color: theme === 'dark' ? '#fff' : '#000' }}
                inputContainerStyle={{ width: '80%', justifyContent: "center", alignSelf: "center" }}
                onChangeText={(data) => {this.state.new_text = data}}
            />
            <View style={{ justifyContent: "center", alignSelf: "center", scaleX: 1.25, scaleY: 1.25, color: theme === 'dark' ? '#1B2737' : '#fff' }}>
            <Icon name="search" onPress={() => this.props.navigation.navigate("SearchResults", {new_text: this.state.new_text})} size={15} style={{ color: theme === 'dark' ? '#fff' : '#000' }} />
            </View>
            </View>
        )
    }
}

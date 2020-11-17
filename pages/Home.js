import React from 'react';
import { FlatList, View, Text } from 'react-native';
// Import getNews from news.js
import { getNews } from './../src/news';
import Article from './../src/components/Article';
import { ThemeContext } from 'react-navigation';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    return (
      <FlatList
        style={{  backgroundColor: theme === 'dark' ? '#151E29' : '#fff' }}
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}

{/* 
  static navigationOptions = ({ navigation }) => {
    //return header with Custom View which will replace the original header 
    return {
      header: (
        <View
          style={{
            height: 55,
            marginTop: 30,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 5
            }}>
            Home
          </Text>
        </View>
      ),
    };
  };
*/}
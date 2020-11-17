import React from 'react';
import { View, Text, TouchableOpacity, Button, Card, FlatList } from 'react-native';
import { getNews } from './../src/news';
import Article from './../src/components/Article';

import { ThemeContext } from 'react-navigation';

export default class CategoriesResult extends React.Component {

  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  static contextType = ThemeContext;

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('category_title')
    };
  };

  get_custom_news = async function getNews() {
    const url = "https://newsapi.org/v2/everything?q=" + this.props.navigation.getParam("category_title") + "&apiKey=NEWS_API_KEY"
    console.log(url)
    let result = await fetch(url).then(response => response.json());
    return result.articles;
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    this.get_custom_news()
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

    render() {

      const theme = this.context;

      return (
        <FlatList
          style={{ backgroundColor: theme === 'dark' ? '#151E29' : '#fff' }}
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
      );
    }
  }
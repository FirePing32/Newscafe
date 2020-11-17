import React from 'react';
import { View, Linking, TouchableNativeFeedback, Share, Image, Button, TouchableOpacity } from 'react-native';
import { Text, Divider, Card } from 'react-native-elements';
import moment from 'moment';
import { ThemeContext } from 'react-navigation';

export default class Article extends React.Component {

  static contextType = ThemeContext;

  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
  
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    async function onShare() {
      try {
        const result = await Share.share({
          message: title + " " + url, url: url
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    }

    const theme = this.context;

    return (
    <Card
      containerStyle={{backgroundColor: theme === 'dark' ? '#1B2737' : '#fff', margin: 15, marginHorizontal: 10, marginBottom: 17.5, borderColor: theme === 'dark' ? '#1B2737' : '#FFFFFF', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5, borderRadius: 12.5}}
      image={{
        uri: urlToImage || defaultImg
      }}
      imageStyle={{ borderTopLeftRadius: 12.5, borderTopRightRadius: 12.5, overflow: "hidden" }}
    >
      <Text style={{ marginBottom: 10, fontSize: 17.5, fontWeight: "bold", color: theme === 'light' ? '#000' : '#fff' }}>
        {title}
      </Text>
      <Text style={{ marginBottom: 10, fontSize: 13.5, color: theme === 'light' ? '#000' : '#fff' }}>
        {description || 'Read More..'}
      </Text>
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Text style={styles.noteStyle}>{source.name.toUpperCase()}</Text>
        <Text style={styles.noteStyle}>{time}</Text>
      </View>
      <Divider style={{ backgroundColor: '#dfe6e9', marginBottom:5 }} />
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => Linking.openURL(url)}>
          <Image
          source={require('./../../assets/images/openlink.png')}
          style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={onShare}>
          <Image
          source={require('./../../assets/images/sharelink.png')}
          style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
      {/*
      <Button icon={{name: 'envira', type: 'font-awesome'}} size={30} title="Open" />
        <Icon raised name='fontawesome | heartbeat' type='font-awesome' color='#000000' onPress={() => Linking.openURL(url)} /> 
        <Icon raised name='md-open' type='font-awesome' color='#fff' onPress={onShare} /> 
        
        <Icon name="ios-information-circle" size={25} color="#4F8EF7"/> 
        <Icon name="md-open" type="ionicon" color="#887700" onPress={() => Linking.openURL(url)} />
      <Icon name="md-share" type="ionicon" color="#887700" onPress={onShare} />
      */}

      </View>
    </Card>    
    )
  }
}    

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 17.5,
    width: 17.5,
    resizeMode: 'contain',
    tintColor: '#696969'
  },
  BookmarkIconStyle: {
    padding: 10,
    margin: 0,
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: '#696969'
  },
  buttons: {
    margin: 18,
    borderRadius:10,
    overflow: "hidden",
    backgroundColor: "#FF0000"
  }
};

{/* <Card>
      <CardImage 
        source={{uri: urlToImage || defaultImg }} 
      />
      <CardTitle 
        title={title} 
        subtitle={source.name.toUpperCase()}
      />
      <CardContent text={description || 'Read More..'} />
      <CardAction 
        separator={true} 
        inColumn={false}>
        <CardButton
          onPress={() => Linking.openURL(url)}
          title="Open"
          color="blue"
        />
        <CardButton
          onPress={() => {}}
          title="Share"
          color="blue"
        />
      </CardAction>
    </Card>
*/}
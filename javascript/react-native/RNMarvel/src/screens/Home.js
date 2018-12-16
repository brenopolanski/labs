import React from 'react';
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native';
import md5 from 'js-md5';

const PUBLIC_KEY = '97adba13f0fd2d886e4d7c2be448d93d';
const PRIVATE_KEY = '10685e665ce74d282c177b97c1dc24cfb4fb83d1';

export default class Home extends React.PureComponent {
  static navigationOptions = {
    title: 'Heroes'
  };

  state = {
    data: []
  };

  async componentDidMount() {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`);
    const responseJson = await response.json();
    this.setState({ data: responseJson.data.results });
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this._onItemPress(item)} style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
        <Image style={{ height: 50, width: 50, borderRadius: 25 }} source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
        <Text style={{ marginLeft: 10 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  _onItemPress = (item) => {
    this.props.navigation.navigate('Description', { hero: item });
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />}
      />
    );
  }
}

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Body, Title, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import s from './weatherList.style';

const items = [
  {
    date: '11 Jan 2019',
    day: 'Mon',
    temp: '30-32',
    weather: 'sunny'
  },
  {
    date: '11 Jan 2019',
    day: 'Mon',
    temp: '30-32',
    weather: 'sunny'
  },
  {
    date: '11 Jan 2019',
    day: 'Mon',
    temp: '30-32',
    weather: 'sunny'
  },
  {
    date: '11 Jan 2019',
    day: 'Mon',
    temp: '30-32',
    weather: 'sunny'
  },
  {
    date: '11 Jan 2019',
    day: 'Mon',
    temp: '30-32',
    weather: 'sunny'
  }
];

class WeatherList extends Component {
  handleListItemPressed = obj => {
    this.props.navigation.navigate('WeatherInfo', { obj });
  };

  renderListItem = items => {
    if (items.length !== 0) {
      return items.map((i, index) => {
        return (
          <TouchableOpacity
            key={`item_${index}`}
            style={s.ItemWrapper}
            onPress={() => this.handleListItemPressed(i)}
          >
            <View>
              <Text style={s.itemTitle}>
                {i.date} , {i.day}
              </Text>
              <Text style={s.tempText}>{i.temp}</Text>
              <Text style={s.weatherText}>{i.weather}</Text>
            </View>
            <Icon type="FontAwesome" name="chevron-right" style={s.icon} />
          </TouchableOpacity>
        );
      });
    }
  };

  render() {
    return <View>{this.renderListItem(items)}</View>;
  }
}

export default withNavigation(WeatherList);

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Body, Title, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import map from 'lodash/map';
import s from './weatherList.style';

const items = [
  {
    date: '11 Jan 2019',
    day: 'Mon',
    temp: '30-32',
    weather: 'Cloud'
  },

  {
    date: '12 Jan 2019',
    day: 'Tue',
    temp: '30-32',
    weather: 'Cloud'
  },

  {
    date: '13 Jan 2019',
    day: 'Wed',
    temp: '30-32',
    weather: 'Cloud'
  },

  {
    date: '14 Jan 2019',
    day: 'Thurs',
    temp: '30-32',
    weather: 'Cloud'
  },

  {
    date: '15 Jan 2019',
    day: 'Fri',
    temp: '30-32',
    weather: 'Cloud'
  },

  {
    date: '16 Jan 2019',
    day: 'Sat',
    temp: '30-32',
    weather: 'Cloud'
  },

  {
    date: '16 Jan 2019',
    day: 'Sun',
    temp: '30-32',
    weather: 'Cloud'
  }
];

class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      WeatherListItem: [],
      weatherDesc: '---',
      weatherMain: '---'
    };
  }

  handleListItemPressed = obj => {
    this.props.navigation.navigate('WeatherInfo', { obj });
  };

  handleData = data => {
    let obj;
    let newObj;
    let weatherDesc, weatherMain;
    let weatherObj = this.state.WeatherListItem;

    for (let x = 0; x < data.length; x++) {
      obj = data[x];

      if (obj) {
        this.setState({
          weatherObj: obj
        });
        // const { weather, main, dt_txt } = obj;

        // if (weather) {
        //   console.log({ weather });
        //   weatherDesc = weather[0].description;
        //   weatherMain = weather[0].main;

        //   this.setState({
        //     weatherDesc
        //   });
        //   weatherObj.push(weatherDesc, weatherMain);
        //   console.log({ wwea: weatherObj });
      }
    }
    return weatherObj;
  };

  renderListItem = (items, index) => {
    const weatherList = this.props.weatherList;
    let obj, dateTime;

    if (weatherList) {
      if (weatherList.length !== 0) {
        console.log({ weatherListProps: this.props.weatherList });

        obj = map(weatherList, (w, index) => {
          console.log({ DateTime: dt_txt });
          const { dt_txt } = w;

          dateTime = dt_txt;

          return (
            <TouchableOpacity
              key={`item_${index}`}
              style={s.ItemWrapper}
              onPress={() => this.handleListItemPressed(i)}
            >
              <View>
                <Text style={s.itemTitle}>{dateTime}</Text>
                <Text style={s.tempText}>30</Text>
                <Text style={s.weatherText}>Sunny</Text>
              </View>
              <Icon type="FontAwesome" name="chevron-right" style={s.icon} />
            </TouchableOpacity>
          );
        });
      }
    }
    return obj;
  };

  render() {
    return <View>{this.renderListItem(items)}</View>;
  }
}

export default withNavigation(WeatherList);

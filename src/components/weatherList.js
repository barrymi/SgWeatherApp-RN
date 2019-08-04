import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Body, Title, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import map from 'lodash/map';
import moment from 'moment';
import s from './weatherList.style';

class WeatherList extends Component {
  handleListItemPressed = obj => {
    this.props.navigation.navigate('WeatherInfo', { obj });
  };

  handleDateTime = dt => {
    dt = moment().format('Do MMM YYYY, ddd');
    return dt;
  };

  convertKelvinToCelsius = temp => {
    // 1C = 274.15K
    cel = temp - 274.15;
    newCel = Math.round(cel);

    return newCel;
  };

  renderListItem = () => {
    let obj;

    const weatherList = this.props.weatherList;

    if (weatherList) {
      if (weatherList.length !== 0) {
        obj = map(weatherList, (w, index) => {
          console.log({ weather: w, index: index });
          const { dt_txt, weather, main } = w;
          const { temp, temp_min, temp_max } = main;

          const weatherDesc = weather[0].description;

          const weatherObj = {
            weather: weatherDesc,
            temp: this.convertKelvinToCelsius(temp),
            temp_min: this.convertKelvinToCelsius(temp_min),
            temp_max: this.convertKelvinToCelsius(temp_max),
            dateTime: dt_txt
          };

          return (
            <TouchableOpacity
              key={`item_${index}`}
              style={s.ItemWrapper}
              onPress={() => this.handleListItemPressed(weatherObj)}
            >
              <View>
                <Text style={s.itemTitle}>{dt_txt}</Text>
                <Text style={s.tempText}>
                  {this.convertKelvinToCelsius(temp_min)}°C -{' '}
                  {this.convertKelvinToCelsius(temp_max)}°C
                </Text>
                <Text style={s.weatherText}>{weatherDesc}</Text>
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
    return <View>{this.renderListItem()}</View>;
  }
}

export default withNavigation(WeatherList);

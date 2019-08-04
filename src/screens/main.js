import React, { Component } from 'react';
import { Container, Header, Body, Title, Text, Content } from 'native-base';
import * as Font from 'expo-font';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import moment from 'moment';
import s from './main.style';
import Roboto from '../../node_modules/native-base/Fonts/Roboto.ttf';
import RobotoMedium from '../../node_modules/native-base/Fonts/Roboto_medium.ttf';
import { request, sgInfo } from '../helpers/constant';
import WeatherList from '../components/weatherList';

const pageTitle = 'Singapore, Singapore';

class Main extends Component {
  static navigationOptions = {
    title: pageTitle,
    headerStyle: {
      backgroundColor: 'red'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      flex: 1,
      color: 'white',
      textAlign: 'center',
      fontSize: hp('2.7%')
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      temperature: '--',
      weather: '---',
      weatherList: []
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium
    });
    this.setState({ loading: true });
    this.getDailyWeather();
    this.gerFutureWeatherForecast();
  }

  convertKelvinToCelsius = temp => {
    // 1C = 274.15K
    cel = temp - 274.15;
    newCel = Math.round(cel);

    return newCel;
  };

  retrieveWeatherData = data => {
    let newWeather;

    if (data) {
      const { weather } = data;
      const weatherObj = weather[0];
      const { main } = weatherObj;
      newWeather = main;
    }

    return newWeather;
  };

  generateDateTime = () => {
    const date = moment().format('ddd, Do MMM YYYY HH:MM A');
    return date;
  };

  getDailyWeather() {
    url = `${request.domain}weather?id=${sgInfo.id}&APPID=${request.appID}`;

    axios
      .get(url)
      .then(res => {
        console.log({ DailyWeather: res });

        if (res.status === 200) {
          const data = res.data;

          // RETREIVE WEATHER
          const weather = this.retrieveWeatherData(data);

          // RETRIVE TEMPERATURE
          const { main } = data;
          const { temp } = main;
          newTemp = this.convertKelvinToCelsius(temp);

          this.setState({ temperature: newTemp, weather });
        }
      })
      .catch(err => {
        console.log({ error: err });
      });
  }

  gerFutureWeatherForecast = () => {
    url = `${request.domain}forecast?id=${sgInfo.id}&APPID=${request.appID}`;
    axios
      .get(url)
      .then(res => {
        console.log({ WeatherList: res });

        if (res.status === 200) {
          const { list } = res.data;
          this.setState({
            weatherList: list
          });
        }
      })
      .catch(err => {
        console.log({ error: err });
      });
  };

  render() {
    if (!this.state.loading) {
      return <AppLoading />;
    }

    return (
      <Container>
        <View style={s.headerWrapper}>
          <Title style={s.dateText}> {this.generateDateTime()} SGT </Title>
          <Text style={s.temperatureText}>{this.state.temperature}°C</Text>
          <Text style={s.subTitle}>{this.state.weather}</Text>
        </View>
        <Content>
          <WeatherList weatherList={this.state.weatherList} />
        </Content>
      </Container>
    );
  }
}

export default Main;

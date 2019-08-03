import React, { Component } from 'react';
import { Container, Title, Text, Content, Icon } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Roboto from '../../node_modules/native-base/Fonts/Roboto.ttf';
import RobotoMedium from '../../node_modules/native-base/Fonts/Roboto_medium.ttf';
import s from './weatherInfo.style';

const pageTitle = 'Singapore, Singapore';

export default class WeatherInfo extends Component {
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
      fontSize: hp('2.7%'),
      marginLeft: wp('-2%')
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium
    });
    this.setState({ loading: true });
  }

  render() {
    console.log({ props: this.props.navigation.state.params.obj.date });

    const weather = this.props.navigation.state.params.obj.weather;
    const temperature = this.props.navigation.state.params.obj.temp;
    const day = this.props.navigation.state.params.obj.day;
    const date = this.props.navigation.state.params.obj.date;

    if (!this.state.loading) {
      return <AppLoading />;
    }

    return (
      <Container style={s.container}>
        <Text style={s.dateText}>
          {day}, {date}
        </Text>

        <Icon
          type="MaterialCommunityIcons"
          name="weather-cloudy"
          style={s.weatherIcon}
        />
        <Text style={s.weatherDescText}>{weather}</Text>

        <Text style={s.tempText}>Average temperature: {temperature} </Text>
      </Container>
    );
  }
}

import React, { Component } from 'react';
import { Container, Title, Text, Content, Icon } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import moment from 'moment';
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

  generateDateTime = dateTime => {
    const date = moment(dateTime).format('ddd, Do MMM YYYY HH:MM A');
    return date;
  };

  renderContent = () => {
    const weather = this.props.navigation.state.params.obj.weather;
    const temp = this.props.navigation.state.params.obj.temp;
    const minTemp = this.props.navigation.state.params.obj.temp_min;
    const maxTemp = this.props.navigation.state.params.obj.temp_max;
    const dateTime = this.props.navigation.state.params.obj.dateTime;

    return (
      <Container style={s.container}>
        <Text style={s.dateText}>{this.generateDateTime(dateTime)}</Text>

        <Text style={s.weatherIcon}>{temp}°C</Text>
        <Text style={s.weatherDescText}>{weather}</Text>

        <Text style={s.tempText}>
          Average temperature: {minTemp}°C - {maxTemp}°C
        </Text>
      </Container>
    );
  };

  render() {
    const content = this.renderContent();
    if (!this.state.loading) {
      return <AppLoading />;
    }

    return content;
  }
}

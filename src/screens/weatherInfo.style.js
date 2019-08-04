import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const s = StyleSheet.create({
  container: {
    padding: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center'
  },

  weatherIcon: {
    fontSize: hp('10%'),
    alignSelf: 'center'
  },

  weatherDescText: {
    color: '#9E9E9E',
    fontSize: hp('3.5%'),
    alignSelf: 'center'
  },

  dateText: {
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  tempText: {
    marginTop: hp('2%'),
    alignSelf: 'center'
  }
});

export default s;

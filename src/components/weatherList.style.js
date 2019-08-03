import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const s = StyleSheet.create({
  ItemWrapper: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5
  },

  itemTitle: {
    fontWeight: 'bold'
  },

  tempText: {
    color: '#424242',
    fontSize: hp('2.2%')
  },

  weatherText: {
    color: '#9E9E9E',
    fontSize: hp('2%')
  },

  icon: {
    color: 'red',
    fontSize: hp('2%')
  }
});

export default s;

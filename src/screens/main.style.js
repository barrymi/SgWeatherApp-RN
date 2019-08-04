import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const s = StyleSheet.create({
  headerWrapper: {
    paddingTop: hp('11%'),
    paddingBottom: hp('11%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5
  },

  headerTitle: {
    flex: 1,
    color: 'white',
    fontSize: hp('2.7%'),
    marginBottom: hp('1%')
  },

  dateText: {
    color: 'black'
  },

  temperatureText: {
    fontWeight: 'bold',
    fontSize: hp('5%'),
    paddingVertical: hp('2%')
  },

  subTitle: {
    color: 'grey',
    fontSize: hp('3%')
  }
});

export default s;

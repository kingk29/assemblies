import Colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

import React, {
  ScrollView,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  NativeModules,
} from 'react-native';

let { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

class Dashboard extends Component {
  render() {
    return (
      <View>
        <Text>DASHBOARD</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

module.exports = Dashboard;

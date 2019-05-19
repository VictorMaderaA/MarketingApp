import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props)
  {
    super(props);
    this.getData();
  }
  
  componentDidMount(){
    console.log("From welcome", this.props.userInfo)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Bienvenido.</Text>
        <Text style={styles.subTitleText}>Eres tú?</Text>
        
        <TouchableOpacity
            style={styles.roundedButton}
            activeOpacity = { .5 }
            onPress={ this.selectMale }
            > 
                <Text style={styles.buttonText}> Hombre </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.roundedButton}
            activeOpacity = { .5 }
            onPress={ this.selectFemale }
            > 
                <Text style={styles.buttonText}> Mujer </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.roundedButton}
            activeOpacity = { .5 }
            onPress={ this.selectOther }
            > 
                <Text style={styles.buttonText}> Otro </Text>
        </TouchableOpacity>

      </View>
    );
  }


  selectMale = () => {
      this.props.parent.setState({ gender: 'Male' });
      this.storeData('Male');
  }

  selectFemale = () => {
      this.props.parent.setState({ gender: 'Female' });
      this.storeData('Female');
  }

  selectOther = () => {
      this.props.parent.setState({ gender: 'Other' });
      this.storeData('Other');
  }

  storeData = async (gender) => {
    try {
      await AsyncStorage.setItem('gender', gender)
    } catch (e) {
      // saving error
    }
    this.props.parent.viewChangeMainScreen();
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('gender')
      if(value !== null) {
        console.log('Saved gender ' + value)
        this.props.parent.setState({ gender: value });
        this.props.parent.viewChangeMainScreen();
      }
    } catch(e) {
      // error reading value
    }
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  roundedButton: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    marginBottom: 5,
    backgroundColor:'#FFF',
    borderRadius:30,
    borderWidth: 2,
    borderColor: '#E7E7E7',
    width: '50%',
  },
  buttonText:{
      color: '#F56A6A',
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: responsiveFontSize(3)
  },
  titleText:{
    color: '#EF3434',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(5),
  },
  subTitleText:{
    color: '#020202',
    fontSize: responsiveFontSize(4),
  }

});

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class LoginScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Sign Up.</Text>
        
        <TouchableOpacity
            style={styles.roundedButtonFaceBook}
            activeOpacity = { .5 }
            onPress={ this.selectMale }
            > 
                <Text style={styles.buttonTextFacebook}> Using Facebook </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.roundedButton}
            activeOpacity = { .5 }
            onPress={ this.selectFemale }
            > 
                <Text style={styles.buttonText}> Using Gmail </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.roundedButton}
            activeOpacity = { .5 }
            onPress={ this.selectOther }
            > 
                <Text style={styles.buttonText}> Using Phone Number </Text>
        </TouchableOpacity>

      </View>
    );
  }


  selectFacebook = () => {
    this.nextView();
  }

  // TODO - Must have google login
  selectGmail = () => { 
    this.nextView();
  }

  selectPhone = () => {
    this.nextView();
  }

  nextView = () => {
    this.props.parent.setState({ currWindow: 'gender' });
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: '50%'
  },
  roundedButtonFaceBook: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    marginBottom: 5,
    backgroundColor:'#1A4C75',
    borderRadius:30,
    borderWidth: 2,
    borderColor: '#1A4C75',
    width: '65%',
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
    width: '65%',
  },
  buttonTextFacebook:{
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2)
  },
  buttonText:{
      color: '#111',
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: responsiveFontSize(2)
  },
  titleText:{
    color: '#EF3434',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(5),
  },

});

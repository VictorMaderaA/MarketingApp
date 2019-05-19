import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

export default class LoginScreen extends Component {

  componentDidMount() {
    this._setupGoogleSignin();
  }


  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true, showPlayServicesUpdateDialog : true });
      await GoogleSignin.configure(
         {
        //iosClientId: '164124405471-19ra99r21989dpt5kocpelt95n69uasv.apps.googleusercontent.com',
        //webClientId: settings.webClientId,       
         webClientId: '589365758929-7f4u719kntipgcb2dt8ku86f8rtq1n17.apps.googleusercontent.com',
      //   scopes: [],
         offlineAccess: false,
       }
      );

      //const user = await GoogleSignin.currentUserAsync();
    }
    catch (err) {
      console.log("Google signin error", err.code, err.message);
    }
  }


  _signIn = async () => {
    try {
      console.log("Iniciando sesion");
      try{
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo);
      } catch(e){
        console.log(e);
      }
      
      console.log(userInfo);
      this.setState({ userInfo });
      return userInfo;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
    return -1;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Sign Up.</Text>

        {/* <TouchableOpacity
          style={styles.roundedButtonFaceBook}
          activeOpacity={.5}
          onPress={this.selectMale}
        >
          <Text style={styles.buttonTextFacebook}> Using Facebook </Text>
        </TouchableOpacity>

        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          disabled={false} /> */}
          
          <TouchableOpacity
            style={styles.roundedButton}
            activeOpacity={.5}
            onPress={this.selectGmail}
          >
            <Text style={styles.buttonText}> Using Googel Acount </Text>
          </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.roundedButton}
          activeOpacity={.5}
          onPress={this.selectOther}
        >
          <Text style={styles.buttonText}> Using Phone Number </Text>
        </TouchableOpacity> */}

      </View>
    );
  }


  selectFacebook = () => {
    this.nextView();
  }

  // TODO - Must have google login
  selectGmail = async () => {
    this.nextView();
    var response = await this._signIn();
    if(response !== -1)
    {
      this.nextView();
    }
  }

  selectPhone = () => {
    this.nextView();
  }

  nextView = () => {
    this.props.parent.viewChangeGender();
  }


}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  roundedButtonFaceBook: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    backgroundColor: '#1A4C75',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1A4C75',
    width: '65%',
  },
  roundedButton: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#E7E7E7',
    width: '65%',
  },
  buttonTextFacebook: {
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2)
  },
  buttonText: {
    color: '#111',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: responsiveFontSize(2)
  },
  titleText: {
    color: '#EF3434',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(5),
  },

});

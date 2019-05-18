import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

type Props = {};
export default class App extends Component<Props> {

  state = {
    currWindow: 'splash',
    gender: null,
  };

  render() {
    if (this.state.currWindow == 'splash')  //Splash
    {
      this.splashScreenTimer();
      return (
        <View>
          <ImageBackground source={require('./assets/images/splashscreen.png')} style={{width: '100%', height: '100%'}}/>
        </View>
      );
    } 
    else if (this.state.currWindow == 'login') //Login 
    {
      return (
        <View>
          <LoginScreen parent={this} style={{width: '100%', height: '100%'}}/>
        </View>
      );
    }
    else if (this.state.currWindow == 'gender') //Gender Select
    {
      return (
        <WelcomeScreen parent={this}/>
      );
    }
    else if (this.state.currWindow == 3)
    {
    }    
    else if (this.state.currWindow == 4)//MainPage
    {
      
    }
  }

  splashScreenTimer = () => {
    setTimeout(function(){this.viewChangeLogin()}, 3000);
  }

  viewChangeLogin = () => {
    this.setState({ currWindow: 'login' })
  }

  viewChangeGender = () => {
    this.setState({ currWindow: 'gender' })
  }

  viewChangeSplash = () => {
    this.setState({ currWindow: 'splash' })
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

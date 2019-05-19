import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import StackScreen from './screens/StackScreen';
import CounterScreen from './screens/CounterScreen';
import MainScreen from './screens/MainScreen';

type Props = {};
export default class App extends Component<Props> {

  state = {
    currWindow: 'main',
    gender: null,
  };

  render() {
    return (

      <Router showNavigationBar={false}>
        <Stack key="root">
          <Scene key="login" component={LoginScreen} hideNavBar title="Login"  />
          <Scene key="welcome" component={WelcomeScreen} hideNavBar title="Register"  />
          <Scene key="stack" component={StackScreen} hideNavBar title="Stack" initial/>
        </Stack>
      </Router>

    );

    /*
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
    else if (this.state.currWindow == 'timer')
    {
      return (
        <CounterScreen parent={this}/>
      );
    }    
    else if (this.state.currWindow == 'main')//MainPage
    {
      return (
        <MainScreen parent={this}/>
      );
    }
    */
  }

  splashScreenTimer = () => {
    var selectedDate = new Date(2019, 5, 20, 15).getTime()
    var now = new Date().getTime()

    if (selectedDate < now) {
      console.log("Selected date is in the past");
      setTimeout(function(){this.viewChangeLogin()}.bind(this), 3000);
    } else {
      console.log("Selected date is NOT in the past");
      setTimeout(function(){this.viewChangeTimer()}.bind(this), 3000);
    }
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

  viewChangeTimer = () => {
    this.setState({ currWindow: 'timer' })
  }

  viewChangeMainScreen = () => {
    this.setState({ currWindow: 'main' })
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

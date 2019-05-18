import React from 'react';
import { Platform, StatusBar, StyleSheet, View, ImageBackground, Text } from 'react-native';
//import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  state = {
    isLoadingComplete: 0,
    gender: null,
  };



  render() {
    if (this.state.isLoadingComplete == 0)  //Splash Screen
    {
      return (  
        // <AppLoading
        //   startAsync={this._loadResourcesAsync}
        //   onError={this._handleLoadingError}
        //   onFinish={this._handleFinishLoading}/>
        <View>
          <Text>AYUDAAA</Text>
        </View>
      );
    } 
    else if (this.state.isLoadingComplete == 1) //Splash 
    {
      return (
        <View>
          <ImageBackground source={require('./assets/images/splashscreen.png')} style={{width: '100%', height: '100%'}}/>
        </View>
      );
    }
    else if (this.state.isLoadingComplete == 2) //Login
    {
      return (
        <LoginScreen parent={this}/>
      );
    }
    else if (this.state.isLoadingComplete == 3)//Gender Select
    {
      return (
        
        <WelcomeScreen parent={this}/>
      );
    }    
    else if (this.state.isLoadingComplete == 4)//MainPage
    {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  // _loadResourcesAsync = async () => {
  //   return Promise.all(
  //     // [
  //     // Asset.loadAsync([
  //     //   require('./assets/images/robot-dev.png'),
  //     //   require('./assets/images/robot-prod.png'),
  //     //   require('./assets/images/splashscreen.png'),
  //     // ]
  //     ),
  //     Font.loadAsync({
  //       // This is the font that we are using for our tab bar
  //       ...Icon.Ionicons.font,
  //       // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //       // to remove this if you are not using it in your app
  //       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  //     }),
  //   ]);
  // };

  showView = () => {
    this.setState({ isLoadingComplete: 2 });
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => { 
    this.setState({ isLoadingComplete: 1 });
    setTimeout(this.showView,
      3000);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

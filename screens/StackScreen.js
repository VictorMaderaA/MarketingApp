import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { Actions } from 'react-native-router-flux';


export default class LoginScreen extends Component {

  componentDidMount() {

  }

  navigateToProfile = () =>{
    console.log("User navigated to profile");
  }

  navigateToChat = () =>{
    console.log("User navigated to chat");
  }

  checkButton = () =>{
    console.log("User pressed check");
  }

  likeButton = () =>{
    console.log("User pressed like");
  }

  passButton = () =>{
    console.log("User pressed pass");
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.topLeft}>
            <TouchableOpacity onPress={this.navigateToProfile}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('../icons/user.png')}
              />
            </TouchableOpacity>

          </View>
          <View style={styles.middle}></View>
          <View style={styles.topRigth}>
          <TouchableOpacity onPress={this.navigateToChat}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('../icons/chat.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>

        </View>

        <View style={styles.footer}>
          <View style={styles.button}>
          <TouchableOpacity onPress={this.checkButton}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('../icons/check.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
          <TouchableOpacity onPress={this.likeButton}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('../icons/like.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
          <TouchableOpacity onPress={this.passButton}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('../icons/pass.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
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
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  body: {
    width: '100%',
    height: '70%',
    backgroundColor: 'red'
  },
  footer: {
    width: '100%',
    height: '20%',
    backgroundColor: '#c4c5c6',
    alignItems : 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  topLeft: {
    height: '100%',
    width: '20%',
    //backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  },
  middle: {
    height: '100%',
    width: '60%',
    //backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topRigth: {
    height: '100%',
    width: '20%',
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    height: '55%',
    width: '22%',
    backgroundColor: 'white',
    //value for Android
    borderRadius: 50,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

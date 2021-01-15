import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';


export default class Cards extends React.Component {

  gender = 'not defined';
  userCard = [];

  state = {
    loaded: false
  };

  constructor(props)
  {
    super(props)
    this.getUsers();
  }

  reqParam = 'results=500&nat=es';

  getUsers = async () => {
    this.gender = (this.props.gender)? this.props.gender : await this.getGender();

    console.log(this.gender)
    var response; 
    if(this.gender == 'Male')
    {
      console.log(1)
      response = await fetch('https://randomuser.me/api/?gender=female&' + this.reqParam); // for male users
    }
    else if(this.gender == 'Female')
    {
      console.log(2)
      response = await fetch('https://randomuser.me/api/?gender=male&' + this.reqParam); // for female users
    }
    else
    {
      console.log(3)
      response = await fetch('https://randomuser.me/api/?' + this.reqParam); // for other users
    }  
    const users = await response.json();
    this.processResponse(users.results);
  }

  getGender = async () => {
    try {
      const value = await AsyncStorage.getItem('gender')
      if(value !== null) {
        console.log('Saved gender Cards ' + value)
        this.gender = value;
      }else
      {
        console.log('could not find saved gender');
      }
    } catch(e) {
        console.log('Error reading gender saved');
        // error reading value
    }
  }

  processResponse = (data) => {
    var array = [];
    data.forEach(e => {
      var p = {
        name: e.name.first + ' ' + e.name.last,
        age: (e.registered.age < 18)? (e.registered.age + 18) : e.registered.age,
        imageurl: e.picture.large
      };
      array.push(p);
    });
    this.userCard = array;
    this.setState({ loaded: true })
  }

  componentDidMount() {

  }

  navigateToProfile = () => {
    console.log("User navigated to profile");
  }

  navigateToChat = () => {
    console.log("User navigated to chat");
  }

  checkButton = () => {

    console.log("User pressed check");
  }

  likeButton = () => {
    console.log("User pressed like");
  }

  passButton = () => {

    console.log("User pressed pass");
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
          <Image
              style={{width: '100%', height: '100%'}}
            source={{uri: card.imageurl}}
          />
          </View>
          <View style={styles.infoContainer}>
          <Text style={styles.text}>{card.name}, {card.age}</Text>
          </View>
          {/* <Text style={styles.text}>{card}</Text> */}
        </View>
      </View>
    );
  }

  render() {
    if (this.state.loaded)
    {
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
            <View style={styles.middle}>
              <Image
                style={{ width: '60%', height: '60%' }}
                source={require('../icons/icon_inverted.png')}
              />
            </View>
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
            <Swiper
             ref={swiper => {
              this.swiper = swiper
            }}
              cards={this.userCard
                // ['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']
              }
              renderCard={this.renderCard}
              onSwiped={(cardIndex) => { console.log(cardIndex) }}
              onSwipedLeft={this.passButton}
              onSwipedRight={this.checkButton}
              onSwipedAll={() => { console.log('onSwipedAll') }}
              cardIndex={0}
              backgroundColor={'#FFF'}
              stackSize={1}>
            </Swiper>
          </View>
  
          <View style={styles.footer}>
          <View style={styles.button}>
              <TouchableOpacity onPress={() => this.swiper.swipeLeft()}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={require('../icons/pass.png')}
                />
              </TouchableOpacity>
            </View>
           
            <View style={styles.button}>
              <TouchableOpacity onPress={this.likeButton}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={require('../icons/like.png')}
                />
              </TouchableOpacity>
            </View>
  
             <View style={styles.button}>
              <TouchableOpacity onPress={() => this.swiper.swipeRight()}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={require('../icons/check.png')}
                />
              </TouchableOpacity>
            </View>
            
          </View>
  
        </View>
      );
    }
    else
    {
      return null;
    }
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
    backgroundColor: '#FFF',
    flexDirection: 'row'
  },
  body: {
    width: '100%',
    height: '70%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    width: '100%',
    height: '20%',
    //backgroundColor: '#c4c5c6',
    alignItems: 'center',
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
  button: {
    height: '55%',
    width: '22%',
    backgroundColor: 'white',
    //value for Android
    borderRadius: 50,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '60%',
    height: '60%',
    borderRadius: 4,
    //borderWidth: 2,
    borderColor: "#FFF",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  text: {
    //textAlign: "center",
    fontSize: 25,
    backgroundColor: "transparent",
    marginLeft : 10
  },
  imageContainer:{
    width: '100%',
    height: '90%',
    //backgroundColor: 'blue',
    borderRadius: 4
  },
  infoContainer:{
    width:'100%',
    height: '10%',
    //backgroundColor: 'red',
    justifyContent: 'center'
  }
});

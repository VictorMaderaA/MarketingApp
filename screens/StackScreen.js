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

const userCards = [
  {
    imageurl:'https://cdn.images.express.co.uk/img/dynamic/67/285x395/1128919_1.jpg',
    name:'Lionel Messi',
    age: 31
  },
  {
    imageurl:'https://www.latercera.com/wp-content/uploads/2018/08/CRISTIANO.jpg',
    name:'Cristiano Ronaldo',
    age: 34
  },
  {
    imageurl:'http://www.fichajes.com/foto/a/eden-hazard-es-uno-de-los-grandes-motores-de-la-rumorologia_145666.jpg',
    name:'Eden Hazard',
    age: 28
  },
  {
    imageurl:'https://www.culemania.com/uploads/s1/56/46/33/0/neymar-en-un-encuentro-con-el-paris-saint-germain-efe.jpeg',
    name:'Neymar Jr',
    age: 27
  },
  {
    imageurl:'https://www.hola.com/imagenes/actualidad/20180328122185/sara-salamo-isco-alarcon-polemica/0-553-723/isco-getty-m.jpg?interpolation=lanczos-normal&downsize=0.75xw:*&output-format=progressive-jpeg&output-quality=70',
    name:'Isco Alarcón',
    age: 27
  },
  {
    imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Marc_Bartra%2C_durante_un_encuentro_con_el_Real_Betis_Balompi%C3%A9.jpg/245px-Marc_Bartra%2C_durante_un_encuentro_con_el_Real_Betis_Balompi%C3%A9.jpg',
    name:'Marc Bartra',
    age: 28
  }

];

export default class StackScreen extends Component {

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
    );
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
            cards={userCards
              // ['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']
            }
            renderCard={this.renderCard}
            onSwiped={(cardIndex) => { console.log(cardIndex) }}
            onSwipedLeft={this.passButton}
            onSwipedRight={this.checkButton}
            onSwipedAll={() => { console.log('onSwipedAll') }}
            cardIndex={0}
            backgroundColor={'#c4c5c6'}
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
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c5c6'
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
    backgroundColor: '#c4c5c6',
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
    width: '100%',
    height: '100%',
    borderRadius: 4,
    //borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
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

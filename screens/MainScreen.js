import React from 'react';
import { AppRegistry, StyleSheet, View, Text, ListView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fetch } from 'fetch';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Chats from '../components/Chats';
import Cards from '../components/Cards';
import Profile from '../components/Profile';



export default class MainScreen extends React.Component {

  render() {
    return (
        <View style={styles.contentContainer}>
          <ScrollableTabView
            tabBarUnderlineColor="#fff"
            tabBarUnderlineStyle={{backgroundColor: "#fff"}}
            tabBarBackgroundColor ="#EF3434"
            tabBarActiveTextColor="#fff"
            tabBarInactiveTextColor="#E7E7E7"
            >
            <Profile tabLabel="Profile" {...this.props} />
            <Cards tabLabel="Cards" {...this.props} />
            <Chats tabLabel="Chats" {...this.props} />
          </ScrollableTabView>
        </View>
      );
  }

}

const styles = StyleSheet.create({
  mainContainer: {
     flex: 1,
     backgroundColor: '#FFF',
     height: 24
  },
  headerContainer: {
     flex: 1,
     flexDirection: "row",
     justifyContent: "space-between",
     backgroundColor: "#EF3434",
     alignItems:"center",
     paddingRight: 5
  },
  contentContainer: {
     flex: 6,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  iconContainer: {
    flex: 2,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 5,
    justifyContent: "center",
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25
  },
  callerDetailsContainerWrap: {
    flex: 3,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 4
  },
  initStyle: {
    borderRadius: 30,
    width: 80,
    height: 80
  },
  nameText: {
    fontSize: responsiveFontSize(4),
    color: "#222"
  }
 });

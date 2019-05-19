import React from 'react';
import { AppRegistry, StyleSheet, View, Text, ListView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fetch } from 'fetch';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
export default class Chats extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      peopleDataSource: ds.cloneWithRows([]),
      loaded: false
    }
  }

  render() {
    return (
        <ListView
              initialListSize={5}
              enableEmptySections={true}
              dataSource={this.state.peopleDataSource}
              renderRow={(person) => { return this.renderPersonRow(person) }}/>
      );
  }


  
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/yllongboy/81de024b02f1b668818066bcafbf3c4c/raw/5a508fd580cc1c3d104a300589e7e88d895fa766/whatsapp_contacts.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          peopleDataSource: ds.cloneWithRows(data),
          loaded: true
        })
      });
  }

  renderPersonRow(person) {
    return (
    <View style = {styles.listItemContainer}>
      <View style= {styles.iconContainer}>
        <Image source={{uri:person.image}} style={styles.initStyle} resizeMode='contain' />
      </View>
      <View style = {styles.callerDetailsContainer}>
        <View style={styles.callerDetailsContainerWrap}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{person.first_name}</Text>
          </View>
        </View>
      </View>
    </View>
   )
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
     backgroundColor: "#075e54",
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

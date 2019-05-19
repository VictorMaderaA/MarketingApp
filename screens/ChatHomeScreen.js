import React from 'react';
import { AppRegistry, StyleSheet, View, Text, ListView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fetch } from 'fetch';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
export default class ChatHomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      peopleDataSource: ds.cloneWithRows([]),
      loaded: false
    }
  }

  render() {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
          
          </View>
          <View style={styles.contentContainer}>
            <ListView
              initialListSize={5}
              enableEmptySections={true}
              dataSource={this.state.peopleDataSource}
              renderRow={(person) => { return this.renderPersonRow(person) }} />
              </View>
        </View>
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
          <Text>{person.first_name}</Text>
          <View style={styles.dateContainer}>
            <Icon name={person.missed ? "call-missed" : "call-received"} size={15} color={person.missed ? "#ed788b" : "#075e54"} />
            <Text style={{ fontWeight:'400', color:'#666', fontSize:12 }}>{person.date} {person.time}</Text>
          </View>
          </View>
        <View style={styles.callIconContainer}>
        <Icon name="phone" color='#075e54' size={23} style={{ padding:5 }} />
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
     backgroundColor: '#F5FCFF',
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
  leftHeaderContainer: {
     alignItems: "flex-start",
     flexDirection: "row"
  },
  rightHeaderContainer: {
     alignItems: "flex-end",
     flexDirection: "row"
  },
  contentContainer: {
     flex: 6,
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 1
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  callIconContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  initStyle: {
    borderRadius: 30,
    width: 60,
    height: 60
  }
 });

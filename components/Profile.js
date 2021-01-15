import React from 'react';
import { AppRegistry, StyleSheet, View, Text, ListView, Image } from 'react-native';

export default class Profile extends React.Component {

  render() {
    return (
        <View style={styles.container}>
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
 });

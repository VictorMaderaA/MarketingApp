import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount(){
    console.log("From welcome", this.props.userInfo)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Welcome.</Text>
        <Text style={styles.subTitleText}>Are you?</Text>
        
        <TouchableOpacity
            style={styles.roundedButton}
            activeOpacity = { .5 }
            onPress={ this.selectMale }
            > 
                <Text style={styles.buttonText}> Male </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.roundedButton}
            activeOpacity = { .5 }
            onPress={ this.selectFemale }
            > 
                <Text style={styles.buttonText}> Female </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.roundedButton}
            activeOpacity = { .5 }
            onPress={ this.selectOther }
            > 
                <Text style={styles.buttonText}> Other </Text>
        </TouchableOpacity>

      </View>
    );
  }


  selectMale = () => {
      console.log("Male");
      this.props.parent.setState({ gender: 'Male' });
      this.props.parent.setState({ isLoadingComplete: 4 });
  }

  selectFemale = () => {
      console.log("Female");
      this.props.parent.setState({ gender: 'Female' });
      this.props.parent.setState({ isLoadingComplete: 4 });
  }

  selectOther = () => {
      console.log("Other");
      this.props.parent.setState({ gender: 'Other' });
      this.props.parent.setState({ isLoadingComplete: 4 });
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  roundedButton: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:20,
    marginRight:20,
    marginBottom: 5,
    backgroundColor:'#FFF',
    borderRadius:30,
    borderWidth: 2,
    borderColor: '#E7E7E7',
    width: '50%',
  },
  buttonText:{
      color: '#F56A6A',
      fontWeight: 'bold',
      alignSelf: 'center',
      fontSize: responsiveFontSize(3)
  },
  titleText:{
    color: '#EF3434',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(5),
  },
  subTitleText:{
    color: '#020202',
    fontSize: responsiveFontSize(4),
  }

});

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class CounterScreen extends React.Component {

    state = {
        timeLeft: new Date(),
        timeText: 'Not Available',
    };

    constructor(props) {
        super(props);
        this.state = { timeLeft: null, timeText: 'Not Available'  };
    }

    componentDidMount() {
        var msDiff = new Date("June 30, 2019").getTime() - new Date().getTime();
        this.setState({timeLeft: msDiff});

        setInterval(function(){
            this.dateTimer();
        }.bind(this), 1000);
    }

    dateTimer = () => {
        this.setState({timeLeft: (this.props.timeLeft - 1)});
        this.setState({timeText: this.props.timeText});
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.timeText}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
});

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class CounterScreen extends React.Component {

    text = 'algo';
    time = 1;
    constructor(props) {
        super(props);
    }
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;

    componentDidMount() {
        var startDate = new Date();
        var endDate   = new Date(2019, 5, 20, 15);
        //var endDate   = new Date(2019, 5, 19, 14,19);
        var seconds = parseInt((endDate - startDate) / 1000);
        // var msDiff = (new Date("May 25, 2019").getTime() - new Date().getTime());
        this.time = seconds;
        this.setState({timeLeft: this.time});
        this.secondsToHms(this.time)

        setInterval(function(){
            this.dateTimer();
        }.bind(this), 1000);
    }

    dateTimer = () => {
        if((this.seconds <= 0  && this.minutes <= 0 && this.hours <= 0 && this.days <= 0))
        {
            this.props.parent.viewChangeGender();
        }
        else
        {
            this.time = this.time - 1;
            this.secondsToHms(this.time)
            // this.text = this.secondsToHms(this.time);
            this.setState({timeLeft: this.time});
        }
    }

    secondsToHms = (d) => {
        d = Number(d);

        var days = Math.floor(d / 86400) - 31 ;
        var h = Math.floor(d % 86400 / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        this.days = days;
        this.hours = h;
        this.minutes = m;
        this.seconds = s;

        // var dayDisplay = days > 0 ? days + (days == 1 ? " day, " : " days, ") : "";
        // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        // return dayDisplay + hDisplay + mDisplay + sDisplay; 
    }


    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.numberText}>{this.days > 0 ? this.days : null}</Text>
                <Text style={styles.subText}>{this.days > 0 ? 'dias' : null}</Text> */}

                <Text style={styles.numberText}>{(this.hours > 0 || this.days > 0) ? this.hours : null}</Text>
                <Text style={styles.subText}>{(this.hours > 0 || this.days > 0) ? 'horas' : null}</Text>

                <Text style={styles.numberText}>{(this.minutes > 0 || this.hours > 0) ? this.minutes : null}</Text>
                <Text style={styles.subText}>{(this.minutes > 0 || this.hours > 0) ? 'minutos' : null}</Text>

                <Text style={styles.numberText}>{(this.seconds > 0  || this.minutes > 0 || this.hours > 0) ? this.seconds : null}</Text>
                <Text style={styles.subText}>{(this.seconds > 0  || this.minutes > 0 || this.hours > 0) ? 'segundos' : null}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
//     mainColor: '#EF3434',
//   secondaryColor: '#F56A6A',
    container: {
        //flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    numberText: {
        color: '#EF3434',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(10),
    },
    subText: {
        color: '#F56A6A',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
    },
});

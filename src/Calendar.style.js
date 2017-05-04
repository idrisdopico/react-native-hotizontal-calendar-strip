import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    //CALENDAR STYLES
    calendarContainer: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    datesStrip: {
        flexDirection: 'row'
    },
    calendarDates: {
        flex: 1,
        flexDirection: 'row',
    },
    calendarHeader: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    // Calendar month buttons
    BButtonImage: {
      width: 30,
      height: 30
    },
    FButtonImage: {
      width: 30,
      height: 30,
    },

    //CALENDAR DAY
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    dateName: {
        fontSize: 10,
        textAlign: 'center'
    },
    dateNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    weekendDateName: {
        fontSize: 10,
        color: '#A9A9A9',
        textAlign: 'center'
    },
    weekendDateNumber: {
        fontSize: 18,
        color: '#A9A9A9',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    disabledStyle: {
        color: '#d3d3d3'
    },
});

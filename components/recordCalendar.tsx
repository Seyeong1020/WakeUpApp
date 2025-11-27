import React from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from 'react-native-calendars';

const SUCCESS_COLOR = '#B4EFB0';

export default function RecordCalendar(){
    const successDates = [
        '2025-11-21',
        '2025-11-25',
        '2025-11-26',
        '2025-11-27', 
    ];

    const getMarkedDates = () => {
        const marked: {[key: string]: any} = {};

        successDates.forEach(date=> {
            marked[date] = {
                selected: true,
                selectedColor: SUCCESS_COLOR,
            }
        })
        return marked;
    }

    return(
        <View style={styles.container}>
            <Calendar 
                theme={{ 
                    arrowColor: 'gray',
                    textDayFontWeight: 'medium',
                    selectedDayBackgroundColor: SUCCESS_COLOR, //동그라미 색상
                    selectedDayTextColor: 'black', // 동그라이 안 글씨
                }}
                markedDates={getMarkedDates()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
});
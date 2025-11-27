import { StyleSheet, Text, View } from 'react-native';

const DATE_SIZE = 30;

export default function HomeDate(){
    const dates = [5, 6, 7, 8, 9, 10, 11]; //오늘로부터 6일전부터 출력
    const activeDates = [9, 10, 11]; // 접속한 날짜
    const currentDate = 11; //오늘은 11일

    return (
        <View style={styles.dateContainer}>
            <View style={styles.line} />
            <View style={styles.dateRow}>
                {dates.map((date)=> {
                    const isActive = activeDates.includes(date);
                    const isCurrent = date === currentDate;

                    return(
                        <View key={date} style={styles.dateItem}>
                            <View style={[
                                styles.dateCircle,
                                isActive && styles.activeDateCircle
                            ]}>
                               <Text style={styles.dateText}>{date}</Text>
                            </View>
                            
                            <View>
                                {isCurrent && <Text style={styles.indicator}>^</Text>}
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dateContainer: {
        width: '80%',
        alignItems: 'center',
    },

    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', // 요소들 사이 균등하게
        width: '100%',
    },

    dateItem: {
        alignItems: 'center',
        width: DATE_SIZE,
    },

    dateCircle: {
        width: DATE_SIZE,
        height: DATE_SIZE,
        borderRadius: DATE_SIZE/2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    activeDateCircle: {
        backgroundColor: '#B4EFB0',
    },

    dateText: {
        fontSize: 14,
    },

    indicator: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 0, // 숫자랑 가깝게 위치 조정
    },

    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#333', 
        marginBottom: 10,
    },
});
import { StyleSheet, Text, View } from 'react-native';

const DATE_SIZE = 30;

export default function HomeDate(){
    // const activeDates = [9, 10, 11]; // 접속한 날짜
    // const dates = [5, 6, 7, 8, 9, 10, 11]

    const getPastWeek = () => {
        const tempDates = [];
        const today = new Date();

        for (let i = 6; i>=0; i--){
            const d = new Date(today); // d는 년, 월, 일 다 저장되어 있음
            d.setDate(today.getDate()-i);
            tempDates.push(d.getDate());
        }
        
        return tempDates;
    }

    const dates = getPastWeek();
    const currentDate = new Date().getDate(); //오늘 날짜
    const activeDates = [dates[0], dates[4], dates[5], dates[6]]; // 임시로 활동 일 해두기
    
    return (
        <View style={styles.dateContainer}>
            <View style={styles.line} />
            <View style={styles.dateRow}>
                {dates.map((date, index)=> {
                    const isActive = activeDates.includes(date);
                    const isCurrent = date === currentDate;

                    return(
                        <View key={index} style={styles.dateItem}>
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
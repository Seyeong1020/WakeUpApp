import { Image, StyleSheet, Text, View } from "react-native";

const CIRCLE_SIZE = 200;
const SKY_COLOR = '#D6E6F5'; 
const DIRT_COLOR = '#5D4037';

const BASE_SIZE = 60;
const GROWTH_RATE = 15;
const MAX_SIZE = 160;

export default function GrowingCircle(){
    
    const streak = 7;
    const imgSize = Math.min(BASE_SIZE + (streak * GROWTH_RATE), MAX_SIZE);
    const currentMarginTop = -imgSize + 50;

    const getImageSource = (streak_day: number) => {
        const images: {[key: number]: any} = {
            1: require('../assets/images/sprout_day1.png'),
            2: require('../assets/images/sprout_day2.png'),
            3: require('../assets/images/sprout_day3.png'),
            4: require('../assets/images/sprout_day4.png'),
            5: require('../assets/images/sprout_day5.png'),
            6: require('../assets/images/sprout_day6.png'),
            7: require('../assets/images/sprout_day7.png'),
        };
        return images[streak_day] || images[7];
    }

    return (
        <View style={styles.circleContainer}>
            
            <View style={styles.outerCircle}>
                <View>
                    <Text style={styles.daysText}> {streak} 일 </Text>
                    <Text style={styles.daysText}> 연속 </Text>
                </View>
                
                <View style={styles.dirtMound}>
                    <Image 
                        source={getImageSource(streak)} 
                        style={[
                            styles.imageStyle, 
                            {width: imgSize, 
                            height: imgSize,
                            marginTop: currentMarginTop}
                        ]}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    circleContainer: {
        marginBottom: 40,
    },

    outerCircle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE/2,
        backgroundColor: SKY_COLOR ,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
        overflow: 'hidden',
    },

    daysText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#301500ff',
        lineHeight: 24,
    },

    dirtMound: {
        width: CIRCLE_SIZE * 1.5,
        height: CIRCLE_SIZE * 0.8,
        backgroundColor: DIRT_COLOR,
        borderRadius: CIRCLE_SIZE,

        marginBottom: -100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
    },
    imageStyle: {
        marginTop: -60,
        resizeMode: 'contain', // 이미지 찌그러지지 않도록
    }
})

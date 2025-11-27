import { StyleSheet, Text, View } from "react-native";

const CIRCLE_SIZE = 200;
const SKY_COLOR = '#D6E6F5'; 
const DIRT_COLOR = '#5D4037';

export default function GrowingCircle(){
    return (
        <View style={styles.circleContainer}>
            
            <View style={styles.outerCircle}>
                <View>
                    <Text style={styles.daysText}> 3 일 </Text>
                    <Text style={styles.daysText}> 연속 </Text>
                </View>
                
                <View style={styles.dirtMound}>
                    <Text style={styles.sproutIcon}>🌱</Text> 
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
    sproutIcon: {
        fontSize: 50,
        marginTop: -45,
    }
})

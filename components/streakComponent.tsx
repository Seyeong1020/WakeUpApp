import React from "react";
import { StyleSheet, Text, View } from "react-native";

const streak = 3;


export default function Streak(){
    return (
        <View style={styles.container}>
            <Text>
                {streak} 일 연속 !
            </Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '80%',
        height: 100,
        borderRadius: 20,
        backgroundColor: '#afb7abff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
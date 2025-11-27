import Header from "@/components/header";
import RecordCalendar from "@/components/recordCalendar";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function RecordScreen() {
  return (
    <SafeAreaView  style={styles.container}>
          <Header />
          <View style={styles.contentContainer}>
           
            <RecordCalendar />
             {/*
            <Streak />
            <Streak />
            */}
            
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    backgroundColor: '#fff',
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
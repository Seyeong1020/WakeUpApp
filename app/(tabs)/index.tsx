import GrowingCircle from "@/components/circle";
import Header from "@/components/header";
import HomeDate from "@/components/homeDate";
import { SafeAreaView, StyleSheet, View } from "react-native";


export default function Index() {
  return (
    <SafeAreaView  style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <GrowingCircle/>
        <HomeDate />
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
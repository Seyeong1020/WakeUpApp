import GrowingCircle from "@/components/circle";
import HomeDate from "@/components/homeDate";
import { SafeAreaView, StyleSheet, View } from "react-native";

const THEME_COLOR = '#E8F5E9';

export default function Index() {
  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.headerSpacer} />

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
  headerSpacer: {
    height: 100, 
    backgroundColor: THEME_COLOR,
  },
  contentContainer: {
    backgroundColor: '#fff',
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
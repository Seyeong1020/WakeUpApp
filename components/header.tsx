import { StyleSheet, View } from "react-native";

const THEME_COLOR = '#E8F5E9';

export default function Header(){
    return(
        <View style={styles.headerSpacer} />
    );
}

const styles = StyleSheet.create({

  headerSpacer: {
    height: 100, 
    backgroundColor: THEME_COLOR,
  },

})
import { StyleSheet,Text,View } from "react-native";

function Title({children}) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
export default Title;
const styles = StyleSheet.create({
  titleContainer: {
    
    padding: 12,
    borderWidth: 2,
    borderColor: '#34b52f',
    borderRadius: 8,
    margin: 24,
    backgroundColor: 'transparent',
  },
  title: {
    color: '#34b52f',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
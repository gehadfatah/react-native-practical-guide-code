import { ActivityIndicator, View } from 'react-native';

 function LoadingOverlay () {
    return (
        <View  style={styles.container}>
          <ActivityIndicator style={styles.activityIndicator} size="large" color="#fff" />
        </View>
      );
}


  export default LoadingOverlay;

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent background
  },
  activityIndicator: {
    color: '#fff', // White color for the activity indicator
  },
})
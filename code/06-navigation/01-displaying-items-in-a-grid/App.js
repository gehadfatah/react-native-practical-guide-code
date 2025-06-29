import { StatusBar } from 'expo-status-bar';
import { StyleSheet , 
  Text
 } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';   // ← JS-based


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsCategoryScreen from "./src/screens/MealsCategoryScreen";

const Stack = createStackNavigator();
export default function App() {
  console.log('HERE'); // for visibility


  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
      
         headerBackButtonDisplayMode: 'minimal',
         headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          headerTitleAlign : 'left',
          headerTitleStyle: { fontWeight: 'bold' },

          contentStyle: {  backgroundColor: "#3f2f25" },
          headerBackButtonDisplayMode: 'minimal',
          
        }}>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "All Categories" }}
        />
        <Stack.Screen
          name="MealsCategory"
        
          component={MealsCategoryScreen}
          // options={({navigation,route})=>{
          //   return {
          //    title: route.params?.categoryTitle,
          //   }; 
          //  }}
          
  
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

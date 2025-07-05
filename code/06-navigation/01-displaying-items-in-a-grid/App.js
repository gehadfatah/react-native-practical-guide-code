import { StatusBar } from 'expo-status-bar';
import { StyleSheet , 
  Text
 } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';   // ← JS-based
import {Ionicons} from '@expo/vector-icons'; // for icons
import { createDrawerNavigator } from '@react-navigation/drawer';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // ← JS-based
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsCategoryScreen from "./src/screens/MealsCategoryScreen";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
export default function App() {
  console.log('HERE'); // for visibility


  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
      {/* <Stack.Navigator 
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
      </Stack.Navigator> */}
       <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#351401" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#ccc",
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarItemStyle: { paddingVertical: 5, paddingHorizontal: 10 },
        }}
      >
        <BottomTab.Screen   
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            tabBarLabel: "Categories",
            tabBarIcon: ({ color, size }) => (
      <Ionicons name="list" size={size} color={color} />
    ),
          }}
        />
        <BottomTab.Screen
          name="MealsCategory"
          component={MealsCategoryScreen}
          options={{
            title: "Meals Category",
            tabBarLabel: "Meals",
            tabBarIcon: ({ color , size }) => (
              <Ionicons name="attach-outline" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

import { NavigationContainer } from "@react-navigation/native";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealsCategoryScreen from "../components/MealsItem";


const Stack = createNativeStackNavigator();

function CategoriesMealsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "All Categories" }}
        />
        <Stack.Screen
          name="MealsCategory"
          component={MealsCategoryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { Ionicons } from '@expo/vector-icons';
import { globalColors } from './styles';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={{
      tabBarActiveTintColor : globalColors.error700,
      tabBarBackground : () => null, // This will remove the default background
      tabBarStyle: { backgroundColor: globalColors.primary500, 
        borderTopColor: globalColors.accent500,
        borderTopWidth: 2,
        height: 60,
        paddingBottom: 5,
        paddingTop: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        zIndex: 1000,
      },
      headerStyle: { backgroundColor: globalColors.primary500, 
      },
    }}>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="hourglass" size={size} color={color} />
        ),
        tabBarLabel: 'Recent',
      }}/>
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" size={size} color={color} />
          )
        }}/>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{
            headerShown: false,
        
          }} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

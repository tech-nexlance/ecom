// App.js
import React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

//the bottom navigation bar
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'; // Ionicons name for Home icon
          } else if (route.name === 'Categories') {
            iconName = 'list'; // Ionicons name for Categories icon
          } else if (route.name === 'Cart') {
            iconName = 'cart'; // Ionicons name for Cart icon
          }

          // Return the icon component with the specified name, color, and size
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }}  component={HomeScreen} />
      <Tab.Screen name="Categories" options={{ headerShown: false }}  component={CategoriesScreen} />
      <Tab.Screen name="Cart" options={{ headerShown: false }}  component={CartScreen} />
    </Tab.Navigator>
  );
}


//page routes are described inside the name parameters so you can navigate to them using navigate function
export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Homescreen" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

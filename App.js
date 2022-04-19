import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons"
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => { 
  return ( // nested nello stack navigator
    <Drawer.Navigator screenOptions={{ // default
      headerStyle: { backgroundColor: "#cccccc" },
      sceneContainerStyle: { backgroundColor: "#84817a" }, // uguale a contentStyle, ma col drawer ha un nome diverso
      drawerActiveBackgroundColor: "#cccccc",
      drawerActiveTintColor: "black",
      drawerInactiveTintColor: "black",
      drawerContentStyle: { backgroundColor: "#84817a" }
    }}>
      <Drawer.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{ title: "All Categories",
        drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
        }} 
      />
      <Drawer.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{ title: "Favorites",
        drawerIcon: ({color, size}) => <Ionicons name="heart" color={color} size={size} />
        }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ // default
          headerStyle: { backgroundColor: "#cccccc" },
          contentStyle: { backgroundColor: "#84817a" }
        }}>
          {/* il primo è quello che viene mostrato appena apriamo l'app */}
          <Stack.Screen 
            name="Drawer" 
            component={DrawerNavigator} 
            options={{ headerShown: false }}
            // options={{ title: "All Categories" }} non serve col drawer
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});

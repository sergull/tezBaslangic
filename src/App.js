import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import FeedScreen from "./screens/Feed/Feed";
import LogInScreen from "./screens/Log/LogIn";
import SignInScreen from "./screens/Log/SignIn";
import StartScreen from "./screens/Start";
import ForgotPasswordScreen from "./screens/ForgotPassword/ForgotPassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./screens/Profile/Profile";
import ListScreen from "./screens/List/List";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const HomeStackScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName="FeedScreen"
        screenOptions={{
          //headerShown: false,
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "#68B984",

          tabBarStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            title: "Anasayfa",
            headerTintColor: "#68B984",
            headerRight: () => (
              <Ionicons name="add-circle-outline" size={30} color="#68B984" />
            ),

            tabBarIcon: () => (
              <Ionicons name="md-home-outline" size={30} color="#d9d9d8" />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            title: "Eksikler",
            headerTintColor: "#68B984",

            tabBarIcon: () => (
              <Ionicons name="md-list-outline" size={30} color="#d9d9d8" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profil",
            headerTintColor: "#68B984",
            headerRight: () => (
              <Ionicons
                name="md-exit-outline"
                size={30}
                color="#68B984"
                onPress={() => auth().signOut()}
              />
            ),
            tabBarIcon: () => (
              <Ionicons name="person-outline" size={30} color="#d9d9d8" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const WelcomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
      </Stack.Navigator>
    );
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    );
  };
   {/* <Stack.Screen name="WelcomeStack" component={WelcomeStack} />
      <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} /> */}

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
     
      <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

{/* <Tab.Navigator
        initialRouteName="FeedScreen"
        screenOptions={{
          //headerShown: false,
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "#68B984",

          tabBarStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            title: "Anasayfa",
            headerTintColor: "#68B984",
            headerRight: () => (
              <Ionicons name="add-circle-outline" size={30} color="#68B984" />
            ),

            tabBarIcon: () => (
              <Ionicons name="md-home-outline" size={30} color="#d9d9d8" />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            title: "Eksikler",
            headerTintColor: "#68B984",

            tabBarIcon: () => (
              <Ionicons name="md-list-outline" size={30} color="#d9d9d8" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profil",
            headerTintColor: "#68B984",
            headerRight: () => (
              <Ionicons
                name="md-exit-outline"
                size={30}
                color="#68B984"
                onPress={() => auth().signOut()}
              />
            ),
            tabBarIcon: () => (
              <Ionicons name="person-outline" size={30} color="#d9d9d8" />
            ),
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from "./src/screens/Auth/SignIn/index";
// import Dashboard from './src/screens/Home/Dashboard';
import Achieve from './src/screens/Home/KPIByMonth/Achieve/index';
import AvgIncomeByMonth from './src/screens/Home/AvgIncome/AvgIncomeByMonth/index';
import { AchieveScreen, AvgIncomeByMonthScreen, ExpectedSalaryScreen, HomeScreen, KPIByMonthDashboardScreen, RecoveryPasswordScreen, SigninScreen, UpdatePasswordScreen } from './src/screens';

// import DashBoard from './src/screens/Home/KPIByMonth/DashBoard';
// import Dashboard from './src/screens/Home/SalaryByMonth/Dashboard';
// import Dashboard from './src/screens/Home/AvgIncome/Dashboard';
import SubscriberQuality from './src/screens/Home/SubscriberQuality/index';

const Stack = createStackNavigator();
// const AuthStack = createStackNavigator();s

const GDVStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="KPIByMonth" component={KPIByMonthDashboardScreen} />
      <Stack.Screen name="AvgIncome" component={AvgIncomeByMonthScreen} />
      <Stack.Screen name="Achieve" component={AchieveScreen} />
      <Stack.Screen name="ExpectedSalary" component={ExpectedSalaryScreen} />

      {/* ExpectedSalary */}
      {/* <Stack.Screen name="AvgIncome" component={KPIByMonthDashboardScreen} /> */}
      {/* AvgIncome */}
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="District" component={DistrictScreen} />
      <Stack.Screen name="Station" component={StationScreen} />
      <Stack.Screen name="Aqi" component={AQIScreen} />
      <Stack.Screen name="Test" component={TestScreen} /> */}
    </Stack.Navigator>
  )
}

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SigninScreen} />
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="District" component={DistrictScreen} />
      <Stack.Screen name="Station" component={StationScreen} />
      <Stack.Screen name="Aqi" component={AQIScreen} />
      <Stack.Screen name="Test" component={TestScreen} /> */}
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={AuthStack} />
        <Stack.Screen name="Home" component={GDVStack} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AchieveScreen, AvgIncomeByMonthScreen, ExpectedSalaryScreen, HomeScreen, KPIByMonthDashboardScreen, RecoveryPasswordScreen, SalaryByMonthContractScreen, SalaryByMonthDashboardScreen, SalaryByMonthFixedwageScreen, SigninScreen, SubscriberQualityScreen, UpdatePasswordScreen } from './src/screens';
const Stack = createStackNavigator();
// const AuthStack = createStackNavigator();s

const GDVStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      {/* Home */}
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Home > KPI Tháng hiện tại */}
      <Stack.Screen name="KPIByMonthKPIByMonthDashboard" component={KPIByMonthDashboardScreen} />
      {/* Home > Lương theo tháng */}
      <Stack.Screen name="SalaryByMonthDashboard" component={SalaryByMonthDashboardScreen} /> 
      {/* Home > Lương Theo Tháng > Lương cố định */}
      <Stack.Screen name="SalaryByMonthFixedwage" component={SalaryByMonthFixedwageScreen} /> 
       {/* Home > Lương Theo Tháng > Lương cố định */}
      <Stack.Screen name="SalaryByMonthContract" component={SalaryByMonthContractScreen} />

      <Stack.Screen name="AvgIncome" component={AvgIncomeByMonthScreen} />
      <Stack.Screen name="SubscriberQuality" component={SubscriberQualityScreen}/>
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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from "./src/screens/Auth/SignIn/index";
// import Dashboard from './src/screens/Home/Dashboard';
import Achieve from './src/screens/Home/KPIByMonth/Achieve/index';
// import ExpectedSalary from './src/screens/Home/KPIByMonth/ExpectedSalary/index';
// import DashBoard from './src/screens/Home/KPIByMonth/DashBoard';
// import Dashboard from './src/screens/Home/SalaryByMonth/Dashboard';
// import Dashboard from './src/screens/Home/AvgIncome/Dashboard';

export default function App() {
  return <Achieve/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

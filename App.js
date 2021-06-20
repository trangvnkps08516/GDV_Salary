import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MenuItem } from './src/comps';
import Achieve from './src/screens/Home/KPIByMonth/Achieve/index';
// import UpdatePassword from "./src/screens/Profile/UpdatePassword/index";

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

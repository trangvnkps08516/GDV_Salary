import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UpdatePassword from './src/screens/Profile/UpdatePassword';
// import UpdatePassword from "./src/screens/Profile/UpdatePassword/index";

export default function App() {
  return <UpdatePassword/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

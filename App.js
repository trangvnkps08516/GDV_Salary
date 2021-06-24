import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AchieveScreen, AvgIncomeByMonthScreen, AvgIncomeDashboardScreen, ExpectedSalaryScreen, HomeScreen, KPIByMonthDashboardScreen, ProfileScreen, RecoveryPasswordScreen, SalaryByMonthContractScreen, SalaryByMonthDashboardScreen, SalaryByMonthFixedwageScreen, SignInScreen, SignOutScreen, SplashScreen, SubscriberQualityScreen, TransactionInfoScreen, UpdatePasswordScreen } from './src/screens';
import { colors } from './src/utils/Colors';
import { images } from './src/utils/Images';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator tabBarOptions={
      {
        activeTintColor: colors.primary,
        inactiveTintColor: '#A2A1A1'
      }
    }
    initialRouteName="Home"
    >
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => {
            return <Image style={{ width: size, height: size, tintColor: focused == false ? colors.grey : colors.primary }} resizeMode="cover" source={images.user} />
          }
        }} />
      <Tab.Screen
        name="Home"
        component={GDVStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => {
            return <Image style={{ width: size, height: size, tintColor: focused == false ? colors.grey : colors.primary }} resizeMode="cover" source={images.home} />
          }
        }} />
      <Tab.Screen
        name="SignOut"
        component={SignOutScreen}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color, size, focused }) => {
            return <Image style={{ width: size, height: size, tintColor: focused == false ? colors.grey : colors.primary }} resizeMode="cover" source={images.logout} />
          }
        }} />
    </Tab.Navigator>
  );
}

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />

    </Stack.Navigator>
  )
}

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
      {/* Home > Lương Theo Tháng > Lương khoán sản phẩm */}
      <Stack.Screen name="SalaryByMonthContract" component={SalaryByMonthContractScreen} />
      {/* Home > Bình Quân Thu Nhập */}
      <Stack.Screen name="AvgIncomeDashboard" component={AvgIncomeDashboardScreen} />
      {/* Home > Bình Quân Thu Nhập > Bình Quân Tháng & Tổng Thu Nhập*/}
      <Stack.Screen name="AvgIncomeByMonth" component={AvgIncomeByMonthScreen} />
      {/* AvgIncomeByMonth */}
      <Stack.Screen name="SubscriberQuality" component={SubscriberQualityScreen} />
        {/*  */}
      <Stack.Screen name="Achieve" component={AchieveScreen} />
      
      <Stack.Screen name="ExpectedSalary" component={ExpectedSalaryScreen} />
      {/* Home > Thông tin giao dịch */}
      <Stack.Screen name="TransactionInfo" component={TransactionInfoScreen} />

    </Stack.Navigator>
  )
}

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={AuthStack} />
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
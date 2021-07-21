// import all of screens path here

import React from 'react';

import Home from "./Home/Dashboard";
import KPIByMonthDashboard from "./Home/KPIByMonth/DashBoard";
import Achieve from "./Home/KPIByMonth/Achieve";
import ExpectedSalary from "./Home/KPIByMonth/ExpectedSalary";
import SubscriberList from "./Home/KPIByMonth/SubscriberList";
import SalaryByMonthDashboard from "./Home/SalaryByMonth/Dashboard";
import SalaryByMonthFixedwage from "./Home/SalaryByMonth/Fixedwage";
import SalaryByMonthContract from "./Home/SalaryByMonth/Contract";
import SalaryByMonthArrears from "./Home/SalaryByMonth/Arrears";
import AvgIncomeByMonth from "./Home/AvgIncome/AvgIncomeByMonth";
import TransactionInfo from "./Home/TransactionInfo";
import SubscriberQuality from "./Home/SubscriberQuality";
import Profile from "./Profile/Dashboard";
import UpdatePassword from "./Profile/UpdatePassword";
import UpdateProfile from "./Profile/UpdateProfile";

// Auth screen's path
import SignIn from "./Auth/SignIn";
import SignOut from "./SignOut";
import Splash from "./Auth/Splash";

// User's screen
export const HomeScreen = () => {return <Home />}
export const KPIByMonthDashboardScreen = () => {return <KPIByMonthDashboard />}
export const AchieveScreen = () => {return <Achieve />}
export const ExpectedSalaryScreen = () => {return <ExpectedSalary />}
export const SubscriberListScreen = () => {return <SubscriberList />}
export const SalaryByMonthDashboardScreen = () => {return <SalaryByMonthDashboard />}
export const SalaryByMonthFixedwageScreen = () => {return <SalaryByMonthFixedwage />}
export const SalaryByMonthContractScreen = () => {return <SalaryByMonthContract />}
export const SalaryByMonthArrearsScreen = () => {return <SalaryByMonthArrears />}
export const AvgIncomeByMonthScreen = () => {return <AvgIncomeByMonth />}
export const TransactionInfoScreen = () => {return <TransactionInfo />}
export const SubscriberQualityScreen = () => {return <SubscriberQuality />}
export const ProfileScreen = () => {return <Profile />}
export const UpdatePasswordScreen = () => {return <UpdatePassword />}
export const UpdateProfileScreen = () => {return <UpdateProfile />}

// Admin's screen


// Auth's screen
export const SignInScreen = () => {return <SignIn />}
export const SignOutScreen = () => {return <SignOut />}
export const SplashScreen = ()=>{return <Splash/>}
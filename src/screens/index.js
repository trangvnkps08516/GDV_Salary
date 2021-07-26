// import all of screens path here

import React from 'react';

import Home from "./GDVHome/Dashboard";
import KPIByMonthDashboard from "./GDVHome/KPIByMonth/DashBoard";
import Achieve from "./GDVHome/KPIByMonth/Achieve";
import ExpectedSalary from "./GDVHome/KPIByMonth/ExpectedSalary";
import SubscriberList from "./GDVHome/KPIByMonth/SubscriberList";
import SalaryByMonthDashboard from "./GDVHome/SalaryByMonth/Dashboard";
import SalaryByMonthFixedwage from "./GDVHome/SalaryByMonth/Fixedwage";
import SalaryByMonthContract from "./GDVHome/SalaryByMonth/Contract";
import SalaryByMonthArrears from "./GDVHome/SalaryByMonth/Arrears";
import AvgIncomeByMonth from "./GDVHome/AvgIncome/AvgIncomeByMonth";
import TransactionInfo from "./GDVHome/TransactionInfo";
import SubscriberQuality from "./GDVHome/SubscriberQuality";
import ProductivitySub from "./GDVHome/KPIByMonth/ProductivitySub";
import Profile from "./Profile/Dashboard";
import UpdatePassword from "./Profile/UpdatePassword";
import UpdateProfile from "./Profile/UpdateProfile";

// Auth screen's path
import SignIn from "./Auth/SignIn";
import SignOut from "./SignOut";
import Splash from "./Auth/Splash";
import TestTwo from './Test/Test';

// User's screen
export const HomeScreen = (route) => {return <Home route={route}/>}
export const KPIByMonthDashboardScreen = (route) => {return <KPIByMonthDashboard route={route}/>}
export const AchieveScreen = () => {return <Achieve />}
export const ExpectedSalaryScreen = () => {return <ExpectedSalary />}
export const SubscriberListScreen = () => {return <SubscriberList />}
export const SalaryByMonthDashboardScreen = (route) => {return <SalaryByMonthDashboard  route={route}/>}
export const SalaryByMonthFixedwageScreen = () => {return <SalaryByMonthFixedwage />}
export const SalaryByMonthContractScreen = () => {return <SalaryByMonthContract />}
export const SalaryByMonthArrearsScreen = () => {return <SalaryByMonthArrears />}
export const AvgIncomeByMonthScreen = () => {return <AvgIncomeByMonth />}
export const TransactionInfoScreen = () => {return <TransactionInfo />}
export const SubscriberQualityScreen = () => {return <SubscriberQuality />}
export const ProductivitySubScreen = () => {return <ProductivitySub />}
export const ProfileScreen = () => {return <Profile />}
export const UpdatePasswordScreen = () => {return <UpdatePassword />}
export const UpdateProfileScreen = () => {return <UpdateProfile />}

// Admin's screen


// Auth's screen
export const SignInScreen = () => {return <SignIn />}
export const SignOutScreen = () => {return <SignOut />}
export const SplashScreen = ()=>{return <Splash/>}

export const TestScreen = () => {return <TestTwo />}
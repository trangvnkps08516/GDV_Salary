// import all of screens path here

import React from 'react';

// ./Home/KPIByMonth/TempSalary/Dashboard ./Home/AvgIncome/AvgIncomeByQuarter
import Home from "./Home/Dashboard";
import KPIByMonthDashboard from "./Home/KPIByMonth/Dashboard"
import Achieve from "./Home/KPIByMonth/Achieve"
import ExpectedSalary from "./Home/KPIByMonth/ExpectedSalary/index"
import SalaryByMonthDashboard from "./Home/SalaryByMonth/Dashboard";
import SalaryByMonthFixedwage from "./Home/SalaryByMonth/Fixedwage";
import SalaryByMonthContract from "./Home/SalaryByMonth/Contract";
import SalaryByMonthArrears from "./Home/SalaryByMonth/Arrears";
import AvgIncomeDashboard from "./Home/AvgIncome/Dashboard"
import AvgIncomeByMonth from "./Home/AvgIncome/AvgIncomeByMonth";
// import AvgIncomeByQuarter from "./Home/AvgIncome/";
import SubscriberQuality from "./Home/SubscriberQuality"
import Profile from "./Profile/Dashboard"
import UpdatePassword from "./Profile/UpdatePassword"
import UpdateProfile from "./Profile/UpdateProfile"

import RecoveryPassword from './Auth/RecoveryPassword';
import SignIn from './Auth/SignIn';
import SignOut from './SignOut'

export const HomeScreen = () => {return <Home />}
export const KPIByMonthDashboardScreen = () => {return <KPIByMonthDashboard />}
export const AchieveScreen = () => {return <Achieve />}
export const ExpectedSalaryScreen = () => {return <ExpectedSalary />}
export const SalaryByMonthDashboardScreen = () => {return <SalaryByMonthDashboard />}
export const SalaryByMonthFixedwageScreen = () => {return <SalaryByMonthFixedwage />}
export const SalaryByMonthContractScreen = () => {return <SalaryByMonthContract />}
export const SalaryByMonthArrearsScreen = () => {return <SalaryByMonthArrears />}
export const AvgIncomeDashboardScreen = () => {return <AvgIncomeDashboard />}
export const AvgIncomeByMonthScreen = () => {return <AvgIncomeByMonth />}
// export const EncourageSalaryScreen = () => <EncourageSalary />
export const SubscriberQualityScreen = () => {return <SubscriberQuality />}
export const ProfileScreen = () => {return <Profile />}
export const UpdatePasswordScreen = () => {return <UpdatePassword />}
export const UpdateProfileScreen = () => {return <UpdateProfile />}

export const RecoveryPasswordScreen = () => {return <RecoveryPassword />}
export const SigninScreen = () => {return <SignIn />}
export const SignOutScreen = () => {return <SignOut />}
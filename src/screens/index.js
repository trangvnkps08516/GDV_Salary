// import all of screens path here

import Home from "./Home/Dashboard";
import KPIByMonthDashboard from "./Home/KPIByMonth/DashBoard"
import Achieve from "./Home/KPIByMonth/Achieve"
import TempSalaryDashboard from "./Home/KPIByMonth/TempSalary/Dashboard"
import TempSalaryFixedwage from "./Home/KPIByMonth/TempSalary/Fixedwage"
import TempSalaryContract from "./Home/KPIByMonth/TempSalary/Contract"
import SalaryByMonthDashboard from "./Home/SalaryByMonth/Dashboard";
import SalaryByMonthFixedwage from "./Home/SalaryByMonth/Fixedwage";
import SalaryByMonthContract from "./Home/SalaryByMonth/Contract";
import SalaryByMonthArrears from "./Home/SalaryByMonth/Arrears";
import AvgIncomeDashboard from "./Home/AvgIncome/Dashboard"
import AvgIncomeByMonth from "./Home/AvgIncome/AvgIncomeByMonth";
import AvgIncomeByQuarter from "./Home/AvgIncome/AvgIncomeByQuarter";
import SubscriberQuality from "./Home/SubscriberQuality"
import Profile from "./Profile/Dashboard"
import UpdatePassword from "./Profile/UpdatePassword"
import UpdateProfile from "./Profile/UpdateProfile"

import RecoveryPassword from './Auth/RecoveryPassword';
import SignIn from './Auth/SignIn';
import SignOut from './SignOut'

export const HomeScreen = () => {return <Home />}
export const KPIByMonthDashboardScreen = () => <KPIByMonthDashboard />
export const AchieveScreen = () => <Achieve />
export const TempSalaryDashboardScreen = () => <TempSalaryDashboard />
export const TempSalaryContractScreen = () => <TempSalaryContract />
export const TempSalaryFixedwageScreen = () => <TempSalaryFixedwage />
export const SalaryByMonthDashboardScreen = () => <SalaryByMonthDashboard />
export const SalaryByMonthFixedwageScreen = () => <SalaryByMonthFixedwage />
export const SalaryByMonthContractScreen = () => <SalaryByMonthContract />
export const SalaryByMonthArrearsScreen = () => <SalaryByMonthArrears />
export const AvgIncomeDashboardScreen = () => <AvgIncomeDashboard />
export const AvgIncomeByMonthScreen = () => <AvgIncomeByMonth />
export const AvgIncomeByQuarterScreen = () => <AvgIncomeByQuarter />
export const SubscriberQualityScreen = () => <SubscriberQuality />
export const ProfileScreen = () => <Profile />
export const UpdatePasswordScreen = () => <UpdatePassword />
export const UpdateProfileScreen = () => <UpdateProfile />

export const RecoveryPasswordScreen = () => <RecoveryPassword />
export const SigninScreen = () => <SignIn />
export const SignOutScreen = () => <SignOut />
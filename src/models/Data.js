// Home > KPI Tháng hiện tại | getKPIByMonthDashboard
export const KPIByMonthDashboard = {
  "dateRange": "",
  "achiveKPI": 0,
  "tempSalary": 0
}

// Home > KPI Tháng hiện tại > KPI Đạt Được | getKPIByMonthAchieve
export const KPIByMonthAchieve = {
  "dateRange": "",
  "sumKpi": 0,
  "prePaid": "",
  "postPaid": "",
  "vas": "",
  "importantKpi": "",
  "retailSales": 0,
  "ratePrePaid": "",
  "ratePostPaid": "",
}

// Home > KPI Tháng hiện tại > Tổng lương dự kiến | getTempSalaryDashboard
export const TempSalaryDashboard = {
  "dateRange": "",
  "expectedSalary": "",
  "permanentSalary": 0,
  "contractSalary": 0,
  "prePaid": 0,
  "postPaid": 0,
  "vas": 0,
  "otherService": 0,
  "terminalDevice": 0,
}

// Home > KPI Tháng hiện tại > Lương tạm tính | getDetailTempContract
export const DetailTempContract = {
  "dateRange": "",
  "expectedSalary": 0,
  "permanentSalary": 0,
  "contractSalary": 0,
  "prePaid": 0,
  "postPaid": 0,
  "vas": 0,
  "otherService": 0,
  "terminalDevice": 0
}

// Home > Lương Theo Tháng | getSalaryByMonth
export const SalaryByMonth = {
  "status": "",
  "monthlySalary": 0,
  "permanentSalary": 0,
  "contractSalary": 0,
  "incentiveCost": 0,
  "sanctionCost": 0,
  "others": 0
}

// Home > Lương Theo Tháng > Lương Khoán | getContractSalaryByMonth
export const ContractSalaryByMonth = {
  "status": "",
  "contractSalary": "",
  "prePaid": "",
  "postPaid": "",
  "vas": "",
  "postage": "",
  "terminalDevice": "",
  "otherService": "",
  "arrears": ""
}

// Home > Bình Quân Thu Nhập | getAvgIncomeDashboard
export const AvgIncomeDashboard = {
  "notification": "",
  "avgIncomeByMonth": 0,
  "totalIncome": 0
}

// Home > Bình Quân Thu Nhập > Bình Quân Tháng & Tổng Thu Nhập | getAvgIncomeByMonth
export const M_AvgIncomeByMonth = {
  "notification": "",
  "avgByMonth": 0,
  "avgPermanentSalary": 0,
  "avgContractSalary": 0,
  "avgExpenIncentive": 0,
  "avgOtherExpen": 0,
  "totalIncome": 0,
  "totalPermanentSalar": 0,
  "totalContractSalary": 0,
  "totalExpenIncentive": 0,
  "totalOtherExpen": 0
}

// Home > Chất Lượng Thuê Bao | getSubscriberQuality
export const M_SubscriberQuality = {
  "beginMonth": "",
  "endMonth": "",
  "debtPercent": 0,
  "totalDebtNinety": 0,
  "totalRevenue": 0,
  "newSubPrePaid": 0,
  "revokeAmount": 0,
  "preToPostPaid": 0,
  "denyTwoC": 0
}

// Home > Thông tin giao dịch | getTransactionInfo
export const Transactioninfo = {
  "customerAmount": 0,
  "dealingsCount": 0,
  "preToPostPaid": 0,
  "denyTwoC": 0
}

// Profile | getProfile
export const Profile = {
  "id": null,
  "userName": "",
  "password": "",
  "displayName": "",
  "status": "",
  "userGroupId": {
    "id": null,
    "code": "",
    "description": ""
  },
  "shopId": {
    "id": null,
    "shopCode": "",
    "shopName": "",
    "shopTypeId": null,
    "parentShopId": null
  },
  "gdvId": {
    "id": null,
    "maGDV": "",
    "fullName": ""
  },
  "isLDap": null,
  "phoneNumber": null,
  "avatar": ""
}

//Login | login

export const User = {
  "accessToken": "",
  "expiredAt": "",
  "id": "",
  "refreshExpiredAt": "",
  "refreshToken": "",
  "userId": {
    "avatar": "",
    "displayName": "",
    "gdvId": {
      "fullName": "",
      "id": "",
      "maGDV": "",
    },
    "id": "",
    "isLDap": "",
    "password": "",
    "phoneNumber": "",
    "shopId": {
      "id": "",
      "parentShopId": "",
      "shopCode": "",
      "shopName": "",
      "shopTypeId": "",
    },
    "status": "",
    "userGroupId": {
      "code": "",
      "description": "",
      "id": "",
    },
    "userName": ""
  }
}

export const UserObj = {
  "avatar": "",
  "displayName": "",
  "gdvId": {
    "fullName": "",
    "id": "",
    "maGDV": "",
  },
  "id": "",
  "isLDap": "",
  "password": "",
  "phoneNumber": "",
  "shopId": {
    "id": "",
    "parentShopId": "",
    "shopCode": "",
    "shopName": "",
    "shopTypeId": "",
  },
  "status": "",
  "userGroupId": {
    "code": "",
    "description": "",
    "id": "",
  },
  "userName": "",
}
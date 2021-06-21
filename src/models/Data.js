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
    "contractSalary": 0,
    "prePaid": 0,
    "postPaid": 0,
    "vas": 0,
    "postage": 0,
    "terminalDevice": 0,
    "otherService": 0,
    "arrears": 0
}

// Home > Bình Quân Thu Nhập | getAvgIncomeDashboard
export const AvgIncomeDashboard = {
    "notification": "",
    "avgIncomeByMonth": 0,
    "totalIncome": 0
}

// Home > Bình Quân Thu Nhập > Bình Quân Tháng & Tổng Thu Nhập | getAvgIncomeByMonth
export const AvgIncomeByMonth = {
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
export const SubscriberQuality = {
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
export const TransactionInfo = {
    "customerAmount": 0,
    "dealingsCount": 0,
    "preToPostPaid": 0,
    "denyTwoC": 0
}

// Profile | getProfile
export const Profile = {
    "fullName": "",
    "empCode": "",
    "avatar": "",
    'beginDate': "",
    "workPlace": "",
    "tellerRating": "",
    "storeRating": ""
}

//Login | login

export const User= {
    "id": 0,
    "accessToken": "",
    "refreshToken": "",
    "userId": {
      "id": 0,
      "userName": "",
      "password": null,
      "displayName": "",
      "status": "",
      "userGroupId": {
        "id": 0,
        "code": "",
        "description": ""
      },
      "shopId": {
        "id": 0,
        "shopCode": "",
        "shopName": "",
        "shopTypeId": 0,
        "parentShopId": shopId
      },
      "gdvId": {
        "id": 0,
        "maGDV": "",
        "fullName": ""
      } , "isLDap": 0
    },
    "expiredAt": 0,
    "refreshExpiredAt": 0
  }
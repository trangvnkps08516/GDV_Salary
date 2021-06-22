import { GET, POST, PUT, PATCH, DELETE } from "./method";

// 1. Login Screen
export const login = async (userName, password) => {
    const data = {
        message: '',
        status: '',
        data: null,
        loading: null,
        error: {}
    }

    return data;
}

// 2. Profile Screen
export const getProfile = async () => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 3. Home > KPI Tháng hiện tại
export const getKPIByMonthDashboard = async () => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 4. Home > KPI Tháng hiện tại > KPI Đạt Được
export const getKPIByMonthAchieve = () => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 5. Home > KPI Tháng hiện tại > Tổng lương dự kiến
export const getTempSalaryDashboard = () => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 6. Home > KPI Tháng hiện tại > Lương tạm tính
export const getDetailTempContract = () => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 7. Home > Lương Theo Tháng
export const getSalaryByMonth = (month) => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 8. Home > Lương Theo Tháng > Lương Khoán
export const getContractSalaryByMonth = (month) => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 9. Home > Bình Quân Thu Nhập
export const getAvgIncomeDashboard = (beginMonth, endMonth) => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 10. Home > Bình Quân Thu Nhập > Bình Quân Tháng & Tổng Thu Nhập
export const getAvgIncomeByMonth = (beginMonth, endMonth) => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 11. Home > Chất Lượng Thuê Bao
export const getSubscriberQuality = () => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 12. Home > Thông tin giao dịch
export const getTransactionInfo = (month) => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 13. Profile > UpdateProfile
export const updateProfile = (user) => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 14. RecoverPassword
export const recoveryPassword = (userName, phoneNumber) => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}

// 15. UpdatePassword
export const updatePassword = (oldPassword, newPassword, phoneNumber) => {
    const data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }



    return data;
}
import { GET, POST, PUT, PATCH, DELETE } from "./method";
import { baseUrl } from "./untils";
import axios from "axios"

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
    let data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }
    await axios({
        method: "GET",
        url: "http://hochiminh.mobifone.vn/luongGDV/api/dashBoard/getKPIByMonthDashboard",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 1
        }

    }).then((res) => {
        if (res.status == 200) {
            if (Object.values(res.data).length > 0) {
                data = {
                    'data': res.data.data,
                    'isLoading': false,
                    'status': 'success',
                    'length': Object.values(res.data).length,
                    'error': null
                }
            }
        }
    }).catch(async (error) => {
        if (error) {
            data = {
                'message': error.response.data.message,
                'isLoading': false,
                'status': 'failed',
                'length': 0,
                'error': error.response.data
            }
        }

    });
    return data;

}

// 4. Home > KPI Tháng hiện tại > KPI Đạt Được
export const getKPIByMonthAchieve = async () => {
    let data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }
    await axios({
        method: "GET",
        url: "http://hochiminh.mobifone.vn/luongGDV/api/actionItemKpi/getKPIByMonthAchieve",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 1
        }

    }).then((res) => {
        if (res.status == 200) {
            if (Object.values(res.data).length > 0) {
                data = {
                    'data': res.data.data,
                    'isLoading': false,
                    'status': 'success',
                    'length': Object.values(res.data).length,
                    'error': null
                }
            }
        }
    }).catch(async (error) => {
        if (error) {
            data = {
                'message': error.response.data.message,
                'isLoading': false,
                'status': 'failed',
                'length': 0,
                'error': error.response.data
            }
        }

    });
    return data;

}

// 5. Home > KPI Tháng hiện tại > Tổng lương dự kiến
export const getTempSalary = async() => {
    let data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }
    await axios({
        method: "GET",
        url: "http://hochiminh.mobifone.vn/luongGDV/api/actionItemKpi/getTempSalary",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 1
        }

    }).then((res) => {
        if (res.status == 200) {
            if (Object.values(res.data).length > 0) {
                data = {
                    'data': res.data.data,
                    'isLoading': false,
                    'status': 'success',
                    'length': Object.values(res.data).length,
                    'error': null
                }
            }
        }
    }).catch(async (error) => {
        if (error) {
            data = {
                'message': error.response.data.message,
                'isLoading': false,
                'status': 'failed',
                'length': 0,
                'error': error.response.data
            }
        }

    });
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

// 8. Home > Lương Theo Tháng > Lương Khoán sản phẩm    
export const getContractSalaryByMonth = async(month) => {
    let data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }
    await axios({
        method: "GET",
        url: `${baseUrl}actionItemKpi/getContractSalaryByMonth?month=01/${month}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 1
        }

    }).then((res) => {
        if (res.status == 200) {
            if (Object.values(res.data).length > 0) {
                data = {
                    'data': res.data.data,
                    'isLoading': false,
                    'status': 'success',
                    'length': Object.values(res.data).length,
                    'error': null
                }
            }
        }
    }).catch(async (error) => {
        if (error) {
            data = {
                'message': error.response.data.message,
                'isLoading': false,
                'status': 'failed',
                'length': 0,
                'error': error.response.data
            }
        }

    });
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
export const getAvgIncomeByMonth = async(beginMonth, endMonth) => {
  
    let data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }
    await axios({
        method: "GET",
        url: `${baseUrl}actionItemKpi/getAvgIncomeByMonth?fromMonth=01/${beginMonth}&toMonth=01/${endMonth}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 1
        }

    }).then((res) => {
        if (res.status == 200) {
            if (Object.values(res.data).length > 0) {
                data = {
                    'data': res.data.data,
                    'isLoading': false,
                    'status': 'success',
                    'length': Object.values(res.data).length,
                    'error': null
                }
            }
        }
    }).catch(async (error) => {
        if (error) {
            data = {
                'message': error.response.data.message,
                'isLoading': false,
                'status': 'failed',
                'length': 0,
                'error': error.response.data
            }
        }

    });
    return data;
}

// 11. Home > Chất Lượng Thuê Bao
export const getSubscriberQuality = async () => {
    let data = {
        message: '',
        status: '',
        res: null,
        loading: null,
        error: {}
    }
    await axios({
        method: "GET",
        url: "http://hochiminh.mobifone.vn/luongGDV/api/dashBoard/getSubscriberQuality",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 1
        }

    }).then((res) => {
        if (res.status == 200) {
            if (Object.values(res.data).length > 0) {
                data = {
                    'data': res.data.data,
                    'isLoading': false,
                    'status': 'success',
                    'length': Object.values(res.data).length,
                    'error': null
                }
            }
        }
    }).catch(async (error) => {
        if (error) {
            data = {
                'message': error.response.data.message,
                'isLoading': false,
                'status': 'failed',
                'length': 0,
                'error': error.response.data
            }
        }

    });
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
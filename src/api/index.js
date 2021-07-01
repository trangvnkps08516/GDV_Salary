import { GET, POST, PUT, PATCH, DELETE } from "./method";
import { baseUrl } from "./untils";
import axios from "axios";
import { _removeData, _retrieveData, _storeData } from "../utils/Storage";
import { Alert } from "react-native";

// 1. Login Screen
export const login = async (userName, password) => {
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: POST,
    url: `${baseUrl}login?password=${password}&userName=${userName}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "token",
    },
  })
    .then(async (res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
          await _storeData("userInfo", res.data);
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};

// 2. Profile Screen
export const getProfile = async (navigation) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{
    if(data!=null){
      token = data.accessToken
    }else{
      navigation.navigate("SignIn")
    }
  });
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url:  `${baseUrl}user/getProfile`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error,
        };
      }
    });
  return data;
};

// 3. Home > KPI Tháng hiện tại
export const getKPIByMonthDashboard = async (navigation) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{
    if(data!=null){
      token = data.accessToken
    }else{
      navigation.navigate("SignIn")
    }
  });
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url:  `${baseUrl}dashBoard/getKPIByMonthDashboard`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};

// 4. Home > KPI Tháng hiện tại > KPI Đạt Được
export const getKPIByMonthAchieve = async (navigation) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{
    if(data!=null){
      token = data.accessToken
    }else{
      navigation.navigate("SignIn")
    }
  });

  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url:  `${baseUrl}actionItemKpi/getKPIByMonthAchieve`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};

// 5. Home > KPI Tháng hiện tại > Tổng lương dự kiến
export const getTempSalary = async (navigation) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{
    if(data!=null){
      token = data.accessToken
    }else{
      navigation.navigate("SignIn")
    }
  });
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: `${baseUrl}actionItemKpi/getTempSalary`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};

// 7. Home > Lương Theo Tháng
export const getSalaryByMonth = async (month,navigation) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{token = data.accessToken});

  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };

  await axios({
    method: "GET",
    url: `${baseUrl}dashBoard/getSalaryByMonth?month=01/${month}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });

  return data;
};

// 8. Home > Lương Theo Tháng > Lương Khoán sản phẩm
export const getContractSalaryByMonth = async (month) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{token = data.accessToken});

  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: `${baseUrl}actionItemKpi/getContractSalaryByMonth?month=01/${month}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch((error) => {
      if (error) {
        data = {
          message: error,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};

// 9. Home > Bình Quân Thu Nhập
export const getAvgIncomeDashboard = async (beginMonth, endMonth) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{token = data.accessToken});

  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };

  await axios({
    method: "GET",
    url: `${baseUrl}dashBoard/getAvgIncomeDashboard?fromMonth=01/${beginMonth}&toMonth=01/${endMonth}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};

// 10. Home > Bình Quân Thu Nhập > Bình Quân Tháng & Tổng Thu Nhập
export const getAvgIncomeByMonth = async (beginMonth, endMonth) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{token = data.accessToken});

  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: `${baseUrl}actionItemKpi/getAvgIncomeByMonth?fromMonth=01/${beginMonth}&toMonth=01/${endMonth}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};

// 11. Home > Chất Lượng Thuê Bao
export const getSubscriberQuality = async () => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{token = data.accessToken});

  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: `${baseUrl}dashBoard/getSubscriberQuality`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};
// 12. Home > Thông tin giao dịch
export const getTransactionInfo = async (month) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{token = data.accessToken});

  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: `${baseUrl}dashBoard/getTransactionInfo?month=01/${month}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (Object.values(res.data).length > 0) {
          data = {
            data: res.data.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data).length,
            error: null,
          };
        }
      }
    })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};

// 13. Profile > UpdateProfile
export const updateProfile = async (formData) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{token = data.accessToken});

  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };

  await axios.post(
    `${baseUrl}user/updateProfile`, formData,
    {
      headers: {
        'Authorization': `${token}`,
        'content-type': "multipart/form-data"
      }
    }
  ).then((res) => {
    if (res.status == 202 || res.status == 200) {
      data = res;
    }
  }).catch((error) => {
  });

  return data;
};

// 14. UpdatePassword
export const updatePassword = async (oldPassword, newPassword) => {
  let token = "";
  await _retrieveData("userInfo").then((data)=>{token = data.accessToken});
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "PUT",
    url: `${baseUrl}user/update-password?newPassword=${newPassword}&oldPassword=${oldPassword}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  }).then(async (res) => {
    if (res.status == 200) {

      data = {
        data: res.data,
        isLoading: false,
        status: "success",
        length: Object.values(res.data).length,
        error: null,
      };
    }
  })
    .catch(async (error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });

  return data;
};

// 15. Sign Out
export const signoutUser = async (navigation) => {
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };

  await _retrieveData("userInfo").then(async (stoData) => {
    if (stoData != undefined) {
      let data = {
        message: "",
        status: "",
        res: null,
        loading: null,
        error: {},
      };
      let token = stoData.accesstoken;
      await axios({
        method: "GET",
        url: `${baseUrl}logout`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
        .then(async (res) => {
          if (res.status == 200) {

            if (Object.values(res.data).length > 0) {
              data = {
                data: res.data.data,
                isLoading: false,
                status: "success",
                length: Object.values(res.data).length,
                error: null,
              };
              await _storeData("userInfo", null);
            }
          }
        })
        .catch(async (error) => {
          await _storeData("userInfo", null);
          if (error) {
            data = {
              message: error.response.data.message,
              isLoading: false,
              status: "failed",
              length: 0,
              error: error.response.data,
            };
          }
        });
    } else {
    }
  });

  return data;
};



import { GET, POST, PUT, PATCH, DELETE } from "./method";
import { baseUrl } from "./untils";
import axios from "axios";
import { _removeData, _retrieveData } from "../utils/Storage";

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
    url: `http://hochiminh.mobifone.vn/luongGDV/api/login?password=${password}&userName=${userName}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "token",
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
export const getProfile = async () => {
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: "http://hochiminh.mobifone.vn/luongGDV/api/user/getProfile",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "1",
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
        //   console.log(error)
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
export const getKPIByMonthDashboard = async () => {
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: "http://hochiminh.mobifone.vn/luongGDV/api/dashBoard/getKPIByMonthDashboard",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 1,
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
export const getKPIByMonthAchieve = async () => {
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: "http://hochiminh.mobifone.vn/luongGDV/api/actionItemKpi/getKPIByMonthAchieve",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 1,
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
export const getTempSalary = async () => {
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: "http://hochiminh.mobifone.vn/luongGDV/api/actionItemKpi/getTempSalary",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 1,
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

// 6. Home > KPI Tháng hiện tại > Lương tạm tính
export const getDetailTempContract = () => {
  const data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };

  return data;
};

// 7. Home > Lương Theo Tháng
export const getSalaryByMonth = async (month) => {
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
      Authorization: 1,
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
      Authorization: 1,
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
      Authorization: 1,
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
      Authorization: 1,
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
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: "http://hochiminh.mobifone.vn/luongGDV/api/dashBoard/getSubscriberQuality",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 1,
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
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  await axios({
    method: "GET",
    url: `http://hochiminh.mobifone.vn/luongGDV/api/dashBoard/getTransactionInfo?month=01/${month}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 1,
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
  let data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };
  // {
  //   method: POST,
  //   url: `http://hochiminh.mobifone.vn/luongGDV/api/login?password=${password}&userName=${userName}`,
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: "token",
  //   },
  // }
  await axios({
    method: POST,
    url: `${baseUrl}/api/user/updateUserInfo`,
    data: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 1
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
    .catch((error) => {
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
  // .post(`${baseUrl}/api/user/updateUserInfo`, formData, {
  //   headers: {
  //     Authorization: 1,
  //     "content-type": "multipart/form-data",
  //   },
  // })

  return data;
};

// 14. RecoverPassword
export const recoveryPassword = (userName, phoneNumber) => {
  const data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };

  return data;
};

// 15. UpdatePassword
export const updatePassword = (oldPassword, newPassword, phoneNumber) => {
  const data = {
    message: "",
    status: "",
    res: null,
    loading: null,
    error: {},
  };

  return data;
};

// 15. UpdatePassword
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
      console.log(token);
      await axios({
        method: "GET",
        url: "http://hochiminh.mobifone.vn/luongGDV/api/logout",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: 1,
        },
      })
        .then(async (res) => {
          if (res.status == 200) {
            console.log(res);
            if (Object.values(res.data).length > 0) {
              data = {
                data: res.data.data,
                isLoading: false,
                status: "success",
                length: Object.values(res.data).length,
                error: null,
              };
              await _removeData(userInfo);
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
    } else {
      navigation.navigate("SignIn");
    }
  });

  return data;
};



// This file to define functions about logistics (Array, Timer, Compare,...)

import moment from "moment";
import { _retrieveData } from "./Storage";
import Toast from "react-native-toast-message";

export const thoundsandSep = (x) => {
  if (x != null || x!= undefined) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return "";
  }
}

export const checkn = (str = '') => {
  if (str == null || str== undefined) {
    return ""
  } else {
    let element;
    let index = 0;
    let strFrs = '';
    let strSnd = '';
    for (let i = 0; i < str.length; i++) {
      element = str[i];
      if (element == 'n') {
        index = i;
      }
    }

    if (typeof (index) != undefined) {
      strFrs = str.substr(0, index - 1);
      strSnd = str.substr(index + 1, str.length);
    }


    return strFrs + '\n' + strSnd;
  }
}

export const changeDate = (date = '') => {
  let month = Number.parseInt(date.substring(0, 2))
  let year = Number.parseInt(date.substring(3, date.length))

  let fMonth = '';
  let sMonth = '';
  let fYear = '';
  let sYear = '';
  let fDate = '';
  let sDate = '';

  if (month == 12) {
    fMonth = month;
    fYear = year;
    sMonth = '0' + 1;
    sYear = year + 1;
    fDate = fMonth + '/' + fYear;
    sDate = sMonth + '/' + sYear;
  }
  else if (month == 1) {
    fMonth = '0' + month;
    fYear = year;
    sMonth = '0' + (month + 1);
    sYear = year;
    fDate = fMonth + '/' + fYear;
    sDate = sMonth + '/' + sYear;
  }
  else {
    if (month < 10) {
      fMonth = '0' + month;
      fYear = year;
    } else {
      fMonth = month;
      fYear = year;
    }

    if ((month + 1) < 10) {
      sMonth = '0' + (month + 1);
      sYear = year;
    } else {
      sMonth = month + 1
      sYear = year;
    }

    fDate = fMonth + '/' + fYear;
    sDate = sMonth + '/' + sYear;
  }

  var data = {
    "firstMonth": fDate,
    "secondMonth": sDate
  }

  return data;

}

export const changeSecondDate = (date = '') => {
  let value = date.substring(6, date.length);
  let month = Number.parseInt(value.substring(0, 2))
  let year = Number.parseInt(value.substring(3, value.length))

  let fMonth = '';
  let sMonth = '';
  let fYear = '';
  let sYear = '';
  let fDate = '';
  let sDate = '';

  //month <=> secondMonth
  if (month == 1) {
    fMonth = 12;
    fYear = year - 1;
    sMonth = '0' + 1;
    sYear = year
    fDate = 12 + '/' + (year - 1);
    sDate = '01' + '/' + year;
  } else {
    if (month < 10) {
      sMonth = '0' + month;
      sYear = year;
    } else {
      sMonth = month;
      sYear = year;
    }

    if (month - 1 < 10) {
      fMonth = '0' + (month - 1);
      fYear = year;
    } else {
      fMonth = month - 1;
      fYear = year;
    }
    fDate = fMonth + '/' + fYear;
    sDate = sMonth + '/' + sYear;
  }

  var data = {
    "firstDate": fDate,
    "secondDate": sDate
  }

  return data;
}

export const getLoginInfo = async () => {
  await _retrieveData("userInfo").then((data) => { return data })
}

export const ToastNotif = (title, content, type, autohide, onhide) => {
  Toast.show({
    text1: title,
    text2: content,
    type: type,
    visibilityTime: 3000,
    autoHide: autohide,
    onHide: onhide
  })
}

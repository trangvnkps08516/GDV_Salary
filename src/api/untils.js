import { Platform } from "react-native";
import { _retrieveData } from "../utils/Storage";

const protocol = Platform.OS == "android" ? "http://" : "https://";
export const baseUrl = `${protocol}hochiminh.mobifone.vn/luongGDV/api/`;
export const imgUrl = `${protocol}hochiminh.mobifone.vn/luongGDV/`;
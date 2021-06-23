import { Platform } from "react-native";

const protocol = Platform.OS=="android" ? "http://" : "https://"; 
export const baseUrl = `${protocol}hochiminh.mobifone.vn/luongGDV/api/`;
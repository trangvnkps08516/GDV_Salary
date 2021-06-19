import axios from "axios"
import { Platform } from "react-native"

const protocol = Platform.OS == "android" ? "http://" : "https://"
export const base_url = `${protocol}`

import { token } from "@/constants/token";
import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

export const axiosInstance= axios.create({
    baseURL: base_url,
    headers:{
        Accept: "application/json",
        Authorization:`Bearer ${token}`
    }
})
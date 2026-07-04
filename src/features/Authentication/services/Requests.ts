import axios from "axios";
import { toast } from "sonner";
import {getToken,setToken} from "../../../cookies/authServices";
const baseUrl = import.meta.env.VITE_API_URL;



// Login Request Api Function
export   async function LoginRequest(e , userData ,setLoading,navigate) {  
  e.preventDefault();
  const formData = new FormData();
  formData.append("email", userData.email);
  formData.append("password", userData.password);

  setLoading(true);
  try {
    const response = await axios.post(`${baseUrl}/login`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const token = response.data.data.token;
    setToken(token);
    toast.success("Welcome Back !", { position: "bottom-left" });
    window.setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  } catch (error) {
    toast.error(error.response.data.message, { position: "bottom-left" });
  } finally {
    setLoading(false);
  }
}



  // Signup Request Api Function
 export  async function RegisterRequest(e, userData, setLoading, navigate) {
   e.preventDefault();

   const formData = new FormData();
   formData.append("name", userData.name);
   formData.append("email", userData.email);
   formData.append("password", userData.password);
   formData.append("password_confirmation", userData.password_confirmation);
   setLoading(true);
   try {
     const response = await axios.post(`${baseUrl}/register`, formData, {
       headers: {
         "Content-Type": "multipart/form-data",
       },
     });
     toast.success(
       "Congratulations! Your account has been successfully created.",
       { position: "bottom-left" },
     );
     window.setTimeout(() => {
       navigate("/login");
     }, 1000);
   } catch (error) {
     toast.error(error.response.data.message, { position: "bottom-left" });
   } finally {
     setLoading(false);
   }
 }



  // Reset Request Api Function
  export async function ForgetPassRequest(e,userData,setLoading,navigate) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", userData.email);

    setLoading(true);
    try {
      const response = await axios.post(
        `${baseUrl}/forgot-password`,
        formData,
        {
          headers: {
            "Content-Type" : "multipart/form-data" ,
          },
        },
      );
     const successMsg = response.data.message;
      toast.success(successMsg, { position: "bottom-left" });
      window.sessionStorage.setItem("userEmail",userData.email);
      window.setTimeout(() => {
        navigate("/verifyOtp");
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.message, { position: "bottom-left" });
    } finally {
      setLoading(false);
    }
  }

  
  // Verify OTP Api Request
  export async function VerifyOtp(e,userData,setLoading,navigate) {
    e.preventDefault();
    const formData = new FormData();
    if (window.sessionStorage.getItem("userEmail")){
      let userEmail : string = window.sessionStorage.getItem("userEmail");
      formData.append("email", userEmail);
    }
    formData.append("otp", userData.otp);
    formData.append("purpose", "password_reset");

    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/verify-otp`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
     const successMsg = response.data.message;
      toast.success(successMsg, { position: "bottom-left" });
      window.sessionStorage.setItem(
        "resetToken",
        response.data.data.reset_token,
      );
      window.setTimeout(() => {
        navigate("/resetPass");
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.message, { position: "bottom-left" });
    } finally {
      setLoading(false);
    }
  }




  // Reset Password
  export async function resetPassRequest(e,userData,setLoading,navigate) {
    e.preventDefault();
    let userEmail:string="";
    let resetToken:string="";
    const formData = new FormData();
    if (window.sessionStorage.getItem("userEmail")){
      userEmail  = window.sessionStorage.getItem("userEmail");
      formData.append("email", userEmail);
    }
    if (window.sessionStorage.getItem("resetToken")) {
      resetToken = window.sessionStorage.getItem("resetToken");
    }
    formData.append("email",userEmail);
    formData.append("password", userData.password);
    formData.append("password_confirmation", userData.password_confirmation);
    formData.append("reset_token",resetToken);
    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/reset-password`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
     const successMsg = response.data.message;
      toast.success(successMsg, { position: "bottom-left" });
      console.log(response.data.data)
      window.setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.message, { position: "bottom-left" });
    } finally {
      setLoading(false);
    }
  }

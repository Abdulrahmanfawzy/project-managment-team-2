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
  export async function ResetRequest(e,userData,setLoading,navigate) {
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
      window.setTimeout(() => {
        navigate("/resetPass");
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.message, { position: "bottom-left" });
    } finally {
      setLoading(false);
    }
  }

// Icons Lib
import { Check } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";
import { User } from "lucide-react";

//=== Icons Lib===
import AuthPagesNav from "../../../components/shared/AuthPagesNav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Loader from "../../../components/shared/Loader";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { VerifyOtp } from "../services/Requests";



export default function VerifyOTP({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [userData, setUserData] = useState({
    otp: "123456",
  });
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  

  return (
    <>
      <AuthPagesNav />
      <section className="mainContainer flex justify-center items-center min-h-[calc(100vh-82px)]">
        <div
          className={cn(
            "flex flex-col gap-6 w-full md:w-lg -mt-5 py-5",
            className,
          )}
          {...props}
        >
          <Card className="shadow-mainShadow py-5 px-7 outline-1 outline-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl capitalize">
                reset password
              </CardTitle>
              <CardDescription>Enter The OTP Code</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <FieldGroup>
                  {/* Email Input Field */}
                  <section className="text-center flex justify-center">
                    <InputOTP maxLength={6} id="otp-verification" 
                    value={userData.otp}
                    onChange={(e)=>{setUserData(e.target.value)}}
                    required>
                      <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator className="mx-2" />
                      <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </section>

                  {/*=== Email Input Field ===*/}

                  <Field>
                    <Button
                      type="submit"
                      className="bg-brand capitalize text-light! rounded-xl font-semibold cursor-pointer mb-3"
                      onClick={(e) =>
                        VerifyOtp(e, userData, setLoading, navigate)
                      }
                    >
                      verify
                      {loading && <Loader sizeNum={5} />}
                    </Button>

                    <FieldDescription className="text-center">
                      Remember your password?{" "}
                      {/* ####### Here We Can But Link Tag ######### */}
                      <Link
                        to="/signin"
                        className="text-brand decoration-0 font-semibold"
                      >
                        Sign In
                      </Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

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
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Loader from "../../../components/shared/Loader";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { ResetRequest } from "../services/Requests";
import { Link } from "react-router-dom";
export default function ResetPassword({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [userData, setUserData] = useState({
    email: "",
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
                  <section className="text-center">
                    <InputOTP maxLength={6} defaultValue="123456" className="p-3! bg-[#ddd]/50! text-center!">
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
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
                        ResetRequest(e, userData, setLoading, navigate)
                      }
                    >
                      reset
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

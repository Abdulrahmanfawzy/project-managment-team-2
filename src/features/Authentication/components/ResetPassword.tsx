// Icons Lib
import { setToken, getToken } from "./../../../cookies/authServices";
import { Check } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Loader from "../../../components/shared/Loader";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { LoginRequest } from "../services/Requests";
import { Link } from "react-router-dom";
import { resetPassRequest } from "../services/Requests";

export default function ResetPassword({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [userData, setUserData] = useState({
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <AuthPagesNav />
      <section className="mainContainer flex justify-center items-center min-h-[calc(100vh-82px)]">
        <div
          className={cn(
            "flex flex-col gap-6 w-full md:w-lg -mt-3 py-5",
            className,
          )}
          {...props}
        >
          <Card className="shadow-mainShadow py-5 px-7 outline-1 outline-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl capitalize">
                reset password
              </CardTitle>
              <CardDescription>Enter The New Pass Code</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                {/* Google Auth Field */}
                <FieldGroup>
                  {/* Password Field */}
                  <Field className="relative before:content-['Password'] before:absolute before:top-[-20%] before:left-[17px]  before:text-mutedText before:bg-white before:h-[1rem]">
                    <LockKeyhole
                      className="w-fit! absolute left-[16px] top-[50%] translate-y-[-50%] text-mutedText"
                      size={19}
                    />
                    <Input
                      id="password"
                      type="Password"
                      value={userData.password}
                      onChange={(e) => {
                        setUserData({ ...userData, password: e.target.value });
                      }}
                      placeholder="Password"
                      required
                      className="ps-10 pe-3 py-6 placeholder:text-mutedText"
                    />
                  </Field>
                  {/*=== Password Field ===*/}
                  {/* Password Field */}
                  <Field className="relative before:content-['Confirm_Password'] before:absolute before:top-[-20%] before:left-[17px]  before:text-mutedText before:bg-white before:h-[1rem]">
                    <LockKeyhole
                      className="w-fit! absolute left-[16px] top-[50%] translate-y-[-50%] text-mutedText"
                      size={19}
                    />
                    <Input
                      id="password"
                      type="Password"
                      value={userData.password_confirmation}
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          password_confirmation: e.target.value,
                        });
                      }}
                      placeholder="Password"
                      required
                      className="ps-10 pe-3 py-6 placeholder:text-mutedText"
                    />
                  </Field>
                  {/*=== Password Field ===*/}

                  <section className="flex">
                    {/* Forgot Password Link */}
                    <Link
                      to="/forgetPass"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-brand whitespace-nowrap"
                    >
                      Forgot your password?
                    </Link>
                    {/*=== Forgot Password Link ===*/}
                  </section>

                  <Field>
                    <Button
                      type="submit"
                      onClick={(e) =>
                        resetPassRequest(e, userData, setLoading, navigate)
                      }
                      className="bg-brand capitalize text-light! rounded-xl font-semibold cursor-pointer mb-3"
                    >
                      reset now
                      {loading && <Loader sizeNum={5} />}
                    </Button>
                    <FieldDescription className="text-center">
                      Don&apos;t have an account yet?{" "}
                      {/* ####### Here We Can But Link Tag ######### */}
                      <Link
                        to="/signup"
                        className="text-brand decoration-0 font-semibold"
                      >
                        Sign up
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

// Icons Lib
import { Check } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Mail } from "lucide-react";

//=== Icons Lib===
import AuthPagesNav from "./AuthPagesNav";
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

export default function Login({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
              <CardTitle className="text-3xl capitalize">sign in</CardTitle>
              <CardDescription>
                Welcome back, you’ve been missed!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                {/* Google Auth Field */}
                <FieldGroup>
                  <Field>
                    <Button
                      variant="outline"
                      type="button"
                      className="capitalize py-5 bg-white! cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="100%"
                        height="100%"
                      >
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.5 24c0-1.65-.15-3.24-.42-4.78H24v9.03h12.75c-.55 2.96-2.22 5.48-4.71 7.15l7.32 5.68C43.64 36.85 46.5 31.02 46.5 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.98-6.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.32-5.68c-2.03 1.36-4.64 2.18-8.57 2.18-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                      </svg>
                      sign with google
                    </Button>
                  </Field>
                  {/*=== Google Auth Field ===*/}

                  <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card my-0.1">
                    OR
                  </FieldSeparator>

                  {/* Email Input Field */}
                  <Field className="relative before:content-['Email']  before:absolute before:top-[-20%] before:left-[17px]  before:text-mutedText before:bg-white before:h-[1rem]">
                    <Mail
                      className="w-fit! absolute left-[16px] top-[50%] translate-y-[-50%] text-mutedText"
                      size={19}
                    />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="ps-10 pe-3 py-6    placeholder:text-mutedText"
                    />
                  </Field>

                  {/*=== Email Input Field ===*/}

                  {/* Password Field */}
                  <Field className="relative before:content-['Password'] before:absolute before:top-[-20%] before:left-[17px]  before:text-mutedText before:bg-white before:h-[1rem]">
                    <LockKeyhole
                      className="w-fit! absolute left-[16px] top-[50%] translate-y-[-50%] text-mutedText"
                      size={19}
                    />
                    <Input
                      id="password"
                      type="Password"
                      placeholder="Password"
                      required
                      className="ps-10 pe-3 py-6 placeholder:text-mutedText"
                    />
                  </Field>
                  {/*=== Password Field ===*/}

                  <section className="flex">
                    {/* CheckBox */}
                    <Field orientation="horizontal">
                      <Checkbox
                        id="terms-checkbox"
                        name="terms-checkbox"
                        className="cursor-pointer"
                      />
                      <Label
                        htmlFor="terms-checkbox"
                        className="capitalize text-mutedText font-normal cursor-pointer"
                      >
                        remember me
                      </Label>
                    </Field>
                    {/*=== CheckBox ===*/}

                    {/* Forgot Password Link */}
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-brand whitespace-nowrap"
                    >
                      Forgot your password?
                    </a>
                    {/*=== Forgot Password Link ===*/}
                  </section>

                  <Field>
                    <Button
                      type="submit"
                      className="bg-brand capitalize text-light! rounded-xl font-semibold cursor-pointer mb-3"
                    >
                      Log in
                    </Button>
                    <FieldDescription className="text-center">
                      Don&apos;t have an account yet?{" "}
                      {/* ####### Here We Can But Link Tag ######### */}
                      <a
                        href="#"
                        className="text-brand decoration-0 font-semibold"
                      >
                        Sign up
                      </a>
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

"use client";

import { useState } from "react";
import Image from "next/image";
import LoginChoice from "@/Components/Login/LoginChoice";
import EmailForm from "@/Components/Login/EmailForm";
import OtpForm from "@/Components/Login/OtpForm";

export default function page() {
  const [step, setStep] = useState("choice");
  const [email, setEmail] = useState("");

  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row px-17 py-20 rounded-lg bg-slate-300">
      {/* Left Section - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/images/building-lake.jpg"
          alt="Login Illustration"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>

      {/* Right Section */}
      <div className=" rounded-lg w-full md:w-1/2 flex items-center justify-center bg-white px-8 pt-40 md:pt-0 md:px-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center md:text-left text-[#004274]">Login</h1>
          </div>

          {step === "choice" && (
            <LoginChoice onEmailClick={() => setStep("email")} />
          )}

          {step === "email" && (
            <EmailForm
              email={email}
              setEmail={setEmail}
              onSendOtp={() => setStep("otp")}
            />
          )}

          {step === "otp" && <OtpForm email={email} />}
        </div>
      </div>
    </div>
  );
}

"use client";

export default function OtpForm({ email }) {
  return (
    <>
      <p className="text-sm mb-2 text-gray-600">
        We sent an OTP to <span className="font-semibold">{email}</span>
      </p>
      <input
        type="text"
        placeholder="Enter OTP"
        className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-[#004274] mb-4"
      />
      <button className="w-full bg-[#004274] text-white py-3 rounded-lg hover:bg-[#003259] transition">
        Verify & Login
      </button>
    </>
  );
}

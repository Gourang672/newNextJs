"use client";

export default function EmailForm({ email, setEmail, onSendOtp }) {
  return (
    <>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-[#004274] mb-4"
      />
      <button
        onClick={onSendOtp}
        className="w-full bg-[#004274] text-white py-3 rounded-lg hover:bg-[#003259] transition"
      >
        Send OTP
      </button>
    </>
  );
}

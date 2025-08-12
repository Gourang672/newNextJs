
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function LoginChoice({ onEmailClick }) {
  return (
    <>
      <button
        className="flex items-center justify-center w-full border border-gray-300 py-3 px-1 rounded-lg hover:bg-gray-50 transition mb-4"
      >
        <FontAwesomeIcon icon={faGoogle} className="text-[#004274] mr-3" />
        Continue with Google
      </button>

      <button
        onClick={onEmailClick}
        className="w-full bg-[#004274] text-white py-3 px-1 rounded-lg hover:bg-[#003259] transition mb-20"
      >
        Continue with Email
      </button>
    </>
  );
}

"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export default function LoginIcon() {
  return (
    <FontAwesomeIcon
      className="text-black text-4xl p-5 rounded-xl shadow-lg"
      icon={faRightToBracket}
    />
  );
}

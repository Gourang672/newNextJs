import React from "react";
import { Download } from "lucide-react";

const Certificates = () => {
  return (
    <div className="min-h-screen bg-[#eaf4fa] flex flex-col items-center justify-center py-10 px-4">
      <h1
        className="text-center mb-10 text-4xl md:text-5xl text-[#004274] font-extrabold tracking-tight drop-shadow-md"
      >
        Download Your Certificate
      </h1>

      <div
        className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-2xl overflow-hidden hover:shadow-3xl transition-all"
      >
        <div className="flex justify-center bg-gray-50 py-8">
          <img
            src="https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148971306.jpg?t=st=1755776852~exp=1755780452~hmac=ebdee71ea499f8451e315eb8b7489de56ca45d5e21224966b4b0590b9321d46d&w=2000"
            alt="Certificate Preview"
            className="w-72 md:w-96 rounded-xl shadow-md border border-gray-300"
          />
        </div>

        <div className="p-6 md:p-8 text-center bg-gradient-to-b from-white to-gray-50">
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed mb-6">
            Congratulations! Your certificate is ready. Showcase your achievement by downloading it now.
          </p>

          <button
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#004274] to-[#0077b6] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="w-5 h-5 cursor-pointer" /> Download Certificate
          </button>

          <p className="text-xs text-gray-500 italic mt-4">
            *Your certificate will be downloaded as a PDF file.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
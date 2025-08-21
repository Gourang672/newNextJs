import React from "react";

const Certifates = () => {
  return (
    <div className="min-h-screen bg-[#E6F3F8] p-4 md:p-8">
        <h1 className="text-center my-10 text-xl md:text-4xl text-[#017BFE] font-bold">Download Certificate Here</h1>
      <div className="mx-auto max-w-2xl bg-white shadow rounded-xl p-6 md:p-10">
        <img
          className="w-full h-full"
          src="https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148971306.jpg?t=st=1755776852~exp=1755780452~hmac=ebdee71ea499f8451e315eb8b7489de56ca45d5e21224966b4b0590b9321d46d&w=2000"
        />
        <div className="mt-10 flex justify-center">
          <button className="cursor-pointer bg-white hover:bg-[#017BFE] border border-[#017BFE] text-[#017BFE] hover:text-white py-2 px-4 rounded-lg">
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifates;

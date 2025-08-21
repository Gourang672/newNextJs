import React from "react";

const QRCode = () => {
  return (
    <div className="min-h-screen bg-[#E6F3F8] p-4 md:p-8">
      <div className="my-10 flex justify-start">
        <button className="cursor-pointer bg-[#017BFE] hover:bg-[#006de2] border border-[#017BFE] text-white py-2 px-4 rounded-lg">
          Back to Profile
        </button>
      </div>
      <div className="mx-auto max-w-lg bg-white shadow rounded-xl p-3 md:p-6">
        <img
          className="w-full h-full"
          src="https://img.freepik.com/free-vector/bartender-sign-design-template_742173-3003.jpg?t=st=1755778566~exp=1755782166~hmac=3da6e413a21b1c7e806c6730c3a272ce6397dbd03f0d74ffabb919817d547ed2&w=2000"
        />
        <div className="mt-10 flex gap-1 justify-evenly">
          <button className="flex justify-center items-center cursor-pointer bg-white hover:bg-[#017BFE] border border-[#017BFE] text-[#017BFE] hover:text-white py-1 px-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-download mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg>{" "}
            Download
          </button>
          <button className="flex justify-center items-center cursor-pointer bg-white hover:bg-[#017BFE] border border-[#017BFE] text-[#017BFE] hover:text-white py-1 px-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-share-fill mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
            </svg>{" "}
            Share
          </button>
          <button className="flex justify-center items-center cursor-pointer bg-white hover:bg-[#017BFE] border border-[#017BFE] text-[#017BFE] hover:text-white py-1 px-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-link-45deg mr-1" 
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
            </svg>
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCode;

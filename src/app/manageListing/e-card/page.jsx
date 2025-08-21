import React from 'react'

const ECard = () => {
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
          src="https://img.freepik.com/free-vector/flat-design-welcome-card-template_23-2149604670.jpg?t=st=1755778400~exp=1755782000~hmac=c269324b261f7e69b353f0fa3043202c4cfde4a5e103d6e0bc9a72b2ef23ec0b&w=2000"
        />
        <div className="mt-10 flex justify-center">
          <button className="cursor-pointer bg-white hover:bg-[#017BFE] border border-[#017BFE] text-[#017BFE] hover:text-white py-2 px-4 rounded-lg">
            Download
          </button>
        </div>
      </div>
    </div>
  )
}

export default ECard

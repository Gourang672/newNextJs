"use client";
import { useState } from "react";


const MyOffers = () => {

    const [offers, setOffers] = useState([
    {
      id: 24,
      title: "discount 20%",
      description: "you can get upto 20% off on all service",
    },
  ]);


  const handleDelete = (id) => {
    setOffers(offers.filter((offer) => offer.id !== id));
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#004274] text-lg sm:text-xl md:text-2xl font-bold">
            Offers for Rout Automobiles
          </h1>
          <button
            type="submit"
            className="bg-white border-2 border-[#004273] text-[#004273] min-w-20 h-10 text-[0.7rem] md:text-lg px-[5px] py-[2px] md:px-6 rounded-full hover:bg-[#004273] hover:text-white transition"
          >
            + Add Offer
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border-b border-b-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-3 font-semibold text-[#004274]">ID</th>
                <th className="px-4 py-3 font-semibold text-[#004274]">Title</th>
                <th className="px-4 py-3 font-semibold text-[#004274]">Description</th>
                <th className="px-4 py-3 font-semibold text-[#004274]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr
                  key={offer.id}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{offer.id}</td>
                  <td className="px-4 py-3">{offer.title}</td>
                  <td className="px-4 py-3">{offer.description}</td>
                  <td className="px-4 py-3 flex space-x-2">
                    <button
                      className="bg-[#004274] text-white px-4 py-1.5 rounded-lg hover:bg-[#00508e] transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(offer.id)}
                      className="bg-red-600 text-white px-4 py-1.5 rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-6 space-x-2">
          <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
            Previous
          </button>
          <span className="px-3 py-2 bg-[#004274] text-white rounded-md">1</span>
          <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyOffers

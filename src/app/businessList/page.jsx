import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const businesses = [
    {
      id: 226027,
      name: "SD BEAUTY SALON",
      createdOn: "2025-08-06 15:45:09",
      phone: "9777380377",
      address: "Moonstone valley, chandaka",
    },
    {
      id: 226031,
      name: "Indulge The Salon, Pal Heights, Bhubaneswar",
      createdOn: "2025-08-07 16:56:25",
      phone: "9853008804",
      address: "Pal Heights Mall, 3rd Floor, Bhubaneswar",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">All Businesses</h1>
          <button className="mt-3 sm:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            <FontAwesomeIcon icon={faPlus} />
            Add Business
          </button>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Business Name</th>
                <th className="py-3 px-4 text-left">Created On</th>
                <th className="py-3 px-4 text-left">Phone Number</th>
                <th className="py-3 px-4 text-left">Address</th>
                <th className="py-3 px-4 text-center">Operations</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {businesses.map((biz) => (
                <tr
                  key={biz.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{biz.id}</td>
                  <td className="py-3 px-4">{biz.name}</td>
                  <td className="py-3 px-4">{biz.createdOn}</td>
                  <td className="py-3 px-4">{biz.phone}</td>
                  <td className="py-3 px-4">{biz.address}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="flex items-center gap-1 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-lg transition text-sm">
                        <FontAwesomeIcon icon={faEye} />
                        View
                      </button>
                      <button className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition text-sm">
                        <FontAwesomeIcon icon={faTrash} />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;

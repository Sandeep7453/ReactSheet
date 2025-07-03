import React from 'react';
import Data from './Data';

const TableRow = () => {
  const Total_Row = 100;

  return (
    <div className="w-full">
      {/* Header Table */}
      <table className="w-full border-collapse">
        <thead className="bg-gray-700 text-white">
          <tr className="border-b border-gray-300 text-sm">
            <th className="w-8 pl-2 text-left border-r">#</th>
            <th className="w-64 pl-2 text-left border-r">Job Request</th>
            <th className="w-24 pr-2 text-right border-r">Submitted</th>
            <th className="w-32 text-center border-r">Status</th>
            <th className="w-28 text-left pl-2 border-r">Submitter</th>
            <th className="w-36 text-center border-r">URL</th>
            <th className="w-20 pl-1 text-left border-r">Assigned</th>
            <th className="w-24 pl-1 text-center border-r">Priority</th>
            <th className="w-20 pl-1 text-left border-r">Due Date</th>
            <th className=" text-center border-r">Est. Value</th>
          </tr>
        </thead>
      </table>

      {/* Scrollable Body */}
      <div className="max-h-[76vh] overflow-y-auto my-scroll">
        <table className=" w-full border-collapse text-sm ">
          <tbody>
            {Array.from({ length: Total_Row }).map((_, index) => {
              const item = Data[index];
              return (
                <tr key={index} className="border-b border-gray-300">
                  <td className="w-8 pl-2 border-r">{index + 1}</td>
                  <td className="w-64 pl-2 border-r">{item?.job || ''}</td>
                  <td className="w-24 pr-1 border-r text-right">{item?.submitted || ''}</td>
                  <td className="w-32 text-center border-r">{item?.status || ''}</td>
                  <td className=" w-28 pl-2 border-r">{item?.submitter || ''}</td>
                  <td className="w-36 text-center border-r">{item?.url || ''}</td>
                  <td className=" w-20 pl-1 border-r">{item?.assigned || ''}</td>
                  <td className="w-24 text-center border-r">{item?.priority || ''}</td>
                  <td className="w-20 pr-1 border-r text-right">{item?.due || ''}</td>
                  <td className=" pr-5 text-right">{item?.value || ''}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableRow;

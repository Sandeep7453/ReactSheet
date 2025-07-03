import React from 'react';
import Data from './Data';
import { BriefcaseBusiness } from 'lucide-react';
import { Captions } from 'lucide-react';
import { User } from 'lucide-react';
import { Clock12 } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Hand } from 'lucide-react';


const TableRow = () => {
  const Total_Row = 100;

  return (
    <div className="w-full">
      {/* Header Table */}
      <table className="w-full border-collapse">
        <thead className="bg-gray-500 text-gray-200">
          <tr className="border-b border-gray-300 text-sm flex">
            <th className="w-8 pl-2 text-left border-r">#</th>
            <th className="w-64 pl-2 text-left border-r flex items-center"> <BriefcaseBusiness  className= "h-3 "/> Job Request</th>
            <th className="w-24 pr-2  border-r  flex items-center">  <Captions className="h-3" />Submitted</th>
            <th className="w-32  border-r  flex items-center  ">     <Clock12 className="h-3" />Status</th>
            <th className="w-28 text-left pl-2 border-r flex items-center ">     <User className="h-3" /> Submitter</th>
            <th className="w-36 text-center border-r flex items-center ">   <Globe  className="h-3"/>URL</th>
            <th className="w-20 px-1 text-left border-r flex items-center ">  <Hand className ="h-3"/> Assigned</th>
            <th className="w-24 pl-1 text-center border-r">Priority</th>
            <th className="w-20 pl-1 text-left border-r">Due Date</th>
            <th className="w-30 text-center border-r">Est. Value</th>
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
                <tr key={index} className="border-b border-gray-500">
                    <td className="w-8 pl-2 border-r">{index + 1}</td>
                    <td className="w-64 pl-2 border-r">{item && item.job ? item.job : ''}</td>
                    <td className="w-24 pr-1 border-r text-right">{item && item.submitted ? item.submitted : ''}</td>
                    <td className="w-32 text-center border-r">{item && item.status ? item.status : ''}</td>
                    <td className="w-28 pl-2 border-r">{item && item.submitter ? item.submitter : ''}</td>
                    <td className="w-36 text-center border-r">{item && item.url ? item.url : ''}</td>
                    <td className="w-20 pl-1 border-r">{item && item.assigned ? item.assigned : ''}</td>
                    <td className="w-24 text-center border-r">{item && item.priority ? item.priority : ''}</td>
                    <td className="w-20 pr-1 border-r text-right">{item && item.due ? item.due : ''}</td>
                    <td className="pr-5 text-right">{item && item.value ? item.value : ''}</td>

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

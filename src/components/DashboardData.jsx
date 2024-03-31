import React from "react";
import MacroData from "./MacroData";
import BarChart from "./BarChart";
import ProductsTable from "./ProductsTable";

const DashboardData = () => {
  return (
    <div className="h-full space-y-5">
      <div >
        <MacroData />
      </div>
      <div className="">
        <div className="flex flex-row justify-between items-center gap-2 text-sm">
          <div className="py-2">
            <p className="font-semibold text-base">Comparison</p>
          </div>
          <div className="border rounded-full">
            <select
              name="year"
              id="year"
              className="focus:outline-none m-2 cursor-pointer"
            >
              <option value="6">6 months</option>
              <option value="3">3 months</option>
            </select>
          </div>
        </div>
        <div className="w-full h-full">
          <BarChart />
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center gap-2 text-sm">
          <div className="py-2">
            <p className="font-semibold text-base">Top Products</p>
          </div>
          <div className="border rounded-full px-2 py-1">Full Results</div>
        </div>
        <ProductsTable />
      </div>
    </div>
  );
};

export default DashboardData;

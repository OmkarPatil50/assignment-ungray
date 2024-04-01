import React, { useEffect, useState } from "react";
import MacroData from "./MacroData";
import BarChart from "./BarChart";
import ProductsTable from "./ProductsTable";

const DashboardData = () => {
  const [macroData, setMacroData] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const getMacroData = async () => {
    try {
      const response = await fetch(
        "https://3.227.101.169:8020/api/v1/sample_assignment_api_1/",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Basic dHJpYWw6YXNzaWdubWVudDEyMw==",
          },
        }
      );
      const result = await response.json();
      setMacroData(result);
    } catch (error) {}
  };

  const getBarChartData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/months`);
      const result = await response.json();
      setBarChartData(result);
    } catch (error) {}
  };

  const getProductsData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/products`);
      const result = await response.json();
      setProductsData(result);
    } catch (error) {}
  };

  useEffect(() => {
    getBarChartData();
    getMacroData();
    getProductsData();
  }, []);

  return (
    <div className="h-full space-y-5">
      <div>
        <MacroData macroData={macroData} />
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
          <BarChart barChartData={barChartData} />
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center gap-2 text-sm">
          <div className="py-2">
            <p className="font-semibold text-base">Top Products</p>
          </div>
          <div className="border rounded-full px-2 py-1">Full Results</div>
        </div>
        <ProductsTable productsData={productsData} />
      </div>
    </div>
  );
};

export default DashboardData;

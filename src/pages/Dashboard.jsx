import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardData from "../components/DashboardData";
import Ranges from "../components/Ranges";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Logo =
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/D.E.M.O._Logo_2006.svg";

  const [tab, setTab] = useState("Dashboard");

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-zinc-300 p-6 h-screen">
      <section className="grid grid-cols-12 gap-2 font-inter bg-gray-100 rounded-2xl h-[94vh] overflow-hidden">
        <div
          className={`col-span-2 hidden sm:block h-full sticky top-0 z-[50] py-4`}
        >
          <div className="pt-3 pb-5 md:w-auto w-full flex justify-center items-center">
            <div className="w-[143px] h-[50px]">
              <img
                src={Logo}
                className="w-full h-full object-cover"
                alt="Logo"
              />
            </div>
          </div>

          <Sidebar tab={tab} setTab={setTab} />
        </div>

        <div className="col-span-7 flex flex-col px-6 bg-white m-2 mr-0 rounded-2xl">
          <div className="w-full flex justify-between items-center px-2 flex-1/9 py-7">
            <h1 className="text-3xl font-semibold">Dashboard</h1>

            <div className="flex flex-row justify-center items-center gap-2 text-sm">
              <div className="py-2">
                <p className="font-medium">Compare to</p>
              </div>
              <div className="border rounded-full">
                <select
                  name="year"
                  id="year"
                  className="focus:outline-none m-2 cursor-pointer"
                >
                  <option value="last">Last year</option>
                  <option value="">ABC</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex-8/9 relative px-2 h-[80vh] overflow-y-auto">
            <DashboardData />
          </div>
        </div>
        <div className="col-span-3 relative px-2 mt-2">
          <Ranges />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

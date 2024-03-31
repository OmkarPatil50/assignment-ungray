import React from "react";
import { dashboardTabs, topTabs } from "../assets/dashboardTabs";

const Sidebar = ({ tab, setTab }) => {
  const userAvatar =
    "https://img.freepik.com/premium-photo/speech-therapist-digital-avatar-generative-ai_934475-9023.jpg?size=626&ext=jpg&uid=R141431796&ga=GA1.2.1819053515.1704191943&semt=ais";

  return (
    <div className="ml-4 flex flex-col h-[80vh] relative">
      <ul
        className={`pb-5 max-h-[60vh] xl:max-h-[70vh] overflow-y-auto grid grid-rows-${dashboardTabs?.length} gap-2`}
      >
        {topTabs.map((item, index) => (
          <li
            key={index}
            className={`${
              tab === item.display
                ? "bg-white shadow-md text-black font-semibold"
                : "text-gray-600"
            } capitalize flex justify-start items-center cursor-pointer py-3 px-6 transition hover:bg-white hover:shadow-md hover:text-black gap-3 rounded-lg`}
            onClick={() => {
              setTab(item.display);
            }}
          >
            <span className={`${tab === item.display && "text-blue-600"} `}>
              {item.icon}
            </span>{" "}
            {item.display}
          </li>
        ))}
      </ul>

      <p className="text-gray-600 text-xs px-6 pb-2">MENU</p>
      <ul
        className={`pb-12 max-h-[60vh] xl:max-h-[70vh] overflow-y-auto grid grid-rows-${dashboardTabs?.length} gap-2`}
      >
        {dashboardTabs.map((item, index) => (
          <li
            key={index}
            className={`${
              tab === item.display
                ? "bg-white shadow-md text-black font-semibold"
                : "text-gray-600"
            } capitalize flex justify-start items-center cursor-pointer py-3 px-6 transition hover:bg-white hover:shadow-md hover:text-black gap-3 rounded-lg`}
            onClick={() => {
              setTab(item.display);
            }}
          >
            <span className={`${tab === item.display && "text-blue-600"} `}>
              {item.icon}
            </span>{" "}
            {item.display}
          </li>
        ))}
      </ul>

      <div className="absolute bottom-6 left-6 flex justify-start items-center gap-2" >
        <div className="w-7 h-7 rounded-full overflow-hidden" >
          <img src={userAvatar} alt="user" className="w-full h-full object-cover" />
        </div>
        <p className="font-semibold text-gray-700" >Tom Wang</p>
      </div>
    </div>
  );
};

export default Sidebar;

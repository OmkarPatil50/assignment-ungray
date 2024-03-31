import { MdDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";
import { TiFlowChildren } from "react-icons/ti";
import { GrBarChart } from "react-icons/gr";
import { TfiViewListAlt } from "react-icons/tfi";
import { CiPlug1 } from "react-icons/ci";

export const dashboardTabs = [
  {
    icon: <MdDashboard />,
    display: "Dashboard",
  },
  {
    icon: <GrBarChart />,
    display: "Campaigns",
  },
  {
    icon: <TiFlowChildren />,
    display: "Flows",
  },

  {
    icon: <CiPlug1 />,
    display: "Integrations",
  },
  {
    icon: <TfiViewListAlt />,
    display: "Customers",
  },
];

export const topTabs = [
  {
    icon: <IoSettingsOutline />,
    display: "Settings",
  },
  {
    icon: <LuUserCircle />,
    display: "Team",
  },
];

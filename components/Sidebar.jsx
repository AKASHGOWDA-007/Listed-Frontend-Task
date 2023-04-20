import Link from "next/link";
import Image from "next/image";
import { BsTags } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { GrSchedulePlay, GrScheduleNew } from "react-icons/gr";
import { BiUserCircle, BiBell } from "react-icons/bi";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div>
      <aside className="sidebar">
        <div className="topContainer">
          <h2 className="sidebar__title">Board.</h2>
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <Link href={"/admin/dashboard"}>
                <span className="sidebar_icon">
                  <FiPieChart />
                </span>
                <p className="sidebar__name">Dashboard</p>
              </Link>
            </li>
            <li>
              <Link href={"/admin/transactions"}>
                <span className="sidebar_icon">
                  <BsTags />
                </span>
                <p className="sidebar__name">Transactions</p>
              </Link>
            </li>
            <li>
              <Link href={"/admin/schedules"}>
                <span className="sidebar_icon">
                  <Image src="/assets/schedule_icon.png" width={18} height={18}  alt="schedule__icon" />
                </span>
                <p className="sidebar__name">Schedules</p>
              </Link>
            </li>
            <li>
              <Link href={"/admin/users"}>
                <span className="sidebar_icon">
                  <BiUserCircle />
                </span>
                <p className="sidebar__name">Users</p>
              </Link>
            </li>
            <li>
              <Link href={"/admin/settings"}>
                <span className="sidebar_icon">
                  <AiOutlineSetting />
                </span>
                <p className="sidebar__name">Settings</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottomContainer">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

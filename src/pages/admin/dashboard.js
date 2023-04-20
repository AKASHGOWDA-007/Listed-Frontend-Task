import React from "react";
import Sidebar from "../../../components/Sidebar";
import styles from "../../styles/dashboard.module.css";
import {
  AiOutlineSearch,
  AiOutlineCamera,
  AiOutlineLike,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { BsTags, BsPeople } from "react-icons/bs";
import Image from "next/image";
import LineChart from "../../../components/LineChart";
import PieChart from "../../../components/PieChart";

const cardItem = [
  {
    title: "total revenues",
    value: 2129430,
    icon: AiOutlineCamera,
  },
  {
    title: "Total Transactions",
    value: 1520,
    icon: BsTags,
  },
  {
    title: "Total Likes",
    value: 9721,
    icon: AiOutlineLike,
  },
  {
    title: "Total Users",
    value: 892,
    icon: BsPeople,
  },
];

const dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.dashboard__content}>
        {/* Dashbaord Header */}
        <div className={styles.dashboard__header}>
          <h2 className={styles.dahboard__title}>dashboard</h2>
          <div>
            <div className={styles.search__bar}>
              <input
                type="search"
                name=""
                id=""
                placeholder="Search..."
                className={styles.dashboard__search}
              />
              <AiOutlineSearch className={styles.searchIcon} />
            </div>
            <BiBell style={{ height: "20px", width: "20px" }} />
            <div className={styles.person}>
              <Image
                src="/assets/person.png"
                width={50}
                height={50}
                alt="person-image"
              />
            </div>
          </div>
        </div>
        {/* Card Container */}
        <div className={styles.card__container}>
          {cardItem.map((card, index) => {
            const { title, value, icon: Icon } = card;
            return (
              <div key={index} className={styles.card__item}>
                <span className={styles.card__icon}>
                  <Icon />
                </span>
                <p className={styles.card__title}>{title}</p>
                <p className={styles.card__value}>
                  {index === 0
                    ? `$${value.toLocaleString("en-US")}`
                    : value.toLocaleString("en-US")}
                </p>
              </div>
            );
          })}
        </div>
        {/* Line Chart */}
        <div className={styles.chartMenu}>
          <h3>Activities</h3>
          <p>
            May - June 2021 <AiOutlineDown height="5px" width="8px" />
          </p>
          <LineChart className={styles.chart} style={{ width: "100%" }} />
        </div>

        <div className={styles.bottomContainer}>
          {/* Pie Chart */}
          <div className={styles.pieChart}>
            <div className={styles.pieChartHeader}>
              <h3>Top products</h3>
              <p>
                May - June 2021 <AiOutlineDown height="5px" width="8px" />
              </p>
            </div>
            <PieChart />
          </div>
          {/* Schedule */}
          <div className={styles.schedule}>
            <div className={styles.scheduleHeader}>
              <h3>Today’s schedule</h3>
              <p>
                See All <AiOutlineRight />
              </p>
            </div>
            <div className={styles.scheduleContainer}>
              <div>
                <span></span>
                <h4 className={styles.purpose}>
                  Meeting with suppliers from Kuta Bali
                </h4>
                <h5 className={styles.time}>14.00-15.00</h5>
                <p className={styles.place}>at Sunset Road, Kuta, Bali </p>
              </div>
              <div>
                <span></span>
                <h4 className={styles.purpose}>
                  Check operation at Giga Factory 1
                </h4>
                <h5 className={styles.time}>18.00-20.00</h5>
                <p className={styles.place}>at Central Jakarta </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;

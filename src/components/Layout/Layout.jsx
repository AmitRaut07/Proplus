import React from "react";
import { Outlet } from "react-router-dom"; // <-- import Outlet
import Navbar from "../Navbar/Navbar.jsx";
import ContactFooter from "../sections/ContactFooter/ContactFooter.jsx";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet /> {/* <-- This renders the nested route content */}
      </main>
      <ContactFooter />
    </>
  );
};

export default Layout;

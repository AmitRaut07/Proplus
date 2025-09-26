
import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import ContactFooter from "../sections/ContactFooter/ContactFooter.jsx";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <ContactFooter />
    </>
  );
};

export default Layout;

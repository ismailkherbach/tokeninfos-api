import React from "react";
import Wallet from "../componenets/Wallet/Wallet";
import "./Layout.scss";
export default function Layout({ children }) {
  return (
    <div>
      <Wallet />
      {children}
    </div>
  );
}

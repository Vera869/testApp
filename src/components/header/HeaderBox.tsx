import { useLocation } from "react-router-dom";
import { NavMenu } from "../navMenu/NavMenuBox";
import "./HeaderBoxStyle.css";

export const Header: React.FC = () => {
  const location = useLocation();
  const home = location.pathname === "/";


  return <div className="header">
    <img className="header-icon" src="../../../src/assets/img/sale-2.png" alt="Sale"/>
    <h1>A Big Fashion Sale</h1>
    {home ? <NavMenu /> : ""}
  </div>;
};
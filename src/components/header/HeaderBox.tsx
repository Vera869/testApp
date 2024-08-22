import { useLocation, useNavigate } from "react-router-dom";
import { NavMenu } from "../navMenu/NavMenuBox";
import "./HeaderBoxStyle.css";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const home = location.pathname === "/";

  return <div className="header">
    <img className="header-icon" src="../../../src/assets/img/sale-2.png" alt="Home" onClick={() => navigate("/")}/>
    <h1>A Big Fashion Sale</h1>
    {home ? <NavMenu /> : ""}
  </div>;
};
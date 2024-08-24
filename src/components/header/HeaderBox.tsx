import { useLocation } from "react-router-dom";
import { NavMenu } from "../navMenu/NavMenuBox";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import "./HeaderBoxStyle.css";

export const Header: React.FC = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  const isFiltered: boolean = useSelector((state: RootState) => state.items.isFiltered);

  return <div className="header">
    <img className="header__icon" src="img/sale-2.png" alt="Sale"/>
    <h1>A Big Fashion Sale</h1>
    {home ? (!isFiltered ? <NavMenu /> : "") : ""}
  </div>;
};
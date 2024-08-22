import { Outlet } from "react-router-dom";
import { Header } from "../components/header/HeaderBox";
import  "./PagesStyle.css";

export const LayoutPage: React.FC = () => {
  
  return(<>
    <Header/>  
    <Outlet/>
  </>
  );
};
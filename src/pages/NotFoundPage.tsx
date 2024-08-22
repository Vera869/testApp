import { useNavigate } from "react-router-dom";
import  "./PagesStyle.css";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const hendleNavigate = () => {
    navigate("/");
  };
  return(
    <div className="container"> 
      <h2 className="content-header">404</h2>
      <h2 className="content-header">Not Found Page</h2>
   
      <button className="content-button" onClick={hendleNavigate}>Go to home page</button>;
    </div>
  );
};
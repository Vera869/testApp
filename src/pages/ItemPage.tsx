import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppDispatch } from "../store/Store";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/Slice";
import { getProductById } from "../services/Api";
import { Item } from "../Types";
import  "./PagesStyle.css";

export const ItemPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentItem, setCurrentItem] = useState<Item>();

  const currentItemId = localStorage.getItem("id");

  useEffect(() => {
    //Получаем данные с сервера и сохраняем в state
    getProductById(currentItemId)
      .then((data: Item) =>{
        setCurrentItem(data);
        setIsLoad(false);
      })
      .catch(error => setErrorMessage(error.message));
  }, [currentItemId]);
 
  const hendleNavigate = () => {
    dispatch(setCategory("women's clothing"));
    navigate("/");
  };
  
  return(
    <div className="container"> 
      {isLoad ? (<img className="content-loader" src="img/loader-1.gif" alt="LOADING"/>) :  
        <div className="item"> 
          {currentItem === undefined ? <>
            <h2 className="item-header">Something went wrong, try again</h2>
            <p className="item-header">{errorMessage}</p>
            <button className="item-button" onClick={hendleNavigate}>Go to home page</button></> : <>
            <h2 className="item-header">{currentItem.title}</h2>
            <img className="item-image" src={`${currentItem.image}`}/>
            <p className="item-descriptions">category: {currentItem.category}</p>
            <p className="item-descriptions">price: <span className="span-numbers">{currentItem.price}</span></p>
            <p className="item-descriptions">raiting count: <span className="span-numbers">{currentItem.rating.count}</span></p>
            <p className="item-descriptions">raiting rate: <span className="span-numbers">{currentItem.rating.rate}</span></p>
            <p className="item-descriptions">{currentItem.description}</p>
            <button className="item-button" onClick={hendleNavigate}>Go to home page</button>
          </>}
        </div>}
      
    </div>
  );
};
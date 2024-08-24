import { useNavigate, useParams } from "react-router-dom";
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
  const params =useParams();
  
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentItem, setCurrentItem] = useState<Item>();

  // const currentItemId = localStorage.getItem("id");
  const currentItemId = params.id;
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
      {isLoad ? (<img className="content__loader" src="img/loader-1.gif" alt="LOADING"/>) :  
        <div className="item"> 
          {currentItem === undefined ? <>
            <h2 className="item__header">Something went wrong, try again</h2>
            <p className="item__header">{errorMessage}</p>
            <button className="item__button" onClick={hendleNavigate}>Go to home page</button></> : <>
            <h2 className="item__header">{currentItem.title}</h2>
            <img className="item__image" src={`${currentItem.image}`}/>
            <p className="item__descriptions">category: {currentItem.category}</p>
            <p className="item__descriptions">price: <span className="span__numbers">{currentItem.price}</span></p>
            <p className="item__descriptions">raiting count: <span className="span__numbers">{currentItem.rating.count}</span></p>
            <p className="item__descriptions">raiting rate: <span className="span__numbers">{currentItem.rating.rate}</span></p>
            <p className="item__descriptions">{currentItem.description}</p>
            <button className="item__button" onClick={hendleNavigate}>Go to home page</button>
          </>}
        </div>}
      
    </div>
  );
};
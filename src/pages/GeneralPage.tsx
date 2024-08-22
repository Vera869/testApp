import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/Store";
import { setAllItems, setErrorMessage, setIsLoad} from "../store/Slice";
import { FilterBox } from "../components/filter/FilterBox";
import { Cards } from "../components/cards/Cards";
import  "./PagesStyle.css";

export const GeneralPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const isLoad = useSelector((state: RootState) => state.items.isLoad);
  const errorMessage = useSelector((state: RootState) => state.items.errorMessage);
  const Category = useSelector((state: RootState) => state.items.category);
  
  useEffect(()=> {
    const getContent = () => {
      //Получаем данные с сервера и сохраняем в store
      fetch(`https://fakestoreapi.com/products/category/${Category}`)
        .then(res => res.json())
        .then(json =>{
          dispatch(setAllItems(json));
          dispatch(setIsLoad(false));
        })
        .catch(error => dispatch(setErrorMessage(error.message)));
    };
  
    getContent();
  },[dispatch, Category]);

  return(
    <div className="container"> 
      <h2 className="content-header">Best offer of the month</h2>
      {isLoad?(<img className="content-loader" src="../../../src/assets/img/loader-1.gif" alt="LOADING"/>): 
        <>
          <FilterBox/>
          <Cards/>
        </>
      }
      <p className="content-header">{errorMessage}</p>
    </div>
  );
};
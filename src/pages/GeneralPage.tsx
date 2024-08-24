import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/Store";
import { setAllItems, setErrorMessage, setIsLoad} from "../store/Slice";
import { FilterBox } from "../components/filter/FilterBox";
import { Cards } from "../components/cards/Cards";
import { getAllProducts } from "../services/Api";
import { Item } from "../Types";
import  "./PagesStyle.css";

export const GeneralPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  
  const isLoad = useSelector((state: RootState) => state.items.isLoad);
  const errorMessage = useSelector((state: RootState) => state.items.errorMessage);
  const category = useSelector((state: RootState) => state.items.category);
  const isFiltered: boolean = useSelector((state: RootState) => state.items.isFiltered);
  
  useEffect(()=> {
    //Получаем данные с сервера и сохраняем в store
    getAllProducts(category)
      .then((data: Item[]) =>{
        dispatch(setAllItems(data));
        dispatch(setIsLoad(false));
      })
      .catch(error => dispatch(setErrorMessage(error.message)));
  },[dispatch, category]);

  return(
    <div className="container"> 
      <h2 className="content__header">Best offer of the month</h2>
      {isLoad && !isFiltered ?(<img className="content__loader" src="img/loader-1.gif" alt="LOADING"/>): 
        <>
          <FilterBox/>
          <Cards/>
        </>
      }
      <p className="content__header">{errorMessage}</p>
    </div>
  );
};
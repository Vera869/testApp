import { useDispatch, useSelector } from "react-redux";
import { setIsFiltered } from "../../store/Slice";
import { AppDispatch, RootState } from "../../store/Store";
import "./FilterBoxStyle.css";

export const FilterBox: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isFiltered: boolean = useSelector((state: RootState) => state.items.isFiltered);
  
  const hendleFilter = () => {
    dispatch(setIsFiltered());
  };
  return(
    <div className="filter">
      <h3 className="filter__heder">Show: </h3>
      <button className="filter__button" onClick={hendleFilter}>{isFiltered ? "all favorites" : "products"}</button>
    </div>
  );

};
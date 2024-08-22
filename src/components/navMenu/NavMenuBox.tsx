import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { setCategory, setIsLoad } from "../../store/Slice";
import { buttonRef } from "../../Types";
import { useRef } from "react";

export const NavMenu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const refMans = useRef<buttonRef>(null);
  const refWomans = useRef<buttonRef>(null);
  const refJewelery = useRef<buttonRef>(null);

  const Category = useSelector((state: RootState) => state.items.category);
  let MansCategory: boolean = false;
  let WomansCategory: boolean = true;
  let JeweleryCategory: boolean = false;

  const mansCategory = refMans.current;
  const womansCategory = refWomans.current;
  const jeweleryCategory = refJewelery.current;
  if(Category === mansCategory?.id) {
    MansCategory = true;
    WomansCategory = false;
    JeweleryCategory = false;
  }
  else if(Category === womansCategory?.id) {
    MansCategory = false;
    WomansCategory = true;
    JeweleryCategory = false;
  }
  else if(Category === jeweleryCategory?.id) {
    MansCategory = false;
    WomansCategory = false;
    JeweleryCategory = true;
  }

  function hendleChangeCategory(e: { currentTarget: { id: string; }; }) {
    dispatch(setIsLoad(true));
    const category = e.currentTarget.id;
    dispatch(setCategory(category)); 
  }

  return(
    <div className="header-nav">
      <button className="header-button" id="men's clothing" ref={refMans} disabled={MansCategory} onClick={hendleChangeCategory} >For Mans</button>
      <button className="header-button" id="women's clothing" ref={refWomans} disabled={WomansCategory} onClick={hendleChangeCategory} >For Womens</button>
      <button className="header-button" id="jewelery" ref={refJewelery} disabled={JeweleryCategory} onClick={hendleChangeCategory} >Jewelery</button>
    </div>
  );
};
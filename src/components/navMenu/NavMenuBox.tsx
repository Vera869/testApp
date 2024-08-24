import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { setCategory, setIsLoad } from "../../store/Slice";
import { buttonRef } from "../../Types";
import { useRef } from "react";

export const NavMenu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const Category = useSelector((state: RootState) => state.items.category);
  // Назначаем ref для каждой кнопки
  const refMans = useRef<buttonRef>(null);
  const refWomans = useRef<buttonRef>(null);
  const refJewelery = useRef<buttonRef>(null);
  // Создаём дефолтное состояние (disabled) для каждой кнопки
  let MansCategory: boolean = false;
  let WomansCategory: boolean = true;
  let JeweleryCategory: boolean = false;

  // Получаем каждую кнопку через useRef
  const mansCategory = refMans.current;
  const womansCategory = refWomans.current;
  const jeweleryCategory = refJewelery.current;
  // Проверяем какая кнопка была нажата и меняем значение disabled для каждой кнопки
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
    // Назначаем категорию и сохраняем в store
    const category = e.currentTarget.id;
    dispatch(setCategory(category));
  }

  return(
    <div className="header__nav">
      <button className="header__button" id="men's clothing" ref={refMans} disabled={MansCategory} onClick={hendleChangeCategory} >For Mans</button>
      <button className="header__button" id="women's clothing" ref={refWomans} disabled={WomansCategory} onClick={hendleChangeCategory} >For Womens</button>
      <button className="header__button" id="jewelery" ref={refJewelery} disabled={JeweleryCategory} onClick={hendleChangeCategory} >Jewelery</button>
    </div>
  );
};
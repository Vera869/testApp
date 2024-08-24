import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllItems, setCurrentItemId, setFavItems, setIsFiltered } from "../../store/Slice";
import { AppDispatch, RootState } from "../../store/Store";
import { Item } from "../../Types";

export const Cards: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  
  //Получаем данные из store
  const allItems: Item[] = useSelector((state: RootState) => state.items.allItems);
  const favItems: Item[] = useSelector((state: RootState) => state.items.favItems);
  const isFiltered: boolean = useSelector((state: RootState) => state.items.isFiltered);
  //Назначаем нужный массив в зависимости от фильтрации
  const dataItems: Item[] = isFiltered ? favItems : allItems;

  const handleItemPage = (id: string) => {
    //Передаём данные в store и переходим на страницу товара
    dispatch(setCurrentItemId(id));
    navigate(`/${id}`);
  };

  const handleDelete = (id: string) => {
    //Удаляем нужный элимент из обоих массивов и сохраняем обновлённые данные в store
    const newAllItems: Item[] = allItems.filter((el: Item) => el.id !== id);
    const newFavItems: Item[] = favItems.filter((el: Item) => el.id !== id);
    dispatch(setAllItems(newAllItems));
    dispatch(setFavItems(newFavItems));
  };

  const handleLike = (id: string) => {
    //Проверяем, находится ли элемент в массиве избранных продуктов
    const currentItem: Item[] = favItems.filter((el: Item) => el.id === id);
    if(currentItem.length === 0 || currentItem === undefined) {
      //Если нет - добавляем в массив избранных продуктов, сохраняем в store
      const currentItem: Item[] = allItems.filter((el: Item) => el.id === id);
      const newFavItems: Item[] = favItems.concat(currentItem[0]);
      dispatch(setFavItems(newFavItems));
    } else {
      //Если да - удаляем из массива избранных продуктов, сохраняем в store
      const newFavItems: Item[] = favItems.filter((el: Item) => el.id !== id);
      dispatch(setFavItems(newFavItems));
    }
  };

  return (
    <div className="content__box">
      {favItems.length === 0 && isFiltered ? <div className="">
        <h4 className="content__header">No favorites products</h4>
        <button className="item__button" onClick={() => dispatch(setIsFiltered())}>Go to home page</button>;
      </div> : dataItems.map((item: Item) => {
        const id: string = item.id;
        const imgUrlDislike = "img/dislike.png";
        const imgUrlLike = "img/like.png";
        //Проверяем, находится ли элемент в массиве избранных продуктов
        const currentItem: Item[] = favItems.filter((el: Item) => el.id === id);
        //Назначаем соответствующую картинку(Like/Dislike)
        const imgUrl = currentItem.length === 0 ? imgUrlDislike : imgUrlLike;
        return(
          <div className="content__item" key={id} >
            <div className="content__images">
              <img className="content__image" src={`${item.image}`}  onClick={() =>  handleItemPage(id)}/>
              <div className="content__icons">
                <img className="content__like" onClick={() => handleDelete(id)} src="img/handleDelete.png"/>
                <img className="content__delete" onClick={() => handleLike(id)} src={imgUrl}/>
              </div>
            </div>
            <div>
              <p className="content__descriptions">{item.title}</p>
              <p className="content__descriptions">price: <span className="span__numbers">{item.price}</span></p>
              <p className="content__descriptions">{item.description}</p>
            </div>

          </div>
        );
      })}
    </div>
  );
};
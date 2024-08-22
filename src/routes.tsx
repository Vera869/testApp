import { Route, Routes } from "react-router-dom";
import { LayoutPage } from "./pages/LayoutPage";
import { GeneralPage } from "./pages/GeneralPage";
import { ItemPage } from "./pages/ItemPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<LayoutPage/>}>
        <Route path="/" element={<GeneralPage/>}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/:id" element={<ItemPage/>}></Route>
      </Route>
    </Routes>
  );

};
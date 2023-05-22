import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/ui/layout";
import HomePage from "../pages/homePage";
import ItemPage from "../pages/itemPage";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="item/:id" element={<ItemPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

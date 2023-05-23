import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/ui/layout";
import HomeRoute from "./home";
import ItemRoutes from "./item";
import EventsRoutes from "./event";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="/*" element={<HomeRoute />} />
        <Route path="items/*" element={<ItemRoutes />} />
        <Route path="events/*" element={<EventsRoutes />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

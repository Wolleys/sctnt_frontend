import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/ui/layout";
import LoginRoute from "./login";
import ItemRoutes from "./item";
import EventsRoutes from "./event";
import NotFoundRoute from "./notFound";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="/*" element={<LoginRoute />} />
        <Route path="items/*" element={<ItemRoutes />} />
        <Route path="events/*" element={<EventsRoutes />} />

        {/* Catch all undefined routes */}
        <Route path="*" element={<NotFoundRoute />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/notFound";

const NotFoundRoute: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NotFoundRoute;

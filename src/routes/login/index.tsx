import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/loginPage";

const LoginRoute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default LoginRoute;

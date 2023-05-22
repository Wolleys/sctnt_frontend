import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/ui/header";
import AppRoutes from "./routes";

const App: FC = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;

import { FC } from "react";
import "./layout.css";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    );
};

export default Layout;

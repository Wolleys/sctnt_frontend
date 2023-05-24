import { FC } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

const SecondaryLayout: FC = () => {
    return (
        <>
            <Header />
            <section style={{ paddingTop: "50px" }} />
            <Outlet />
        </>
    );
};

export default SecondaryLayout;

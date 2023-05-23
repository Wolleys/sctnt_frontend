import { FC } from "react";
import { Outlet } from "react-router-dom";

const SecondaryLayout: FC = () => {
    return (
        <section>
            <Outlet />
        </section>
    );
};

export default SecondaryLayout;

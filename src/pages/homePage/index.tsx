import { FC } from "react";
import AddItem from "./actions/addItem";

const HomePage: FC = () => {
    return (
        <div>
            <h2>Welcome</h2>
            <AddItem />
        </div>
    );
};

export default HomePage;

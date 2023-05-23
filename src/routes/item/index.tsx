import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Items from "../../pages/itemPage";
import DisplayItems from "../../pages/itemPage/displayItems";
import ItemDetails from "../../pages/itemPage/actions/itemDetails";

const ItemRoutes: FC = () => {
    return (
        <Routes>
            <Route element={<Items />}>
                <Route path="/" element={<DisplayItems />} />
                <Route path="item/:itemId" element={<ItemDetails />} />
            </Route>
        </Routes>
    );
};

export default ItemRoutes;

import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Items from "../../pages/itemPage";
import NotFound from "../../pages/notFound";
import AddItem from "../../pages/itemPage/actions/addItem";
import EditItem from "../../pages/itemPage/actions/editItem";
import DisplayItems from "../../pages/itemPage/displayItems";
import ItemDetails from "../../pages/itemPage/actions/itemDetails";

const ItemRoutes: FC = () => {
    return (
        <Routes>
            <Route element={<Items />}>
                <Route path="/" element={<DisplayItems />} />
                <Route path="add-item" element={<AddItem />} />
                <Route path="edit-item/:itemId" element={<EditItem />} />
                <Route path="item/:itemId" element={<ItemDetails />} />
            </Route>
            {/* Catch all undefined routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default ItemRoutes;

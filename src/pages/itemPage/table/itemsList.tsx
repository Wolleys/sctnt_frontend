import { FC } from "react";
import Table from "../../../components/table";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../../components/form/searchBox";

import AddBtn from "../../../components/form/button/addBtn";
import EditBtn from "../../../components/form/button/editBtn";
import DeleteBtn from "../../../components/form/button/delBtn";
import { useInterfacesContext } from "../../../hooks/useInterface";

const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "price", header: "Price" },
    { key: "color", header: "Color" },
    { key: "location", header: "Location" },
    { key: "owner", header: "Owner" },
    { key: "actions", header: "Actions" },
];

const ItemsList: FC = () => {
    const navigate = useNavigate();
    const { items } = useInterfacesContext();

    //Links
    const handleAdd = () => navigate("/items/add-item");
    const handleEdit = () => navigate("/items/edit-item");

    const itemsData = items?.map((item) => {
        return {
            ...item,
            actions: (
                <span>
                    <EditBtn onClick={handleEdit}>Edit</EditBtn>
                    <DeleteBtn>Delete</DeleteBtn>
                </span>
            ),
        };
    });

    const caption = (
        <>
            <h1>Items List</h1>
            <span>
                <AddBtn onClick={handleAdd}>Add New</AddBtn>
            </span>
        </>
    );

    const noDataMessage = "No items found";

    return (
        <>
            <SearchBox />
            <Table
                caption={caption}
                columns={columns}
                data={itemsData || []}
                noDataMessage={noDataMessage}
            />
        </>
    );
};

export default ItemsList;

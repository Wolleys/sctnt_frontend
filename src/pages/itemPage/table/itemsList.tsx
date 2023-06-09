import { FC } from "react";
import Table from "../../../components/table";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../../components/form/searchBox";
import AddBtn from "../../../components/form/button/addBtn";
import EditBtn from "../../../components/form/button/editBtn";
import DeleteBtn from "../../../components/form/button/delBtn";
import { useInterfacesContext } from "../../../hooks/useInterface";

const columns = [
    { key: "description", header: "Description" },
    { key: "part_number", header: "Part number" },
    { key: "price", header: "Price" },
    { key: "part_status", header: "Part status" },
    { key: "location", header: "Location" },
    { key: "actions", header: "Actions" },
];

const ItemsList: FC = () => {
    const navigate = useNavigate();
    const { getItems, setGetItems } = useInterfacesContext();

    interface TableRow {
        id: string;
    }

    // CRUD operations
    const handleAdd = (): void => navigate("/items/add-item");
    const handleEdit = (row: TableRow): void => {
        navigate(`/items/edit-item/${row.id}`);
    };
    const handleDelete = (row: TableRow): void => {
        if (getItems) {
            const updatedItems = getItems.filter((item) => item.id !== row.id);
            setGetItems(updatedItems);
        }
    };

    const itemsData = getItems?.map((item) => {
        return {
            ...item,
            actions: (
                <span>
                    <EditBtn onClick={() => handleEdit(item)}>Edit</EditBtn>
                    <DeleteBtn onClick={() => handleDelete(item)}>Delete</DeleteBtn>
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

import { FC } from "react";
import "./table.css";
import AddBtn from "../form/button/addBtn";
import EditBtn from "../form/button/editBtn";
import DeleteBtn from "../form/button/delBtn";
import { useNavigate } from "react-router-dom";
import { useInterfacesContext } from "../../hooks/useInterface";

const Table: FC = () => {
    const navigate = useNavigate();
    const { items } = useInterfacesContext();

    //Links
    const handleAdd = () => navigate("/items/add-item");
    const handleEdit = () => navigate("/items/edit-item");

    return (
        <section className="table-container">
            <table>
                <caption>
                    <h1>Items List</h1>
                    <span>
                        <AddBtn onClick={handleAdd}>Add New</AddBtn>
                    </span>
                </caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Location</th>
                        <th>Owner</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.color}</td>
                            <td>{item.location}</td>
                            <td>{item.owner}</td>
                            <td>
                                <span>
                                    <EditBtn onClick={handleEdit}>Edit</EditBtn>
                                    <DeleteBtn>Delete</DeleteBtn>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Table;

import { FC } from "react";
import "./table.css";
import AddBtn from "../form/button/addBtn";
import EditBtn from "../form/button/editBtn";
import DeleteBtn from "../form/button/delBtn";
import { useNavigate } from "react-router-dom";

const Table: FC = () => {
    const navigate = useNavigate();
    
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
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>
                            <span>
                                <EditBtn onClick={handleEdit}>Edit</EditBtn>
                                <DeleteBtn>Delete</DeleteBtn>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td>Christina Berglund</td>
                        <td>Sweden</td>
                        <td>
                            <span>
                                <EditBtn onClick={handleEdit}>Edit</EditBtn>
                                <DeleteBtn>Delete</DeleteBtn>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Table;

import { FC, useState, useEffect } from "react";
import axios from "../../../../api";

interface Supplier {
    id: number;
    first_name: string;
}

const SupplierSelect: FC = () => {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = async () => {
        try {
            const response = await axios.get("/suppliers");
            console.log(response.data.data)
            setSuppliers(response.data.data);
        } catch (error) {
            console.error("Error fetching suppliers:", error);
        }
    };

    return (
        <select style={{width: "100%", height: "40px", marginTop: "20px"}} name="supplier_id">
            <option value="">Select a supplier</option>
            {suppliers?.map((supplier) => (
                <option key={supplier.id} value={supplier.id}>
                    {supplier.first_name}
                </option>
            ))}
        </select>
    );
};

export default SupplierSelect;

import { FC } from "react";
import { useParams, Params } from "react-router-dom";

interface ItemPageParams extends Params {
    id: string;
}

const ItemPage: FC = () => {
    const { id } = useParams<ItemPageParams>();

    return (
        <div>
            <h2>Item Details</h2>
            <p>Item ID: {id}</p>
        </div>
    );
};

export default ItemPage;

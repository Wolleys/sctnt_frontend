import { FC } from "react";
import { useParams, Params } from "react-router-dom";

interface ItemDetailsParams extends Params {
    itemId: string;
}

const ItemDetails: FC = () => {
    const { itemId } = useParams<ItemDetailsParams>();

    return (
        <div>
            <h2>Item Details</h2>
            <p>Item ID: {itemId}</p>
        </div>
    );
};

export default ItemDetails;

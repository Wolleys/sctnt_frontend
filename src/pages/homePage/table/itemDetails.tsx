import { FC } from "react";

interface ItemDetailsProps {
  item: {
    id: string;
    name: string;
    price: string;
    color: string;
    location: string;
    owner: string;
  };
}

const ItemDetails: FC<ItemDetailsProps> = ({ item }) => {
  return (
    <div>
      <h2>Item Details</h2>
      <p>ID: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Color: {item.color}</p>
      <p>Location: {item.location}</p>
      <p>Owner: {item.owner}</p>
    </div>
  );
};

export default ItemDetails;

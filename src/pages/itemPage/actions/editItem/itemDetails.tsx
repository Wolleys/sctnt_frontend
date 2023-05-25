import { FC } from "react";
import TextField from "../../../../components/form/textField";
import { useNavigate, useParams, Params } from "react-router-dom";
import BackBtn from "../../../../components/form/button/backBtn";
import { useInterfacesContext } from "../../../../hooks/useInterface";

interface ItemDetailsParams {
    editRow(id: string): void;
}

interface ItemIdParam extends Params {
    itemId: string;
}

const ItemDetails: FC<ItemDetailsParams> = ({ editRow }) => {
    const { itemId } = useParams<ItemIdParam>();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const { getItems } = useInterfacesContext();

    const filteredData = getItems?.filter((item) => item.id === itemId);

    return (
        <div className="center">
            <h2>Item details</h2>
            {filteredData?.map((item) => (
                <section key={item.id}>
                    <div className="grid-container">
                        <TextField label="Name" value={item.name} readOnly />
                        <TextField label="Price" value={item.price} readOnly />
                        <TextField label="Color" value={item.color} readOnly />
                        <TextField label="Location" readOnly value={item.location} />
                        <TextField label="Owner" value={item.owner} readOnly />
                    </div>
                    <section>
                        <span style={{ float: "left" }}>
                            <BackBtn onClick={goBack}>Go Back</BackBtn>
                        </span>
                        <span style={{ float: "right" }}>
                            <button onClick={() => { editRow(item.id)}}> Edit </button>
                        </span>
                    </section>
                </section>
            ))}
        </div>
    );
};

export default ItemDetails;

import { FC } from "react";
import Table from "../../../components/table";
import SearchBox from "../../../components/form/searchBox";

const ItemsList: FC = () => {
    return (
        <>
            <SearchBox />
            <Table />
        </>
    );
};

export default ItemsList;

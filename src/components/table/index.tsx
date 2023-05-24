import { FC, ReactNode } from "react";
import "./table.css";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

interface TableColumn {
    key: string;
    header: string;
}

interface TableProps<T> {
    caption?: ReactNode;
    columns: TableColumn[];
    data: T[];
    noDataMessage: string;
}

const Table: FC<TableProps<Record<string, unknown>>> = ({
    caption,
    columns,
    data,
    noDataMessage,
}) => {
    return (
        <section className="table-container">
            <table>
                <caption>{caption}</caption>
                <TableHeader columns={columns} />
                <TableBody
                    columns={columns}
                    data={data}
                    noDataMessage={noDataMessage}
                />
            </table>
        </section>
    );
};

export default Table;

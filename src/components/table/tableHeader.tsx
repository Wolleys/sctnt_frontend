import { FC } from "react";

interface TableColumn {
    key: string;
    header: string;
}

interface TableHeaderProps {
    columns: TableColumn[];
}

const TableHeader: FC<TableHeaderProps> = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.key}>{column.header}</th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;

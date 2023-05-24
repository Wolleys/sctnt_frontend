import { FC } from "react";

interface TableColumn {
    key: string;
    header: string;
}

interface TableBodyProps<T> {
    columns: TableColumn[];
    data: T[];
    noDataMessage: string;
}

const TableBody: FC<TableBodyProps<Record<string, unknown>>> = ({
    columns,
    data,
    noDataMessage,
}) => {
    return (
        <tbody>
            {data.length === 0 ? (
                <tr>
                    <td colSpan={columns.length}>{noDataMessage}</td>
                </tr>
            ) : (
                data.map((row: Record<string, unknown>, index: number) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td key={column.key}>{(row as any)[column.key]}</td>
                        ))}
                    </tr>
                ))
            )}
        </tbody>
    );
};

export default TableBody;

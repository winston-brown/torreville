import React from 'react';

type SpecTableProps = {
    tableData: TableData[];
    tableColumns: TableColumn[];
    className?: string;
};

type TableData = {
    key: string;
    value: string;
}

type TableColumn = {
    column: string;
}

const SpecTable: React.FC<SpecTableProps> = ({ tableData, tableColumns, classNames}:{ tableData: TableData[]; tableColumns: TableColumn[]; classNames?: string;}) => {  

    return (
        <div className={`border-collapse w-full ${classNames}`}>
            <div className="flex bg-gray-200">
                {tableColumns.map((column, index) => (
                    <div key={index} className="flex-1 p-2 border border-gray-300">{column.column}</div>
                ))}
            </div>
            {tableData.map((row, index) => (
                <div key={index} className="flex">
                    <div className="flex-1 p-2 border border-gray-300">{row.key}</div>
                    <div className="flex-1 p-2 border border-gray-300">{row.value}</div>
                </div>
            ))}
        </div>
    );
};

export default SpecTable;

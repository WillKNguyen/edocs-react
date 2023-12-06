import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from './data/dataProcessor';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from "ag-grid-react";
import downloadIcon from './assets/download-icon.png';
import './assets/css/ResultPage.css';
import './assets/css/AGGridOverride.css';

function ResultPage() {
    const [visibleColumns, setVisibleColumns] = useState(data && Object.keys(data[0]));

    const DownloadIcon = () => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src={downloadIcon} alt="Download"></img>
        </div>
    );

    const columnDefs = [
        { headerName: 'View', cellRenderer: DownloadIcon, width: 90 },
    ];

    const keys = Object.keys(data[0]);

    keys.forEach((key) => {
        columnDefs.push({
            headerName: key,
            field: key,
            sortable: true,
            filter: true,
            resizable: true,
            hide: !visibleColumns.includes(key), // Set initial visibility based on state
        });
    });

    const gridOptions = {
        defaultColDef: {
            sortable: true,
            resizable: true,
            filter: true,
        },
        pagination: true,
        domLayout: 'normal', // You can set this to 'normal' if you prefer fixed height
        paginationPageSize: 50,
    };

    function handleColumnToggle(columnName) {
        // Toggle the visibility of the column
        setVisibleColumns(prevColumns => {
            const index = prevColumns.indexOf(columnName);
            const newColumns = [...prevColumns];
            if (index !== -1) {
                newColumns.splice(index, 1); // Column exists, remove it (hide)
            } else {
                newColumns.push(columnName); // Column doesn't exist, add it (show)
            }
            return newColumns;
        });
    }

    function handleSelectAllColumns(){
        const selectAllElement = document.getElementById('selectall')
        if (!selectAllElement.checked){
            setVisibleColumns([])
        } else {
            setVisibleColumns(Object.keys(data[0]))
        }
    }

    return (
        <>
            <Header hasSearch={true} username='Will Nguyen' columns={keys} handleColumnToggle={handleColumnToggle} handleSelectAllColumns={handleSelectAllColumns}></Header>
            <div id="resultGrid">
                <div style={{ backgroundColor: '#F2F2F2', fontSize: '14px', padding: '10px' }}>Drag a column header and drop it here to group by that column</div>
                <div className="ag-theme-quartz">
                    <AgGridReact rowData={data} columnDefs={columnDefs} gridOptions={gridOptions}></AgGridReact>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default ResultPage;

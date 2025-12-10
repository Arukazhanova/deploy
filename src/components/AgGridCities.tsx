import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

interface User {
  id: number;
  name: string;
  email: string;
  address: { city: string };
}

const AgGridCities: React.FC = () => {
  const [rowData, setRowData] = useState<User[]>([]);

  const columnDefs: ColDef<User>[] = [
    { field: "id", headerName: "ID", sortable: true, filter: true },
    { field: "name", headerName: "Name", sortable: true, filter: true },
    { field: "email", headerName: "Email", sortable: true, filter: true },
    {
      headerName: "City",
      sortable: true,
      filter: true,
      valueGetter: (params) => params.data?.address?.city ?? "",
    },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data: User[]) => setRowData(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ width: "100%", padding: 20 }}>
      <h2>AG Grid — Cities</h2>
      <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
        <AgGridReact<User>
          rowData={rowData}
          columnDefs={columnDefs}
          pagination
          paginationPageSize={5}
        />
      </div>
    </div>
  );
};

export default AgGridCities;

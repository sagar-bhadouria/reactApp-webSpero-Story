import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
// import { makeStyles } from "@mui/styles";
import "./dataGrid.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const columns = [
  {
    field: "parents",
    headerName: "Parents and Siblings",
    width: 250,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 150,
    editable: true,
    renderCell: (params) => (
      <Select
        value={params.value}
        onSelect={(event) => console.log(event.target.value)}
        label="Gender"
      >
        <MenuItem value={"M"}>Male</MenuItem>
        <MenuItem value={"F"}>Female</MenuItem>
        <MenuItem value={"O"}>Others</MenuItem>
      </Select>
    ),
  },
  {
    field: "birth",
    headerName: "Birth",
    width: 110,
    editable: true,
  },
  {
    field: "birthLocation",
    headerName: "Birth Location",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <Tooltip title={params.value}>
        <span className="table-cell-trucate">{params.value}</span>
      </Tooltip>
    ),
  },
  {
    field: "death",
    headerName: "Death",
    sortable: false,
    width: 160,
    editable: true,
  },
  {
    field: "deathLocation",
    headerName: "Death Location",
    sortable: false,
    width: 160,
    editable: true,
    renderCell: (params) => (
      <Tooltip title={params.value}>
        <span className="table-cell-trucate">{params.value}</span>
      </Tooltip>
    ),
  },
];

const rows = [
  {
    id: 1,
    parents: "Kyle Musk",
    gender: "M",
    birth: "21 Aug 2000",
    birthLocation: "Sao Tome and Principe",
    death: "23 February 1998",
    deathLocation: "Salt Lake City, Salt Lake Country",
  },
  {
    id: 2,
    parents: "Kyle Musk",
    gender: "M",
    birth: "21 Aug 2000",
    birthLocation: "Sao Tome and Principe",
    death: "23 February 1998",
    deathLocation: "Salt Lake City, Salt Lake Country",
  },
];

export default function DataGridDemo() {
  const [age, setAge] = React.useState("");
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
}

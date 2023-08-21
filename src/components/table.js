import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { dataGridActions } from "../store/rowDataSlice";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "firstName", headerName: "First name", flex: 1 },
  { field: "lastName", headerName: "Last name", flex: 1 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    flex: 1.5,

    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "date", headerName: "Date", flex: 1, sortable: false },
];

export default function DataTable() {
  const rows = useSelector((state) => state.rows);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="search"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Button
          variant="contained"
          style={{ marginLeft: "10px", marginBottom: "10px" }}
          onClick={() => dispatch(dataGridActions.toggleFormView())}
        >
          ADD ROW
        </Button>
        <TextField
          id="outlined-basic"
          variant="outlined"
          style={{ width: "20%", marginBottom: "10px" }}
          label="Search"
        />
      </div>
      <div style={{ height: 370.5, width: "100%" }}>
        <DataGrid
          disableColumnMenu
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          rows={rows}
        />
      </div>
    </>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Tooltip, Select, MenuItem, Snackbar } from "@mui/material";
import "./index.css";
import elonMuskLogo from "../../images/elonMusk.png";
import KyleMuskLogo from "../../images/kyleMusk.png";
import RobertMuskLogo from "../../images/robertMusk.png";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoryDataCreator, landingSliceActions } from "./redux/slice";

export default function Landing() {
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const storyDataFromRedux = useSelector(
    (state) => state.landingSliceReducer.storyData
  );

  // API call
  React.useEffect(() => {
    dispatch(fetchStoryDataCreator());
  }, []);

  // setting data in local state after API response
  React.useEffect(() => {
    if (storyDataFromRedux.length) {
      setData(storyDataFromRedux);
    }
  }, [storyDataFromRedux]);

  const handleClose = () => setOpen(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const renderParent = (params) => {
    if (params.row.type === "C") {
      return (
        <div className="Siblings">
          <div className="imageContainer">
            <img src={elonMuskLogo} className="image" />
          </div>
          <div>
            <span className="nameContainer">{params.value}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="parentsAndSiblings">
          <div className="imageContainer">
            <img
              src={
                params.row.parents === "Robert Musk"
                  ? RobertMuskLogo
                  : KyleMuskLogo
              }
              className="image"
            />
          </div>
          <div>
            <span className="nameContainer">{params.value}</span>
          </div>
        </div>
      );
    }
  };
  React.useEffect(() => {}, []);
  const columns = [
    {
      field: "parents",
      headerName: "Parents and Siblings",
      width: 220,
      // editable: true,
      className: "parents",
      renderHeader: (params) => (
        <strong>
          <span className="parents" aria-label="enjoy">
            {params.colDef.headerName}
          </span>
        </strong>
      ),
      renderCell: (params) => {
        return renderParent(params);
      },
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <Select
          onChange={(event) => {
            dispatch(
              landingSliceActions.updateData({
                id: params.id,
                value: event.target.value,
                field: "gender",
              })
            );
            setOpen(true);
          }}
          label="Gender"
          value={params.value}
          renderValue={() => <span>{params.value}</span>}
          className="genderDropDwon"
        >
          <MenuItem value={"M"}>Male</MenuItem>
          <MenuItem value={"F"}>Female</MenuItem>
          <MenuItem value={"O"}>Other</MenuItem>
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
      editable: true,
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
    {
      field: "marriage",
      headerName: "Marriage",
      width: 110,
      editable: true,
    },
    {
      field: "spouse",
      headerName: "Spouse",
      width: 110,
      editable: true,
    },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        onCellEditCommit={(e) => {
          dispatch(landingSliceActions.updateData(e));
          setOpen(true);
        }}
      />
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          success!
        </Alert>
      </Snackbar>
    </Box>
  );
}

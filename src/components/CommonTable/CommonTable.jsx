import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import EditModal from "../EditModal/EditModal";

const CommonTable = ({
  columns,
  data,
  setData,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  // Delete the data from the table
  const handleDelete = (rowData) => {
    rowData.id
      ? setData((previousData) => {
          return previousData.filter((item) => item.id !== rowData.id);
        })
      : setData((previousData) => {
          return previousData.filter((item) => item.email !== rowData.email);
        });
  };

  const [open, setOpen] = useState(false);
  const [singleData, setSingleData] = useState({});

  // used for opening the edit modal
  function handleOpen() {
    setOpen(true);
  }

  // used for closing the modal
  function handleClose() {
    setOpen(false);
  }

  // handle edit functionality
  function handleEdit(row) {
    setSingleData(row);
    handleOpen();
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <>
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "bold",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    {column.label}
                  </TableCell>
                </>
              ))}
              <TableCell
                style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return column.id === "image" ? (
                        <TableCell key={column.id} align={column.align}>
                          <img
                            src={value}
                            alt="image"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </TableCell>
                      ) : (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}

                    <TableCell>
                      <DeleteIcon onClick={() => handleDelete(row)} />
                      <EditIcon onClick={() => handleEdit(row)} />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <EditModal
        open={open}
        handleClose={handleClose}
        setData={setData}
        data={singleData}
      />
    </Paper>
  );
};

export default CommonTable;

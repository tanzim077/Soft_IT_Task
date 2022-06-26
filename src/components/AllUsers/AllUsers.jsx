import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import * as React from "react";
import CommonTable from "../CommonTable/CommonTable";
import FilterMenu from "../FilterMenu/FilterMenu";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "password", label: "Password", minWidth: 100 },
  { id: "phone", label: "Phone", minWidth: 100 },
  { id: "image", label: "Image", minWidth: 100 },
];

function createData(name, email, password, phone, image) {
  return { name, email, password, phone, image };
}

const rows = [
  createData("India", "IN", "1324171354", "3287263", "dummy.png"),
  createData("China", "CN", "1403500365", "9596961", "dummy"),
  createData("Italy", "IT", "60483973", "301340", "dummy"),
  createData("United States", "US", "327167434", "9833520", "dummy"),
  createData("Canada", "CA", "37602103", "9984670", "dummy"),
  createData("Australia", "AU", "25475400", "7692024", "dummy"),
  createData("Germany", "DE", "83019200", "357578", "dummy"),
  createData("Ireland", "IE", "4857000", "70273", "dummy"),
  createData("Mexico", "MX", "126577691", "1972550", "dummy"),
  createData("Japan", "JP", "126317000", "377973", "dummy"),
  createData("France", "FR", "67022000", "640679", "dummy"),
  createData("United Kingdom", "GB", "67545757", "242495", "dummy"),
  createData("Russia", "RU", "146793744", "17098246", "dummy"),
  createData("Nigeria", "NG", "200962417", "923768", "dummy"),
  createData("Brazil", "BR", "210147125", "8515767", "dummy"),
];

export default function AllUsers() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState(rows);
  const [searchType, setSearchType] = React.useState("email");
  const [searchValue, setSearchValue] = React.useState("");

  /* //!Attention
   * This is used for temporary store the data in "data" but you cannot get the new data in filter, because every time you click the filter value  it reset the data
   */
  const onSubmit = (newData) => {
    setData([...data, newData]);
    reset();
    // console.log(data); // just checking is the data is updated
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // change the search type here
  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  // set search value here
  const handleSearchData = (e) => {
    setSearchValue(e.target.value);
  };

  // Manage the search data here
  React.useEffect(() => {
    searchValue !== ""
      ? setData(
          rows.filter((row) => 
            row[searchType].toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setData(rows);
  }, [searchValue]);

  return (
    <Box sx={{ p: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          component="div"
          noValidate
          sx={{
            mt: 1,
            mb: 3,
            p: 1,
            display: "flex",
            gap: 1,
            flexDirection: "row",
          }}
        >
          <TextField
            name="name"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
            {...register("name")}
          />
          <TextField
            name="email"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
            {...register("email")}
          />
          <TextField
            name="password"
            required
            fullWidth
            id="password"
            label="Password"
            autoFocus
            {...register("password")}
          />
          <TextField
            name="Phone"
            required
            fullWidth
            id="phone"
            label="Phone"
            autoFocus
            {...register("phone")}
          />
          <TextField
            fullWidth
            id="image"
            type="file"
            name="image"
            placeholder="Profile Image"
            {...register("image")}
          />
          <Button
            type="submit"
            size="small"
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
          >
            Add
          </Button>
        </Box>
      </form>

      {/* Reusable Filter Option */}
      <FilterMenu
        searchType={searchType}
        options={["Email", "Phone"]}
        handleChange={handleChange}
        handleSearchData={handleSearchData}
        item="User"
      />

      {/* Reusable Table  */}
      <CommonTable
        columns={columns}
        data={data}
        setData={setData}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        roleCreate = {true}
      />
    </Box>
  );
}

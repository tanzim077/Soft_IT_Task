import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CommonTable from "../CommonTable/CommonTable";
import FilterMenu from "../FilterMenu/FilterMenu";

function createData(id, name, description) {
  return { id, name, description };
}

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "description", label: "Description", minWidth: 100 },
];

const categoryRows = [
  createData("1", "Dummy Category 1", "Short description"),
  createData("2", "Dummy Category 2", "Short description"),
  createData("3", "Dummy Category 3", "Short description"),
  createData("4 ","Dummy Category 4", "Short description"),
  createData("5", "Dummy Category 5", "Short description"),
  createData("6", "Dummy Category 6", "Short description"),
  createData("7", "Dummy Category 7", "Short description"),
  createData("8", "Dummy Category 8", "Short description"),
  createData("9", "Dummy Category 9", "Short description"),
  createData("11", "Dummy Categor 10", "Short description"),
  createData("2", "Dummy Category 11", "Short description"),
  createData("13 ","Dummy Categor 12", "Short description"),
  createData("14", "Dummy Categor 13", "Short description"),
  createData("15", "Dummy Categor 14", "Short description"),
  createData("16", "Dummy Categor 15", "Short description"),
];

const AllCategories = () => {
  const [data, setData] = useState(categoryRows);
  const [searchType, setSearchType] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (newData) => {
    setData([...data, newData]);
    reset();
    // console.log(data); // just checking is the data is updated
  };

  // change the search type here
  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  // set search value here
  const handleSearchData = (e) => {
    setSearchValue(e.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Manage the search data here
  useEffect(() => {
    searchValue !== ""
      ? setData(
          categoryRows.filter((row) =>
            row[searchType].toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setData(categoryRows);
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
            name="id"
            required
            fullWidth
            id="id"
            label="ID"
            autoFocus
            {...register("id")}
          />
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
            name="description"
            required
            fullWidth
            id="description"
            label="Description"
            autoFocus
            {...register("description")}
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
        options={["Name"]}
        handleChange={handleChange}
        handleSearchData={handleSearchData}
        item = "Category"
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
      />
    </Box>
  );
};

export default AllCategories;

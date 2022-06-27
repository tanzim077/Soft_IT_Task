import { Box, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import categoryRows from "../../fakeData/category";
import CommonTable from "../CommonTable/CommonTable";
import FilterMenu from "../FilterMenu/FilterMenu";


const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "description", label: "Description", minWidth: 100 },
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
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (newData) => {
    setData([...data, newData]);
    console.log(data); // just checking is the data is updated
    reset();
  };

  // change the search type here
  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  // set search value here
  const handleSearchData = (e) => {
    setSearchValue(e.target.value);
  };

  // For pagination
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
    <Grid spacing={2} sx={{ p: 3 }}>
      <Box
        component="div"
        noValidate
        sx={{
          mt: 1,
          mb: 3,
          p: 1,
          gap: 1,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ p: 0, display: "flex" }}>
            <Grid item xs={12} md={2} lg={2}>
              <TextField
                name="id"
                required
                fullWidth
                id="id"
                label="ID"
                autoFocus
                {...register("id")}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                {...register("name")}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextField
                name="description"
                required
                fullWidth
                id="description"
                label="Description"
                autoFocus
                {...register("description")}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Button
                type="submit"
                size="small"
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Reusable Filter Option */}
      <FilterMenu
        searchType={searchType}
        options={["Name"]}
        handleChange={handleChange}
        handleSearchData={handleSearchData}
        item="Category"
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
    </Grid>
  );
};

export default AllCategories;

import { Box, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import categoryRows from "../../fakeData/category";
import rows from "../../fakeData/product";
import CommonTable from "../CommonTable/CommonTable";
import FilterMenu from "../FilterMenu/FilterMenu";
import MultipleSelect from "../MultipleSelect/MultipleSelect";

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "categoryid", label: "Category ID", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "description", label: "Description", minWidth: 100 },
];
const allCategories = categoryRows.map((row) => {
  return row.id;
});

const allCategory = [...new Set(allCategories)];

const AllProducts = () => {
  const [data, setData] = useState(rows);
  const [categoryList, setCategoryList] = useState([]);
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
    newData.categoryid = categoryList;
    setData([...data, newData]);
    reset();
    console.log(data);
  };

  // change the search type here
  const handleChange = (e) => {
    setSearchType(e.target.value);
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
          rows.filter((row) =>
            row[searchType].toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setData(rows);
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
            <Grid item xs={12} md={3} lg={3}>
              {/* For dynamically set the category from the created category list*/}
              <MultipleSelect
                options={allCategory}
                setCategoryList={setCategoryList}
              />
            </Grid>

            <Grid item xs={12} md={3} lg={3}>
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

      {/* Reusable Filter Option , options is given from here so user can change the filter type anytime*/}
      <FilterMenu
        searchType={searchType}
        options={["Name", "CategoryId"]}
        handleChange={handleChange}
        handleSearchData={handleSearchData}
        item="Product"
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

export default AllProducts;

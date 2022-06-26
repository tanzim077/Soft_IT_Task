import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CommonTable from "../CommonTable/CommonTable";
import FilterMenu from "../FilterMenu/FilterMenu";
import MultipleSelect from "../MultipleSelect/MultipleSelect";

function createData(id, categoryid, name, description) {
  return { id, categoryid, name, description };
}

const categoryRows = [
  createData("1", "Dummy Category 1", "Short description"),
  createData("2", "Dummy Category 2", "Short description"),
  createData("3", "Dummy Category 3", "Short description"),
  createData("4 ", "Dummy Category 4", "Short description"),
  createData("5", "Dummy Category 5", "Short description"),
  createData("6", "Dummy Category 6", "Short description"),
  createData("7", "Dummy Category 7", "Short description"),
  createData("8", "Dummy Category 8", "Short description"),
  createData("9", "Dummy Category 9", "Short description"),
  createData("11", "Dummy Category 10", "Short description"),
  createData("2", "Dummy Category 11", "Short description"),
  createData("13 ", "Dummy Category 12", "Short description"),
  createData("14", "Dummy Category 13", "Short description"),
  createData("15", "Dummy Category 14", "Short description"),
  createData("16", "Dummy Category 15", "Short description"),
];

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "categoryid", label: "Category ID", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "description", label: "Description", minWidth: 100 },
];

const allCategory = categoryRows.map((row) => {
  return row.categoryid;
});

const rows = [
  createData("1", [45], "Dummy Product", "Short descripton"),
  createData("2", [38], "Dummy Product", "Short descripton"),
  createData("3", [37], "Dummy Product", "Short descripton"),
  createData("4 ", [36], "Dummy Product", "Short descripton"),
  createData("5", [35], "Dummy Product", "Short descripton"),
  createData("6", [34], "Dummy Product", "Short descripton"),
  createData("7", [33,32], "Dummy Product", "Short descripton"),
  createData("8", [29], "Dummy Product", "Short descripton"),
  createData("9", [28], "Dummy Product", "Short descripton"),
  createData("10", [27], "Dummy Product", "Short descripton"),
  createData("11", [26], "Dummy Product", "Short descripton"),
  createData("12 ", [25], "Dummy Product", "Short descripton"),
  createData("13", [24], "Dummy Product", "Short descripton"),
  createData("14", [23], "Dummy Product", "Short descripton"),
  createData("15", [22], "Dummy Product", "Short descripton"),
  createData("16", [21], "Dummy Product", "Short descripton"),
  createData("17", [20], "Dummy Product", "Short descripton"),
];

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
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (newData) => {
    newData.categoryid = categoryList;
    console.log(newData)
    setData([...data, newData]);
    reset();
    // console.log(data); // just checking is the data is updated
  };

  // change the search type here
  const handleChange = (e) => {
    console.log(e.target.value);
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

  console.log(categoryList);

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

          {/* <Grid xs={12}> */}
          <MultipleSelect
            options={allCategory}
            setCategoryList={setCategoryList}
          />
          {/* </Grid> */}
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
    </Box>
  );
};

export default AllProducts;

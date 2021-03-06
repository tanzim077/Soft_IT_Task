import {
  FormControl, Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const FilterMenu = ({
  searchType,
  options,
  handleChange,
  handleSearchData,
  item
}) => {
  return (
    <Box sx = {{ display: "flex", gap : 3, pb:2, alignItems: "center"}}>
      <Grid container>

      <Grid item xs={12} md={4} lg={4} sx={{display : "flex", alignItems : "center"}}>
      <Typography variant="h6" color = "green" gutterBottom > Search for a specific {item} </Typography>

      </Grid>
      <Grid item xs={12} md={4} lg={4}>

      </Grid>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Box sx={{ display: "flex", gap :3 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchType}
            label="Filter"
            onChange={handleChange}
          >
            {options.map((option, index) => {
              return (
                <MenuItem value={option.toLowerCase()} key={index}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
          <TextField
            name="search"
            id="search"
            label="Search"
            variant="outlined"
            onChange={(e) => handleSearchData(e)}
          />
        </Box>
      </FormControl>

      </Grid>

    </Box>
  );
};

export default FilterMenu;

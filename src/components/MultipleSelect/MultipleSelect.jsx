import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { MenuProps } from "../../utils/utitis";

const MultipleSelect = ({ options, width, setCategoryList }) => {
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options?.length > 0 && selected.length === options.length;

  // store the category list if the user select multiple category
  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options?.length ? [] : options);
      return;
    }
    setSelected(value);
    setCategoryList(value);
  };
  return (
    <Box sx={{ width: width || "100%" }}>
      <FormControl sx={{ maxWidth: "100%" }} fullWidth>
        <InputLabel id="mutiple-select-label">Category ID</InputLabel>
        <Select
          labelId="mutiple-select-label"
          multiple
          value={selected}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          <MenuItem value="all">
            <ListItemIcon>
              <Checkbox
                checked={isAllSelected}
                indeterminate={
                  selected.length > 0 && selected.length < options.length
                }
              />
            </ListItemIcon>
            <ListItemText primary="Select All" />
          </MenuItem>
          {options?.map((option) => (
            <MenuItem key={option} value={option}>
              <ListItemIcon>
                <Checkbox checked={selected.indexOf(option) > -1} />
              </ListItemIcon>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MultipleSelect;

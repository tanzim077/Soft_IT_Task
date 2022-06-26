import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import MultipleSelect from "../MultipleSelect/MultipleSelect";


const AddProductContainer = styled.div`
    display: flex;
    padding :3% 10%;
    margin : 10%
    height: 100%;
    justify-content: center;
    `

function createData(id, categoryId, name, description) {
  return { id, categoryId, name, description };
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

const allCategory = categoryRows.map((row) => {
  return row.categoryId;
});

const Product = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm();
    
  const onSubmit = (data) => console.log(data);
  return (
    <AddProductContainer>
          <Container component="main" maxWidth="xs">
              <Typography sx={{textAlign : "center"}} component="h3" variant="h5"> Add a Product </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            component="div"
            noValidate
            sx={{ mt: 3, display: "flex", gap: 2, flexDirection: "column" }}
          >
            <TextField
              name="name"
              required
              fullWidth
              id="id"
              label="ID"
              autoFocus
              {...register("id")}
            />
            <MultipleSelect options={allCategory} width="100%" />

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
              name="Description"
              required
              fullWidth
              id="description"
              label="Description"
              autoFocus
              {...register("description")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </AddProductContainer>
  );
};

export default Product;

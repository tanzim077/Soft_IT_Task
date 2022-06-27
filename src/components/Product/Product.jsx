import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import categoryRows from "../../fakeData/category";
import MultipleSelect from "../MultipleSelect/MultipleSelect";

const AddProductContainer = styled.div`
    display: flex;
    padding :3% 10%;
    margin : 10%
    height: 100%;
    justify-content: center;
    `;

const allCategory = categoryRows.map((row) => {
  return row.id;
});

const Product = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <AddProductContainer>
      <Container component="main" maxWidth="xs">
        <Typography sx={{ textAlign: "center" }} component="h3" variant="h5">
          Add a Product
        </Typography>
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

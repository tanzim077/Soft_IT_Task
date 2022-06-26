import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const Category = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Typography sx={{ textAlign: "center" }} component="h3" variant="h5">
          Add a Category
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
    </div>
  );
};

export default Category;

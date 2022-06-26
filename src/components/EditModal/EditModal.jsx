import { Box, Button, Modal, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditModal = ({ open, handleClose, setData, data }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (newData) => {
    data.email
      ? setData((previousData) =>
          previousData.map((item) =>
            item.email === newData.email ? newData : item
          )
        )
      : setData((previousData) =>
          previousData.map((item) => (item.id === newData.id ? newData : item))
        );

    reset();
    handleClose();
  };
  console.log(data)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                flexDirection: "column",
              }}
            >
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                defaultValue={data.name}
                autoFocus
                {...register("name")}
              />
              {/* This is for user update */}
              {data.email && (
                <>
                  <TextField
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    defaultValue={data.email}
                    {...register("email")}
                  />
                  <TextField
                    name="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    defaultValue={data.password}
                    {...register("password")}
                  />
                  <TextField
                    name="phone"
                    required
                    fullWidth
                    id="phone"
                    label="Phone"
                    defaultValue={data.phone}
                    {...register("phone")}
                  />
                  <TextField
                    name="Role"
                    fullWidth
                    id="role"
                    label="Role"
                    {...register("role")}
                  />
                  <TextField
                    fullWidth
                    id="image"
                    type="file"
                    name="image"
                    placeholder="Profile Image"
                    {...register("image")}
                  />
                </>
              )}
                {/* This is for product or category */}
              {data.description && (
                <>
                  <TextField
                    name="description"
                    fullWidth
                    id="description"
                    label="Description"
                    defaultValue={data.description}
                    {...register("role")}
                  />
                  <TextField
                    name="id"
                    fullWidth
                    id="id"
                    label="Id"
                    defaultValue={data.id}
                    {...register("id")}
                  />
                </>
                          )}
                          {/* {
                              data.category && (
                                  
                          } */}
              {/* <TextField
                name="categoryid"
                fullWidth
                id="categoryid"
                label="Category ID"
                defaultValue={data.categoryid}
                {...register("categoryid")}
              /> */}

              <Button
                type="submit"
                size="small"
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
              >
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;

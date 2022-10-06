import React from "react";
import { Container, Button } from "@mui/material";
import { Stack } from "@mui/system";

const LoginPage = () => {
  return (
    <Container sx={{ marginBottom: "100px", marginTop: "200px" }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="container"
          sx={{
            color: "white",
            backgroundColor: "#000000d1",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          Login With Google
        </Button>
      </Stack>
    </Container>
  );
};

export default LoginPage;

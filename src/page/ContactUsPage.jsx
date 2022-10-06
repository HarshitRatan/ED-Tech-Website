import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUsPage = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginBottom: "50px" }}
    >
      <Card
        sx={{
          display: "flex",
          maxWidth: "500px",
          height: "700px",
          backgroundColor: "#e3e3e3cf",
        }}
      >
        <Grid container sx={{ marginTop: "30px" }}>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <CardMedia
                component="img"
                sx={{
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                }}
                image="/images/Harshit_Ratan.jpg"
                alt="Profile-Pic"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "0px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: "100%" }}
                >
                  <Typography
                    component="div"
                    variant="body1"
                    style={{ color: "black", fontWeight: "800" }}
                  >
                    Name : Harshit Ratan Shukla
                  </Typography>
                  <Typography
                    component="div"
                    variant="body1"
                    style={{ color: "black", fontWeight: "800" }}
                  >
                    Ph Number : +91 94150 93948
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: "100%", marginTop: "50px" }}
                >
                  <IconButton
                    onClick={() =>
                      (window.location = "mailto:harshitratanshukla@gmail.com")
                    }
                    size="large"
                    sx={{ border: "2px solid black" }}
                  >
                    <EmailIcon fontSize="large" sx={{ color: "black" }} />
                  </IconButton>
                  <a
                    href="https://www.linkedin.com/in/harshitratanshukla/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton size="large" sx={{ border: "2px solid black" }}>
                      <LinkedInIcon fontSize="large" sx={{ color: "black" }} />
                    </IconButton>
                  </a>
                  <a
                    href="https://www.instagram.com/harshit_ratan_shukla/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton size="large" sx={{ border: "2px solid black" }}>
                      <InstagramIcon fontSize="large" sx={{ color: "black" }} />
                    </IconButton>
                  </a>
                  <a href="tel: +91 9415093948">
                    <IconButton size="large" sx={{ border: "2px solid black" }}>
                      <PhoneIcon fontSize="large" sx={{ color: "black" }} />
                    </IconButton>
                  </a>
                </Stack>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
};

export default ContactUsPage;

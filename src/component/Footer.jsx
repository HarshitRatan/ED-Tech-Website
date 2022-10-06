import React from "react";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
      sx={{
        width: "100%",
        height: "100px",
        color: "black",
        backgroundColor: "#c7c0b8;",
      }}
    >
      <Typography variant="body1">© 2022 . All rights reserved.</Typography>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <IconButton
          onClick={() =>
            (window.location = "mailto:harshitratanshukla@gmail.com")
          }
          size="small"
          sx={{ border: "2px solid black" }}
        >
          <EmailIcon fontSize="small" sx={{ color: "black" }} />
        </IconButton>
        <a
          href="https://www.linkedin.com/in/harshitratanshukla/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="small" sx={{ border: "2px solid black" }}>
            <LinkedInIcon fontSize="small" sx={{ color: "black" }} />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/harshit_ratan_shukla/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton size="small" sx={{ border: "2px solid black" }}>
            <InstagramIcon fontSize="small" sx={{ color: "black" }} />
          </IconButton>
        </a>
        <a href="tel: +91 9415093948">
          <IconButton size="small" sx={{ border: "2px solid black" }}>
            <PhoneIcon fontSize="small" sx={{ color: "black" }} />
          </IconButton>
        </a>
      </Stack>
    </Stack>
  );
};
export default Footer;

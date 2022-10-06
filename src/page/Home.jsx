import React from "react";
import { Grid, Container, Stack, Typography } from "@mui/material";
import LandingHero from "../component/LandingHero";
import CourseCard from "../component/CourseCard";
import data from "../data/MOCK_DATA.json";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";

const Home = () => {
  const [isloading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
        <LandingHero />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "50px" }}
        >
          <Typography
            style={{ color: "black", fontWeight: "1000" }}
            variant="h4"
          >
            Explore Courses
          </Typography>
        </Stack>

        <Grid container spacing={4} mb={12} sx={{ marginTop: "50px" }}>
          {isloading && (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <CircularProgress size="50px" />
            </Stack>
          )}
          {!isloading &&
            data.slice(0, 8).map((item, index) => (
              <Grid item key={index} xs={12} sm={4} md={3}>
                <CourseCard {...item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;

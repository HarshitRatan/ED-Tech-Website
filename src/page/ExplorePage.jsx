import React from "react";
import { Grid, Container, Stack, Typography } from "@mui/material";
import CourseCard from "../component/CourseCard";
import data from "../data/MOCK_DATA.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
const options = [
  "Category A",
  "Category B",
  "Category C",
  "Category D",
  "Category E",
];
const ExplorePage = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [isloading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
        <Typography
          style={{ color: "#5a683f", fontWeight: "1000" }}
          variant="h2"
        >
         Start Learning Today
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "50px" }}
        >
          <Autocomplete
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setIsLoading(true);
              setInputValue(newInputValue);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            }}
            options={options}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label=" Filter By Category" />
            )}
          />
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
            inputValue.length === 0 &&
            data.map((item, index) => (
              <Grid item key={index} xs={12} sm={4} md={3}>
                <CourseCard {...item} />
              </Grid>
            ))}
          {!isloading &&
            inputValue.length > 0 &&
            data
              .filter(
                (item) => item.catg.toLowerCase() === inputValue.toLowerCase()
              )
              .map((item, index) => (
                <Grid item key={index} xs={12} sm={4} md={3}>
                  <CourseCard {...item} />
                </Grid>
              ))}
        </Grid>
      </Container>
    </>
  );
};

export default ExplorePage;

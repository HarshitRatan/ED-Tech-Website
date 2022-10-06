import React from "react";
import { Grid, Container, Stack, Typography } from "@mui/material";
import CourseCard from "../component/CourseCard";
import data from "../data/MOCK_DATA.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const options = [
  "Category A",
  "Category B",
  "Category C",
  "Category D",
  "Category E",
];
const ExplorePage = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [isloading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
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

        <Grid container spacing={2} sx={{ marginTop: "50px" }}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              inputValue={searchValue}
              onInputChange={(event, newInputValue) => {
                setIsLoading(true);
                setSearchValue(newInputValue);
                setTimeout(() => {
                  setIsLoading(false);
                }, 0.05);
              }}
              freeSolo
              disableClearable
              options={[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
        </Grid>

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
            searchValue.length === 0 &&
            data.map((item, index) => (
              <Grid item key={index} xs={12} sm={4} md={3}>
                <CourseCard {...item} />
              </Grid>
            ))}
          {!isloading &&
            inputValue.length > 0 &&
            searchValue.length === 0 &&
            data
              .filter(
                (item) => item.catg.toLowerCase() === inputValue.toLowerCase()
              )
              .map((item, index) => (
                <Grid item key={index} xs={12} sm={4} md={3}>
                  <CourseCard {...item} />
                </Grid>
              ))}

          {!isloading &&
            searchValue.length > 0 &&
            inputValue.length === 0 &&
            data
              .filter(
                (item) =>
                  item.author
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  item.courseName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
              )
              .map((item, index) => (
                <Grid item key={index} xs={12} sm={4} md={3}>
                  <CourseCard {...item} />
                </Grid>
              ))}

          {!isloading &&
            inputValue.length > 0 &&
            searchValue.length > 0 &&
            data
              .filter(
                (item) =>
                  (item.courseName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                    item.author
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())) &&
                  item.catg.toLowerCase() === inputValue.toLowerCase()
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

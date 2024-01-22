import { Button, Container, Stack } from "@mui/material";
import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { jobClass, classesData } from "../data/job-class-data";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [classes, setClass] = useState<
    | "noviceClass"
    | "firstClass"
    | "secondClass1"
    | "secondClass2"
    | "thirdClass1"
    | "thirdClass2"
  >("noviceClass");
  const [className, setClassName] = useState("Novice");

  function handleClick() {
    setLoading(true);
  }

  // console.log(ClassName);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setClass(event.target.value as typeof classes);
    setClassName(
      event.target.value === "noviceClass"
        ? "Novice"
        : event.target.value === "firstClass"
        ? "Swordman"
        : event.target.value === "secondClass1"
        ? "Knight"
        : event.target.value === "secondClass2"
        ? "Crusader"
        : event.target.value === "thirdClass1"
        ? "Rune Knight"
        : event.target.value === "thirdClass2"
        ? "Royal Guard"
        : "Crusader"
    );
  };

  const rows = [
    {
      id: 1,
      username: "@MUI",
      age: 38,
    },
  ];

  const style =
    className === "Royal Guard" ||
    className === "Arch Bishop" ||
    className === "Geneticist" ||
    className === "Shadow Chaser" ||
    className === "Warlock" ||
    className === "Ranger" ||
    className === "Guillotine Cross";

  const width = style ? 190 : 160;
  const height = style ? 160 : 130;

  const handleChangeClassName = (event: SelectChangeEvent<string>) => {
    setClassName(event.target.value);
  };

  const jobClasses: { className: string; classImg: string }[] =
    jobClass[classes];

  const imageByClass = jobClasses.find((item) => item.className === className);

  return (
    <>
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
        <Stack direction="row" sx={{ justifyContent: "center" }}>
          <img
            src="/ragnarok-logo.jpg"
            alt="logo-ragnarok"
            style={{ width: 300 }}
          />
        </Stack>
        <Stack direction="row" sx={{ justifyContent: "center" }}>
          <Stack
            direction="column"
            sx={{
              height: 250,
              width: "25%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack
              style={{
                width,
                height,
              }}
            >
              <img
                src={imageByClass?.classImg}
                alt="Novice"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Stack>

            <Stack>
              <FormControl sx={{ minWidth: 170, my: 1 }} size="small">
                <Select
                  value={classes}
                  onChange={handleChange}
                  displayEmpty
                  variant="outlined"
                  sx={{ color: "black", textAlign: "center", fontSize: 14 }}
                >
                  {classesData.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item.classKey}
                      style={{ fontSize: 14 }}
                    >
                      {item.classTitle}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 170 }} size="small">
                <Select
                  value={className}
                  onChange={handleChangeClassName}
                  displayEmpty
                  variant="outlined"
                  sx={{ color: "black", textAlign: "center", fontSize: 14 }}
                >
                  {jobClasses.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item.className}
                      style={{ fontSize: 14 }}
                    >
                      {item.className}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Stack>
          <Stack sx={{ height: 400, width: "75%" }}>
            <div style={{ height: 250, width: "100%" }}>
              <DataGrid
                columns={[{ field: "username", width: 200 }, { field: "age" }]}
                rows={rows}
              />
            </div>
          </Stack>
        </Stack>
        {/* <div>
      <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={handleClick}
          loading={loading}
          variant="outlined"
          disabled
        >
          <span>disabled</span>
        </LoadingButton>
        <LoadingButton
          size="small"
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          <span>Fetch data</span>
        </LoadingButton>
        <LoadingButton
          size="small"
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton>
        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Box>

      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          variant="outlined"
          disabled
        >
          <span>disabled</span>
        </LoadingButton>
        <LoadingButton
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          <span>Fetch data</span>
        </LoadingButton>
        <LoadingButton
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton>
        <LoadingButton
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Box>
    </div> */}
      </Container>
    </>
  );
}

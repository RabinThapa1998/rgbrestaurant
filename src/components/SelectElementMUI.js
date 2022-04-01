import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectElementMUI() {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 0, p: 0, minWidth: 80 }} variant="standard">
      {/* <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel> */}
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={age}
        onChange={handleChange}
        //   autoWidth
        label="Age"
      >
        <MenuItem value={10}>Small</MenuItem>
        <MenuItem value={20}>Medium</MenuItem>
        <MenuItem value={30}>Large</MenuItem>
      </Select>
    </FormControl>
  );
}

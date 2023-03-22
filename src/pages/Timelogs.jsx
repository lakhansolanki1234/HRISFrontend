import React from "react";
import { useState, useEffect, useRef } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import Timelogtable from "./TimelogTable";



function Timelogs(){
    const employees = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Bob Smith' },
      ];

    const currentDate = dayjs();
    const oneMonthAgo = currentDate.subtract(1, 'month');
    const [value, setValue] = React.useState(oneMonthAgo);
    const [value1, setValue1] = React.useState(currentDate);
  const[name,setname]=useState();
  const[selecteddata,setselecteddata]=useState(null);
  const handletable = () => {
   setselecteddata(1)
  };

    return( 
        <div style={{marginLeft:"400px"}}>
        <div className="row mt-3 flex mt" style={{gap
        :"3rem"}}>
    <div className="col-2">
      <label htmlFor="dateCovered">Date Covered</label>
    </div>

    <div className="col-3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="From"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
    <div className="col-3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="To"
          value={value1}
          onChange={(newValue) => {
            setValue1(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  </div>
  <div className="row mt-3">
                <div className="col-2">
                  <label htmlFor="type">Employee Name</label>
                </div>
                <div className="col">
                  <FormControl fullWidth>
                    <InputLabel>Advance Filter</InputLabel>
                    <Select labelId="label"  label="Employee Name" value={''} onChange={(e)=>{setname(e.target.value)}}>
                     <MenuItem >Hi</MenuItem>
                     <MenuItem>Hi</MenuItem>
                     <MenuItem>Hi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <Button
                  variant="contained"
                  size="large"
                  color="error"
                  onClick={handletable}
                >
                  Process
                </Button>
               
                {selecteddata && (
          <Timelogtable />
        )}
  </div>
  );
}
export default Timelogs;
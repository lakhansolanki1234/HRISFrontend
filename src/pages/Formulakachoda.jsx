import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

function Formula() {
  
  const [schedules, setSchedules] = React.useState([{ scheduleTime: '', operation: '', scheduleTimeOut: '' }]);

  const handleScheduleTimeChange = (event, index) => {
    const newSchedules = [...schedules];
    newSchedules[index].scheduleTime = event.target.value;
    setSchedules(newSchedules);
  };

  const handleOperationChange = (event, index) => {
    const newSchedules = [...schedules];
    newSchedules[index].operation = event.target.value;
    setSchedules(newSchedules);
  };

  const handleScheduleTimeOutChange = (event, index) => {
    const newSchedules = [...schedules];
    newSchedules[index].scheduleTimeOut = event.target.value;
    setSchedules(newSchedules);
  };

  const handleAddSchedule = () => {
    const newSchedules = [...schedules, { scheduleTime: '', operation: '', scheduleTimeOut: '' }];
    setSchedules(newSchedules);
  };

  const handleRemoveSchedule = (index) => {
    const newSchedules = [...schedules];
    newSchedules.splice(index, 1);
    setSchedules(newSchedules);
  };
  

  return (
    <>
     <div style={{marginLeft:"400px"}}>
      {schedules.map((schedule, index) => (
       
        <div key={index} style={{gap:"3rem",textAlign:"inherit"}}>
  <FormControl style={{ padding: '20px' }}>
    <InputLabel id={`schedule-time-label-${index}`}>Schedule Time</InputLabel>
    <Select
      labelId={`schedule-time-label-${index}`}
      id={`schedule-time-${index}`}
      value={schedule.scheduleTime}
      onChange={(event) => handleScheduleTimeChange(event, index)}
    >
      <MenuItem value="">
      
      </MenuItem>
      <MenuItem value={1}>1 PM</MenuItem>
      <MenuItem value={2}>2 PM</MenuItem>
      <MenuItem value={3}>3 PM</MenuItem>
      <MenuItem value={4}>4 PM</MenuItem>
      <MenuItem value={5}>5 PM</MenuItem>
    </Select>
  </FormControl>
  <FormControl style={{ padding: '20px',marginLeft:"20px" }}>
    <InputLabel id={`operation-label-${index}`}>Operation</InputLabel>
    <Select
      labelId={`operation-label-${index}`}
      id={`operation-${index}`}
      value={schedule.operation}
      onChange={(event) => handleOperationChange(event, index)}
    >
      <MenuItem value="">
    
      </MenuItem>
      <MenuItem value={'add'}>Add</MenuItem>
      <MenuItem value={'subtract'}>Subtract</MenuItem>
      <MenuItem value={'multiply'}>Multiply</MenuItem>
      <MenuItem value={'divide'}>Divide</MenuItem>
    </Select>
  </FormControl>
  <FormControl style={{ padding: '20px' }}>
    <InputLabel id={`schedule-time-out-label-${index}`}>Schedule Time Out</InputLabel>
    <Select
      labelId={`schedule-time-out-label-${index}`}
      id={`schedule-time-out-${index}`}
      value={schedule.scheduleTimeOut}
      onChange={(event) => handleScheduleTimeOutChange(event, index)}
    >
      <MenuItem value="">
    
      </MenuItem>
      <MenuItem value={6}>6 PM</MenuItem>
      <MenuItem value={7}>7 PM</MenuItem>
      <MenuItem value={8}>8 PM</MenuItem>
      <MenuItem value={9}>9 PM</MenuItem>
      <MenuItem value={10}>10 PM</MenuItem>
    </Select>
  </FormControl>
  <Button variant="contained" color="secondary" onClick={() => handleRemoveSchedule(index)}>
  X
</Button>

</div>

      ))}
      <Button variant="contained" color="primary" onClick={handleAddSchedule}>
        Add Schedule
      </Button>
      </div>
    </>
  );
}

export default Formula

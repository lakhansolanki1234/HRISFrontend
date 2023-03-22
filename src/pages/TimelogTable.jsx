import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Modal, Box, Typography,
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TimelogTable = () => {
  const [fieldValue, setFieldValue] = useState('');
  // const [modalOpen, setModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [addModalOpen1, setAddModalOpen1] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const handleChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const handleChangeInputValue1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
    setInputValue('');
  };
  const handleCloseAddModal1 = () => {
    setAddModalOpen1(false);
    setInputValue('');
  };
  const handleAddRow = () => {
    setAddModalOpen(true);
  };
  const handleAddRow1 = () => {
    setAddModalOpen1(true);
  };
  const handleModalClose = () => {
    setAddModalOpen(false);
  };
  

  const [selectedRow, setSelectedRow] = useState(null);
const [rowData, setRowData] = useState({});
const [isEditing, setIsEditing] = useState(false);

  const classes = useStyles();
  const [data,setData]=useState([]);
  const [columns, setColumns] = useState(['Name', 'Age', 'Salary']);
  const [newColumnName, setNewColumnName] = useState('');

  const handleAddColumn = async () => {
    if (newColumnName) {
      try {
        const response = await fetch('https://16e4-103-165-30-2.in.ngrok.io/add-column-sql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',  "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            column_name: newColumnName,
            column_type: "TEXT"
          })
        });
        setColumns([...columns, newColumnName]);
        setNewColumnName('');
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log (typeof newColumnName);
  
  const handlesubmit = async () => {
    try {
      const response = await fetch('https://16e4-103-165-30-2.in.ngrok.io/add_employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          Empname: "asd",
          new_column: "some asd"
        })
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRowClick = (index) => {
    setSelectedRow(index);
    setRowData(data[index]);
  };
  
  const handleEdit = (index) => {
    setIsEditing(true);
    setSelectedRow(index);
  };
  
  const handleCancelUpdate = () => {
    setIsEditing(false);
    setRowData({});
    setSelectedRow(null);
  };
  
  const handleRowUpdate = async (index) => {
    try {
      const response = await axios.put(`https://16e4-103-165-30-2.in.ngrok.io/update_employee/${data[index].id}`, rowData);
      setData(data.map((row, i) => (i === index ? rowData : row)));
      setIsEditing(false);
      setRowData({});
      setSelectedRow(null);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleDelete = async (index) => {
    try {
      const response = await axios.delete(`https://16e4-103-165-30-2.in.ngrok.io/delete_employee/${data[index].id}`);
      setData(data.filter((row, i) => i !== index));
      setSelectedRow(null);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div style={{marginTop:"60px"}}>
     
      {/* <Button variant="contained"  color="primary" onClick={handleAddRow}>
        Add Row
      </Button>
      <Button variant="contained" color="primary" onClick={handleAddRow1}>
        Add column
      </Button>
      <div style={{marginLeft:"400px"}}>
      <Modal open={addModalOpen} >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 400 }}>
          
        <Typography variant="h4" sx={{ mb: 3 }}>Time Keep</Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>Emplyoee Name</Typography>
          <TextField  label="Row value" variant="outlined" value={inputValue} onChange={handleChangeInputValue} sx={{ width: '100%', mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 3 }}>Emplyoee Contact</Typography>
          <TextField label="Row value" variant="outlined" value={inputValue} onChange={handleChangeInputValue} sx={{ width: '100%', mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 3 }}>Employee Address</Typography>
          <TextField label="Row value" variant="outlined" value={inputValue} onChange={handleChangeInputValue} sx={{ width: '100%', mb: 2 }} />
<div></div>
<div  style={{display: "flex", gap: "2rem",marginTop:"20px"}}> <Button variant="contained" color="primary" onClick={handlesubmit}>Save</Button>
          <Button variant="contained" color="secondary" onClick=
          {handleCloseAddModal}>Cancle</Button></div>
         
        </Box>
      </Modal>
     
      {/* <ul>
        {data.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul> */}

   
      
   
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="example table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
  {data.map((row, index) => (
    <TableRow key={index} onClick={() => handleRowClick(index)}>
      {columns.map((column, colIndex) => (
        <TableCell key={colIndex}>{row[column]}</TableCell>
      ))}
      <TableCell>
        {isEditing && selectedRow === index ? (
          <div>
            <Button onClick={() => handleRowUpdate(index)}>Save</Button>
            <Button onClick={() => handleCancelUpdate(index)}>Cancel</Button>
          </div>
        ) : (
          <Button onClick={() => handleEdit(index)}>Edit</Button>
        )}
        <Button onClick={() => handleDelete(index)}>Delete</Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
<TableBody>
  
</TableBody>

        </Table>
      </TableContainer>
      
    </div>
  );
};

export default TimelogTable;

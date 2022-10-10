import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Button, Link, makeStyles} from '@material-ui/core'
import { BorderBottom } from '@material-ui/icons';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useHistory } from "react-router-dom";
// import { useState, useContext } from "react";


const drawerWidth = 240;









function createData(project_name , crn , status , action)

{
    return {project_name , crn , status , action};
}

const useStyles = makeStyles((theme) => ({




  table:{
    margin: theme.spacing(4),

  },
  btnstyle: {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: "700",
    backgroundColor: "#00004d",
    color: "#fff",
    margin: theme.spacing(1, 4),
    width: "90%",
    height: 40,
    alignItem: "center",
    [theme.breakpoints.up("md")]: {
      width: "30%",
      height: 50,
    },
    borderRadius: "20px",
    textTransform: "none"
  },


}))

export default function MocTable({data}){



    const history = useHistory();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [l1DraftData , setL1DraftData] = React.useState(null);
    const [l2DraftData , setL2DraftData] = React.useState(null);
    const l1Rows = [];
    const l2Rows = [];

    const takeAction = async (content) => {

      console.log(content);

      await axios.get(`http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/moc/l1_draft/${content.value}`)
      .then((response) => {
        console.log(response);
        history.push({
          pathname: '/ChangeRequest',
          state: {
            value: response.data,
            newTask: null,
            view: null

          },
        });
      })
      .catch((error) => {
        console.log(error);
      })
     
    };

    const changePage = (content) => {
      history.push({
        pathname: '/ImpactAssessment',
        state: {
          value: content
        },
      });
    }

    const handleViewRequest = async (content) => {

      console.log(content);

      await axios.get(`http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/moc/l1_draft/${content.value}`)
      .then((response) => {
        console.log(response);
        history.push({
          pathname: '/ChangeRequest',
          state: {
            value: response.data,
            newTask: null,
            view: true

          },
        });
      })
      .catch((error) => {
        console.log(error);
      })
     
    };

   

    const columns = [
      { id: 'project_name', label: 'Title', minWidth: 170 },
      { id: 'crn', label: 'Request Number', minWidth: 40 },
      {
          id: 'status',
          label: 'Status',
          minWidth: 60,
          align: 'right',
      },
      {
          id: 'action',
          label: 'Action',
          minWidth: 200,
          align: 'right',
          format:(value)=><ul style={{
              display:"inline-block"
          }}><Button variant='outlined' color='success'
          onClick={() => takeAction({value})}>Edit</Button>
          <Button variant='outlined' color='success' onClick={() => handleViewRequest({value})}>View</Button>
          
          <Button variant='outlined' color='success'
          onClick={() => changePage({value})}
            >
            Take Action</Button>
           
          
          </ul>
      }
  ];

    React.useEffect(() => {

      const getData = async () => {

        await axios.get("http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/moc/dashboard")
        .then((res) => {
          console.log(res.data.l1_draft);
          setL1DraftData([...res.data.l1_draft]);
          setL2DraftData([...res.data.l2_draft]);
        })
        .catch((error) => {
          console.log(error);

        })
      
      };

      getData();
    } , []);

    React.useEffect(() => {

      const graphData = async () => {

        await axios.get
      }
    })

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        console.log({data});
      };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleNewRequest = () => {
      history.push({
        pathname: '/ChangeRequest',
        state: {
          value: null,
          newTask: true,
          view: null
        },
      });
    }

   
    const classes = useStyles();

   
    
    l1DraftData && l1DraftData.map((d) => l1Rows.push(createData(d?.project_name, d?.crn, d?.status, d?.crn)))

    

    return ( 
      <Box
        component="main"
        sx={{ flexGrow: 1, ml: `calc(10% + ${drawerWidth}px)`, width: { sm: `calc(80% - ${drawerWidth}px)`} }}
      > 
     
     <Button onClick={handleNewRequest} className={classes.btnstyle}>
        Add New Request
      </Button>
        <Paper sx={{ width: '100%', overflow: 'hidden' }} className= {classes.table}>

       
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="customized table">
              <TableHead>
                <TableRow 
                sx={{
                  backgroundColor:"blue"
                }}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth,
                              //  borderBottom: "5px solid blue",
                               backgroundColor: "#99ccff",
                               fontSize: "1.1rem" ,
                               fontWeight:"bold"}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {l1Rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                           
                            <TableCell key={column.id} align={column.align}>
                              {column.format 
                                ? column.format(value)
                                : value}
                            </TableCell>
              
                           
                          );
                        })}
                      </TableRow>
                      
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={l1Rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            
          />
        </Paper>

        <Paper sx={{ width: '100%', overflow: 'hidden' }} className= {classes.table}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="customized table">
              <TableHead>
                <TableRow 
                sx={{
                  backgroundColor:"blue"
                }}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth,
                              //  borderBottom: "5px solid blue",
                               backgroundColor: "#99ccff",
                               fontSize: "1.1rem" ,
                               fontWeight:"bold"}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {l1Rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format 
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={l1Rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            
          />
        </Paper>

        </Box>
      );
        
}
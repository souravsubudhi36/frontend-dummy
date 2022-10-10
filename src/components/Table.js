import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Link} from '@material-ui/core'
import { BorderBottom } from '@material-ui/icons';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';


const columns = [
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'serial', label: 'Serial', minWidth: 40 },
  {
    id: 'revision',
    label: 'Revision',
    minWidth: 60,
    align: 'right',
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 150,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'attachment',
    label: 'Attachment',
    minWidth: 200,
    align: 'right',
    format:(value)=><ul style={{
      display:"inline-block"
    }}><Link href={`http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/download/${value}`} target="_blank">
    <VisibilityIcon/></Link>
    <Link href={`http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/download/${value}`} target="_blank">
      <DownloadIcon/>
    </Link>
    <Link href={`http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/download/${value}`} target="_blank">
    <PrintIcon/>
    </Link></ul>
  },
];

function createData(title, serial, revision, date, attachment) {
  return { title, serial, revision, date, attachment };
}



export default function DataTable({data}) {
 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = []
  data.map((d) => rows.push(createData(d?.title, d?.serial_no, d?.revision, d?.date_of_upload, d?.document_url)))

//   for(let i = 0; i < {data}.length; i++)
//   {
//     console.log('abc', data[i]);
//     rows.push(createData(data[i].title , data[i].serial_no , data[i].revision , data[i].date , data[i].document_url));
//   }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log({data});
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (  
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
            {rows
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        
      />
    </Paper>
  );
}

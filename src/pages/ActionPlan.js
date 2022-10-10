import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
// import { useForm, useField, splitFormProps } from "react-form";
import { useTable } from "react-table";
import Box from '@mui/material/Box';

const drawerWidth = 240;


const TableInput = props => {
    console.log("TableInput", props);
    const { column, row, cell, updateData } = props;
    const onChange = e => updateData(row.index, column.id, e.target.value);
    return <input type="number" value={cell.value} onChange={onChange} />;
  };
  
  const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      width: 30%;
      text-align: center;
      border: 1px solid lightgray;
      padding: 5px;
    }
  `;
  const ReactTable = React.memo(props => {
    console.log("ReactTable", props);
    // const { setAmountDue } = props;
    const columns = React.useMemo(
      () => [
        {
          Header: "SL No",
          accessor: "cost",
          Cell: TableInput
        },
        {
          Header: "Quantity",
          accessor: "quantity",
          Cell: TableInput
        },
        {
          Header: "Total (DASH)",
          accessor: row => row.cost * row.quantity,
          id: "total"
        }
      ],
      []
    );
    const initialData = [
      {
        cost: 1,
        quantity: 2
      },
      {
        cost: 3,
        quantity: 4
      }
    ];
    const [data, setData] = React.useState(initialData);
    const resetData = () => setData(initialData);
    const addRow = () => setData(old => [...old, { cost: 5, quantity: 6 }]);
    const updateData = (rowIndex, columnID, value) => {
      setData(oldData =>
        oldData.map((row, index) => {
          if (index === rowIndex) {
            return {
              ...oldData[rowIndex],
              [columnID]: value
            };
          }
          return row;
        })
      );
    };
    const table = useTable({ columns, data, updateData });
    const { getTableProps, headerGroups, rows, prepareRow } = table;
    const tableSum = rows.reduce((sum, row) => sum + row.values.total, 0);
    console.log("setAmountDue", tableSum);
    // setAmountDue(tableSum);
    return (
        <Box
        component="main"
        sx={{ flexGrow: 1, ml: `calc(10% + ${drawerWidth}px)`, width: { sm: `calc(80% - ${drawerWidth}px)`} }}
      >
      <>
        <label>Action Plan</label>
        <br />
        <StyledTable {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
            <tr>
              <td colSpan={3}>
                <button type="button" onClick={addRow}>
                  Add Row
                </button>
                <button type="button" onClick={resetData}>
                  Reset Table
                </button>
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </>
      </Box>
    );
  });

export default ReactTable;
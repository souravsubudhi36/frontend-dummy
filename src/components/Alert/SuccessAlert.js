import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export default function SuccessAlert() {
    return (

        <Alert variant="filled" severity="success">
        Data Submitted Succesfully!
      </Alert>
    );
}
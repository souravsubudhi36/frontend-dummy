import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const handleDownload = (data) => {
//     console.log(data);
//     axios({
//         method: "GET",
//         url: `http://iosapi.centralindia.cloudapp.azure.com/download/${data}`,
//         headers: { "Content-Type": "application/json"},
       
//     })
//     .then((response) => {
//         console.log(response);
//     }
//     )

// }

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
          {/* hiii */}
        </Typography>
        <Typography variant="h5" component="div">
          {props.serial_no}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.revision}
        </Typography>
        <Typography variant="body2">
          { props.category }
        </Typography>  
       <a download={props.title} href = {"http://ec2-13-233-71-160.ap-south-1.compute.amazonaws.com/download/" + props.document_url} target = "_blank">
        {props.title}
       </a> 
      </CardContent>
      <CardActions>
        <Button size="small">
            Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

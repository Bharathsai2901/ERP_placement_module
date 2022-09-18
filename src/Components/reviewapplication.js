import React, {useEffect,useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function App() {
    const [resumeDetails,setResumeDetails]=useState();

    useEffect(async ()=>{
    const res =   await fetch("/getAppliedDetails") 
    const finalRes= await res.json()
    setResumeDetails(finalRes)
    }, [])

    console.log(resumeDetails)
    
    return (
        <div>
        <h4 style={{ padding:20,
                textAlignVertical: 'center',
                textAlign:'center'}}> Review Application</h4>
        <Card style={{
            width: 1300,
            marginLeft: 100,
            boxShadow: 100,
            backgroundColor: "white",
        }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kalavandla Hiranmai
        </Typography>
      </CardContent>
      
      <CardActions>
      <Grid container spacing={2}>
      <Button size="small">Experiance</Button>
        <Button size="small">Assesment</Button>
        <Button size="small">Availability</Button>
        </Grid>
        <Grid container justify="flex-end">
        <Button variant="contained" >View profile</Button>
        </Grid>
      </CardActions>
    </Card>
        </div>
        
    );
}

import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AppDetails(props) {
  const {details} = props
  const {Name, workDone, internships, availability, studentResume} = details
  console.log(details)
    return (
        <div>
          <h4 style={{ padding:20,
                textAlignVertical: 'center',
                textAlign:'center'}}> Review Application</h4>
        <Card style={{
            // width: 1300,
            marginLeft: 40,
            boxShadow: 100,
            backgroundColor: "white",
        }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Name}
        </Typography>
      </CardContent>
      
      <CardActions>
      <Grid container spacing={2}>
      <Button size="small">Applicant Work:{workDone}</Button>
        <Button size="small">Availaibility of Applicant:{availability}</Button>
        <Button size="small">Internships done by Applicant:{internships}</Button>
        </Grid>
        <Grid container justify="flex-end">
          <img src = {studentResume[0]} alt = "student Resume" className = "w-50 h-100"/>
        </Grid>
      </CardActions>
    </Card>
        </div>
        
    );
}

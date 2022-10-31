import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function AppDetails(props) {
  const {details} = props
  const {Name, Jobtitle, workDone, internships, availability, studentResume} = details
  console.log(details)
    return (
        <div className = "p-2">
        <Card style={{
            // width: 1300,
            marginLeft: 40,
            boxShadow: 100,
            backgroundColor: "white",
        }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name of the Applicant: {Name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Role Applied For: {Jobtitle}
        </Typography>
      </CardContent>
      
      <CardActions>
      <Grid container spacing={2}>
        <p style = {
          {
            color:"blue"
          }
        }>Student Experience Details:</p>
        <div>

      <Button size="small">Applicant Work:{workDone}</Button>
        <Button size="small">Availaibility of Applicant:{availability}</Button>
        <Button size="small">Internships done by Applicant:{internships}</Button>
        </div>
        </Grid>
        <Grid container justify="flex-end">
        <a href={studentResume[0]} target="_blank" rel="noreferrer">
          <div className = "btn btn-outline-dark h-60">
            <p>Student Resume</p>
          </div>
        </a>
        </Grid>
      </CardActions>
    </Card>
        </div>
        
    );
}

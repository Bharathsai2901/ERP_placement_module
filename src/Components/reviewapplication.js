import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
  

export default function App() {
    return (
        <div style={{

        }}>
            <h4 style={{ padding:20,
                textAlignVertical: 'center',
                textAlign:'center'}}> Review Application</h4>
            <Card
                style={{
                    width: 1300,
                    marginLeft: 100,
                    boxShadow: 100,
                    backgroundColor: "white",
                }}
            >
                <CardContent>
                    <Typography variant="h5" component="p">
                        Details:
                    </Typography>
                    <Typography
                        style={{
                            marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                            Number of positions need to be filled : 10<br/>
                            Number of students applied : 100<br/>
                            <b>
                            Exam Details :
                            </b><br/>
                            Timings : 25th September 2022<br/>
                            Mode : Online Test<br/>
                            Proctors: Hiranmai , Akshara , BharatSai , Roshan , Sampath<br/>
                            <b>Canditates :</b><br/>
                            Canditates qualified for 1st round : --<br/>
                            Canditates qualified for 2nd round : --<br/>
                            Canditates qualified for final round : --<br/>
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button style={{
                    Align : 'center',
                    colour :'blue',size:"small" }}>
                    Back to home</Button>
                </CardActions>
            </Card>
        </div>
    );
}

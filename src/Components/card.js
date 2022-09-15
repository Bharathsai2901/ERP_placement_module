import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/card.css";

// export default function Card() {
//   return (
//     <div className="container card border-0">
//       <div className="row">
//         <SingleCard />
//         <SingleCard />
//         <SingleCard />
//         <SingleCard />
//         <SingleCard />
//         <SingleCard />
//         <SingleCard />
//         <SingleCard />
//         <SingleCard />
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";

export default function Dynamic() {

    const [Data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/uploadDetails')
            const studentData = await response.json()
            setData(studentData.slice(0, 15))
        }
        fetchData()
    }, [])
    return (
        <Container>
            <Row>
                {Data.map((Data, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Body>
                                <Card.Title>{Data.name}</Card.Title>
                                <Card.Text>{Data.team_name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

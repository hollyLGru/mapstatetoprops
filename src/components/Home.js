import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'


const Home = (props) => {
    return (
        <div className="card-container">
            {props.cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">

                        <ul>
                        <li>Miles per Gallon: {props.car["mpg"]}</li>
                        <li>Cylinders: {props.car["cylinders"]}</li>
                        <li>Horsepower: {props.car["horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${props.car.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home
import React from "react";
import { Grid, Container,  Typography, Button,
    CardActions, Card, CardContent, Box } from "@mui/material"

import RoomView from "../component/RoomView"

function RoomOverview(props) {
    return (
        <Container>
            
                <Typography>Here you can see an overview of all the rooms of "this room type" - this is props value = {props.name} and {props.time}</Typography>
                <Typography>For now the page is not showing real data, so we don't know if the room is booked or not</Typography>
                
                    <Grid sx={{flexGrow:1}} 
                    container>
                        
                        <grid item xs key={1} >
                            <RoomView />
                        </grid>
                        <grid item xs key={2} >
                            <RoomView />
                        </grid>
                        <grid item xs key={3} >
                            <RoomView />
                        </grid>
                        <grid item xs key={4} >
                            <RoomView />
                        </grid>
                        <grid item xs key={5} >
                            <RoomView />
                        </grid>
                        <grid item xs key={6} >
                            <RoomView />
                        </grid>
                        <grid item xs key={7} >
                            <RoomView />
                        </grid>

                    </Grid>
            
        </Container>
    )
}

export default RoomOverview;
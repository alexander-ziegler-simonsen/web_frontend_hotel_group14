import React from "react";
import { Typography, Button, Stack, Paper } from "@mui/material"

function RoomView(props) {
    return (
        
            <Paper elevation={3} sx={{width: 300, heigh:'auto', backgroundColor: 'white', padding: 2, margin: 1}}>    
                
            <Typography variant="h1" sx={{fontSize: 18, fontWeight: 'bold', marginBottom: 1}}>
                {props.header}</Typography>
            <Typography variant="p">{props.bodyText}</Typography>
            
            <Stack direction="row" spacing={2} style={{justifyContent: 'center', marginTop: 8}}>
                <item><Button variant="contained">order now {props.orderNow}</Button></item>
                <item><Button variant="outlined">add to list {props.addToList}</Button>  </item>
            </Stack>
            
            
            </Paper>
                
        
    )
}

export default RoomView;
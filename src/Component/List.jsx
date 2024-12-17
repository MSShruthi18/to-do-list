import { Box, Checkbox, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function List({note,deleteNote,updateNote}) {
  return (
    <Paper elevation={1}
    sx={{p:2,mt:1,display:"flex",
        justifyContent:"space-between"
        }}
        >
            <Box sx={{display:"flex",gap:1,alignItems:"center"}}> 
            <Checkbox
            onChange={(e)=>updateNote(e,note)}
            checked={note.done?true:false}/>

            <Typography
            variant="body1"
            color="text.secondary"
            sx={{
                textDecoration:note.done?"line-through":"none",
                textTransform:"capitalize",
                fontWeight:"600",
            }}
            >
                {note.title}
                </Typography>
                </Box>

                <Box>
                    <IconButton  
                    onClick={()=>deleteNote(note.id)}
                    color="error">    
                    <DeleteIcon/>
                </IconButton>
                </Box>

                </Paper>
      
  )
}

import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import InsertForm from './InsertForm';
import List from './List';



export default function Home() {
  let initialnote;
  if(localStorage.getItem("notes")==null){
    initialnote=[];
  }
  else{
    initialnote=JSON.parse(localStorage.getItem("notes"));
  }

  const[notes,setNotes]=useState(initialnote);
  console.log(notes);

  const deleteNote=(id)=>{
    const filteredNotes=notes.filter((item)=>item.id!=id);
    setNotes(filteredNotes);
    localStorage.setItem("notes",JSON.stringify(filteredNotes));
  };

const updateNote=((e,note)=>{
  const noteIndex=notes.findIndex((item)=>item.id==note.id);
  const{done}=note;
  let status;
  if(done){
    status=false;
  }else{
    status=true;
  }
  const updatedNoteData={...note,done:status};
  const finalNotes=[...notes];
  finalNotes.splice(noteIndex,1,updatedNoteData);
  setNotes(finalNotes);
  localStorage.setItem("notes",JSON.stringify(finalNotes));
})

  return (
    <Box  sx={{
       height:"100vh",
        background:"linear-gradient(177deg,pink,pink)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center" ,
        }}>
          <Paper sx={{ p:10, }} >
            <Box sx={{flexGrow:1}}>
          <Grid container spacing={2}>
          <Typography variant="h5" gutterBottom 
        sx={{
          color:"gold",
           fontWeight:"600",
           textAlign:"center",
           textTransform:"uppercase",
        }}>
          TO DO LIST
        </Typography>
        </Grid>
        <Grid size={ {xs:14 } }>
        
        <Grid2 size={ {xs:12 } }>
          <InsertForm setNotes={setNotes} notes={notes}/>
          </Grid2>
          <Grid2 size={{xs:14}}>
            <box sx={{maxHeight:"40vh",overflow:"auto",p:6}}>
              {notes?.length>0?(
                notes.map((note,index)=>(
              <List
              updateNote={updateNote}
              deleteNote={deleteNote}
              key={index}
              note={note}/>
            ))
          ):(
            <Box sx={{p:3, textAlign:"center"}}>
              <Typography color="text.secondary">
                No Notes found
              </Typography>
            </Box>
          )
        }
            </box>

           
          </Grid2>

        
        </Grid>
      
        </Box>
        </Paper>   
    </Box>
  )
}

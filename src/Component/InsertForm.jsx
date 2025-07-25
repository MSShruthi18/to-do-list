import { Grid2 ,TextField,Button} from '@mui/material'
import React, { useState } from 'react'

export default function InsertForm({setNotes,notes}) {
  const[noteTitle,setNoteTitle]=useState("");
  const[noteTitleError,setNoteTitleError]=useState("");


  const handleChange=(e)=>{
    // setNoteError(null)
    setNoteTitle(e.target.value)
  }

  const handleSubmit=()=>{
    if(noteTitle==""){
      setNoteTitleError("Please enter a title")

    }else{
    let noteId=notes?.length== 0 ? 1:notes[notes.length-1].id+1;
    const noteInfo={id:noteId,title:noteTitle,done:false};
    const updateNotes=[...notes,noteInfo];
    localStorage.setItem("notes",JSON.stringify(updateNotes));
    setNoteTitle("")
    setNotes(updateNotes)
  }}
  return (
    <box sx={{flexGrow:0,px:4}}>
        <Grid2 container spacing={1}>
            <Grid2 size={{xs:10}}>
                <TextField
                 onChange={handleChange}
                fullWidth
                label="Enter the title"
                placeholder="Enter the title here"
                value={noteTitle}
                helperText={noteTitleError&&noteTitleError}
                Error={!!noteTitleError}
                >
                </TextField>
            </Grid2>
            <Grid2 size={{xs:2}}>
                <Button 
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                 color="secondary"
                 sx={{p:2}}>
                    ADD
                 </Button>
            </Grid2>
            </Grid2>

    </box>
    
  )
}

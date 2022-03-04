import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";


export const EditMovie = ({ InitialMovieList, movieList, setMovieList }) => {
  const { id } = useParams();
  console.log(id);
  const initialItem = InitialMovieList[id];
  
  const [name, setName] = useState(initialItem.name);
  const [poster, setPoster] = useState(initialItem.poster);
  const [summary, setSummary] = useState(initialItem.summary);
  const [rating, setRating] = useState(initialItem.rating);
  const history= useHistory();
  console.log(initialItem);
  const updateMovie = () => {
    const updatedItem = { name, poster, summary, rating };

    InitialMovieList[id] = updatedItem;
    setMovieList(InitialMovieList);
    history.push("/movies");
  };
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
    
      <TextField
        value={poster}
        id="outlined-basic"
        placeholder="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={summary}
        id="outlined-basic"
        placeholder="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={rating}
        id="outlined-basic"
        placeholder="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <Button onClick={updateMovie} variant="contained" color="success">
        Save
      </Button>
    </div>
  );
};

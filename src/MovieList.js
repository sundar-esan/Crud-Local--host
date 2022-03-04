import { Movie } from './Movie';
import {useHistory} from "react-router-dom";

export function MovieList({movieList,setMovieList}) {
  const history=useHistory();
  return (
    <div className="movie-list">
      {movieList.map((ele, index) => (<Movie
        key={index}
        name={ele.name}
        poster={ele.poster}
        rating={ele.rating}
        summary={ele.summary}
        deleteButton={
        <button 
        onClick={()=>{
          console.log(index);
          const copyMovieList =[...movieList];
          copyMovieList.splice(index,1)
          setMovieList(copyMovieList)
          }} >Delete Me</button>} 

          editButton={
            <button 
            onClick={()=>history.push(`/movies/edit/${index}`)} >Edit</button>} />))
          
         }
          
     
    </div>
  );
}


import './App.css';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link,Switch,Route} from "react-router-dom";
import { Msg } from './Msg';
import { MovieList } from './MovieList';
import {useHistory, useParams } from "react-router-dom";
import { EditMovie } from './EditMovie';



function App() {
 const InitialMovieList=[
    {name:"Iruthi Suttru",
    poster:"https://upload.wikimedia.org/wikipedia/en/f/fe/Irudhi_Suttru.jpg",
    rating:"7.6",
  summary:"A former boxer quits boxing following an argument with the authorities over underlying politics. He goes on to coach a fisherwoman so that he can fulfil his dreams through her."},
  {
    name:"Ghilli",
    poster:"https://pbs.twimg.com/media/EVyhuIsU4AANZ1B?format=jpg&name=large",
    rating:"8",
    summary:"Velu, an aspiring Kabaddi player, is in Madurai to participate in one of the regional matches when he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her wishes."
  },
  {
    name:"Sarpatta Parambarai",
    poster:"https://www.filmibeat.com/ph-big/2021/07/sarpatta_16270131169.jpg",
    rating:"8.7",
    summary:"When Sarpatta Parambarai is challenged to a do-or-die match, Kabilan, a young labourer, must choose whether to put on the gloves himself and lead his clan to victory, or be dissuaded by his disapproving mother and dangerous politics."
  },
  {
    name:"Sachein",
    poster:"https://ahseeit.com/tamil/king-include/uploads/2019/04/fb_img_1555300460361-1223526052.jpg",
    rating:"7.4",
    summary:"Genelia and Vijay are college classmates who become good friends; Vijay eventually expresses his love for Genelia, but she rejects it; in response, Vijay confidently tells her that she will fall in love with him in 30 days."
  },
  {
    name:"Manmadhan",
    poster:"https://wallpaperaccess.com/full/4738412.jpg",
    rating:"7.2",
    summary:"When Mythili meets Mathan, she's at once attracted and terrified since he looks exactly like the serial killer from her nightmares; in fact, he fits the description of a man who targets women in bars."
  }
  ]
  const [movieList,setMovieList]=useState(InitialMovieList);
  const history = useHistory();
  const { id } = useParams();
 console.log(id);
  const movie = movieList[id];
  console.log(movie);
   
const [name,setName]=useState("");
const [poster,setPoster]=useState("");
const [summary,setSummary]=useState("");
const [rating,setRating]=useState("");



  return (
    <div className="App">

      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
        <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>

      <Route path= "/movies/edit/:id">
              <EditMovie InitialMovieList={InitialMovieList} movieList={movieList} setMovieList={setMovieList}/>
      </Route>
        <Route path="/movies"> 
        <div className="add-movie-form">
       <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event)=>setName(event.target.value)}/>
       <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event)=>setPoster(event.target.value)}/> 
       <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event)=>setSummary(event.target.value)}/>
       <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event)=>setRating(event.target.value)}/>
       <Button variant="contained" onClick={()=>{
       const newMovie={
         name:name,
         poster:poster,
         rating:rating,
         summary:summary,
       };
       setMovieList([...movieList,newMovie])
         }
        
        }>Add Movie</Button>
       
     </div>
     <MovieList movieList={movieList} setMovieList={setMovieList}/>
        </Route>
       
        <Route path="/">
                <Msg/>
        </Route>

        
        <Route path="**">
             404 NOT FOUND
          </Route>

      </Switch>

   
    </div>
  );
}

export default App;



import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import DropDown from './components/DropDown';
import MovieDescription from './components/MovieDescription';
import MovieList from './components/MovieList';
import { setPeopleData } from './redux/actions/movieActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    const listOfPeople = await axios.get("https://swapi.dev/api/people");
    dispatch(setPeopleData(listOfPeople.data.results));
  }

  return (

    <div className='container mt-3'>

      <DropDown />
      <MovieList />
      <MovieDescription />

    </div>

  );
}

export default App;

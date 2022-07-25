import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import DropDown from './components/DropDown';
import MovieDescription from './components/MovieDescription';
import MovieList from './components/MovieList';
import { setPeopleData } from './redux/actions/movieActions';
import ReactLoading from 'react-loading';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.movieReducer.loading);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    const listOfPeople = await axios.get("https://swapi.dev/api/people");
    dispatch(setPeopleData(listOfPeople.data.results));
  }

  return (

    <div className={`container ${!loading ? "mt-3" : ""}`}>
      {loading && <div className='vh-100 overflow-hidden d-flex align-items-center justify-content-center'>
        <ReactLoading type={"bars"} color={"black"} height={200} width={75} />
      </div>}
      {!loading &&
        <>
          <DropDown />
          <MovieList />
          <MovieDescription />
        </>
      }
    </div>

  );
}

export default App;

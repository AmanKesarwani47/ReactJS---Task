import axios from 'axios';
import { useEffect, useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.css';
import Cards from './Cards';

function App() {

  const [people, setPeople] = useState([]);
  const [peopleName, setPeopleName] = useState("");
  const [selectPeopleFilms, setSelectPeopleFilms] = useState([]);
  const [peopleFilmsName, setPeopleFilmsName] = useState("");
  const [filmData, setFilmData] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    callAPI();
  }, []);


  const callAPI = async () => {
    const listOfPeople = await axios.get("https://swapi.dev/api/people");
    setPeople(listOfPeople.data.results);
  }

  const callFilmsAPI = async (filmsAPI) => {
    const listOfFilms = await axios.get(filmsAPI);
    setFilmData(listOfFilms.data);
    console.log(listOfFilms.data)
  }

  return (
    <div className="container">
      <div className='mt-3 d-flex justify-content-evenly row'>
        <InputGroup className="mb-3">

          <DropdownButton
            variant="outline-primary"
            title={peopleName === "" ? "Select People" : peopleName}
            id="input-group-dropdown-2"
            align="end"
            disabled={people.length === 0}
          >
            {people.map((plp) => {
              return <>
                <Dropdown.Item id={plp.name} onClick={() => { setPeopleName(plp.name); setSelectPeopleFilms(plp.films); }}>{plp.name}</Dropdown.Item>
              </>
            })}
          </DropdownButton>
        </InputGroup>

        {selectPeopleFilms.length !== 0 && <InputGroup className="mb-3">

          <DropdownButton
            variant="outline-primary"
            title={peopleFilmsName === "" ? "Select Films" : peopleFilmsName}
            id="input-group-dropdown-2"
            align="end"
            disabled={people.length === 0}
          >
            {selectPeopleFilms.map((film) => {
              return <>
                <Dropdown.Item onClick={() => { setPeopleFilmsName(film); callFilmsAPI(film); }}>{film}</Dropdown.Item>
              </>
            })}
          </DropdownButton>
        </InputGroup>}
      </div>
      <div></div>

      {filmData.length !== 0 && <div className="row">
        <Cards title={filmData.title} openingCrawl={filmData.opening_crawl} />
      </div>}

    </div>
  );
}

export default App;

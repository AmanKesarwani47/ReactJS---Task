import axios from "axios";
import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setFilmsData, setLoading, setPeopleName } from "../redux/actions/movieActions";

const DropDown = () => {
    const people = useSelector((state) => state.movieReducer.people);
    const peopleName = useSelector((state) => state.movieReducer.peopleName);

    const dispatch = useDispatch()
    const get_movies = async (movies) => {
        try {
            dispatch(setFilmsData(await Promise.all(movies.map(async (movie) => {
                const result = await axios.get(movie);
                return result.data;
            }))))
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    }
    return <div>
        <InputGroup size="lg" className="mb-3">
            <Form.Control type="text" placeholder={people.length === 0 ? "" : peopleName} disabled />

            <DropdownButton title="Select Character">
                {people.map((plp, index) => {
                    return <>
                        <Dropdown.Item key={plp} onClick={() => { dispatch(setPeopleName(plp.name)); get_movies(plp.films); dispatch(setLoading(true)); }}>{plp.name}</Dropdown.Item>
                    </>
                })}
            </DropdownButton>
        </InputGroup>
    </div>
}

export default DropDown;
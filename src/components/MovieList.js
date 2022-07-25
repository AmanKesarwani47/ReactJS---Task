import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setDescription, setLastYear } from "../redux/actions/movieActions";

const MovieList = () => {
    const filmData = useSelector((state) => state.movieReducer.filmData);
    const dispatch = useDispatch();
    const dateArray = filmData.map((film) => {
        return film.release_date;
    });
    dispatch(setLastYear(dateArray));
    return <div className="row">
        {filmData.map((film, index) => {
            return <>
                <Card key={film.title} className={`m-2 hoverMovie`} style={{ width: '19rem', cursor: "pointer" }} onClick={() => {
                    dispatch(setDescription(film.opening_crawl));
                }}>
                    <Card.Body>
                        <Card.Subtitle>{film.title}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </>
        })}
    </div>
}

export default MovieList;
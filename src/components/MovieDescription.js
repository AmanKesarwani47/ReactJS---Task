import { useSelector } from "react-redux";

const MovieDescription = () => {
    const description = useSelector((state) => state.movieReducer.description);
    const lastYear = useSelector((state) => state.movieReducer.lastYear);

    function lastYearOfMovie(arr) {
        let splittedDate = []
        let maxYear = 0;
        for (let index = 0; index < arr.length; index++) {
            splittedDate[index] = arr[index].split("-");
        }
        for (let i = 0; i < splittedDate.length; i++) {
            if (splittedDate[i][0] > maxYear) {
                maxYear = splittedDate[i][0]
            }
        }
        return maxYear;
    }

    return <>
        {description &&
            <div className='m-5 '>
                <p className='p-4 mx-auto my-auto' style={{ border: "1px solid black", borderRadius: "1rem" }}>
                    {description}
                    <span className="my-2 d-flex fw-bold">Last year of the character in a Movie: {lastYearOfMovie(lastYear)}</span>
                </p>
            </div>
        }
    </>
}

export default MovieDescription;
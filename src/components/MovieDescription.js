import { useSelector } from "react-redux";

const MovieDescription = () => {
    const description = useSelector((state) => state.movieReducer.description);

    return <>
        {description &&
            <div className='m-5 '>
                <p className='p-4 mx-auto my-auto' style={{ border: "1px solid black", borderRadius: "1rem" }}>
                    {description}
                </p>
            </div>
        }
    </>
}

export default MovieDescription;
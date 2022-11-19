const MovieList = (props) => {
  return (
    <div className="text-white">
      {props.movieList.map((movie, index) => {
        return <div key={index}>{movie}</div>;
      })}
    </div>
  );
};
export default MovieList;

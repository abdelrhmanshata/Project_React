export default function Search() {
  return (
    <div>
      <h5>Welcome to our shopping website ,start browsing....</h5>
      <div className="d-flex flex-row my-3">
        <input
          //   value={searchMovie}
          type="text"
          class="form-control me-5 py-2"
          placeholder="Search and explore ..."
          //   onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button
          class="btn text-white bg-primary rounded-2 px-5 py-2 "
          type="button"
          //   onClick={() => navigate(`/search-movies/${searchMovie}`)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

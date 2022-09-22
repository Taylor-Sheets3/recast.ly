const { useState } = React;

var Search = ({handleSubmission}) => {
  const [entry, setEntry] = useState("");

  return (
    <form className="search-bar form-inline" onSubmit={(event) => {
      event.preventDefault();
      handleSubmission(entry);
    }}>
      <input className="form-control" type="text" value={entry}
        onChange={(event) => {
          setEntry(event.target.value);
        }}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

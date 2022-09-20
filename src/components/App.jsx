// import exampleVideoData from '../data/exampleVideoData.js';


const { useState } = React;

const App = () => {

  // exampleVideoData variable name

  // how to pass props (assign it to a variable name, key value pair, pass in a prop its an obj, we get to decide the key,)

  return (
    // exampleVideoData = {Window.exampleVideoData};
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> {Window.exampleVideoData} </h5></div>
          {/* <div><h5><em>search</em> view goes here</h5></div> */}
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> view goes here</h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em> view goes here</h5></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

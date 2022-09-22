// import exampleVideoData
import exampleVideoData from "../data/exampleVideoData.js";
import searchYouTube from "../lib/searchYouTube.js";
// reference child to parent (only way to do this is via import/export feature of es6)
import VideoList from "./VideoList.js";
import Search from "./Search.js";
import VideoPlayer from "./VideoPlayer.js";

const { useState } = React;
const { useEffect } = React;

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(0);


  const [listItems, setListItems] = useState(exampleVideoData);

  // // all videos in the video list
  // function videoList() {
  //   // all videos in video list minus main player video
  //   // spread operator, previous values of list items, include the current video state
  //   // splice
  // }

  // keeps track of current video at main player
  const handleClick = function(index) {
    setCurrentVideo(index);
  };

  // setListItems(temp);
  // define searchYoutube... as its own function and that is what useEffect will trigger
  // we'll have a function that searches and sets the data
  // function needs to be passed down to searchBar component
  const handleSubmission = function(query = 'cats') {
    searchYouTube(query, (data) => {
      setListItems(data);
    });
  };

  useEffect(() => {
    handleSubmission();
  }, []);




  // const handleSubmission = function(entryString) {
  //   useEffect(() => {
  //     searchYouTube(entryString, function(data) {
  //       console.log(data);
  //     });
  //   }, []);
  // }

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          {/* <div><h5><em>search</em> view goes here</h5></div> */}
          { <Search handleSubmission={handleSubmission}/> }
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={listItems[currentVideo]}/>
          {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
        </div>
        <div className="col-md-5">
          <VideoList videos={listItems} handleClick = {handleClick}/>
          {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

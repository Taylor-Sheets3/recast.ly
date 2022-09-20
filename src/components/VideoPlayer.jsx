import {App} from "./src/components/App.jsx";

var VideoPlayer = (props) => {
  const firstVideo = props.exampleVideoData[0];
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        {/* <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowFullScreen></iframe> */}
        <iframe className="embed-responsive-item" src={firstVideo.snippit.thumbnails.default.url} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        {/* <h3>Video Title</h3> */}
        <h3>
          {firstVideo.snippit.title}
        </h3>
        {/* <div>Video Description</div> */}
        <div>
          {firstVideo.snippit.description}
        </div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;

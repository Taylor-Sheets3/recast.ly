import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: { youtube_api_key: YOUTUBE_API_KEY, q: query },
    contentType: 'application/json',
    success: callback,
    error: null || function(error) {
      console.error('recast.ly: failed to fetch videos', error);
    }
  });
};

export default searchYouTube;

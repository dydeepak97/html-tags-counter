import axios from 'axios';
import request from 'postman-request';
import url from 'url';

const PROXY_API_URL = 'proxy-request-server.herokuapp.com';

export function fetchSourceFromUrl(requestUrl, callback){

  console.log('Fetching');
  

  if(!url.parse(requestUrl).protocol){
    requestUrl = `http://${requestUrl}`;
  }

  let requestOptions = {
      protocol: 'https',
      hostname: PROXY_API_URL,
      pathname: `fetch`,
      query: {
        url: requestUrl,
      }
    }
    
  requestUrl = url.format(requestOptions)

  console.log('REQ URL', requestUrl);
  

  axios.get(requestUrl).then(res => {
    console.log('heelo',res.data);
    return callback(null, res.data);
  }
  ).catch(err => {
    return callback(err, null);
  });

  // request(requestUrl, function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
// });
}
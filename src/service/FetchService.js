import axios from 'axios';
import url from 'url';

// All requests are made through a proxy server to avoid CORS issues.
const PROXY_API_URL = 'proxy-request-server.herokuapp.com';

export function fetchSourceFromUrl(requestUrl, callback){

  // Add http if no protocol is specified.
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

  axios.get(requestUrl).then(res => {
    return callback(null, res.data);
  }
  ).catch(err => {
    return callback(err, null);
  });

}
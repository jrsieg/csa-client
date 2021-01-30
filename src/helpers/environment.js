let APIURL = '';

switch (window.location.jrs-mycsa-client) {
    case 'jrs-mycsa-server' || '3000':
        APIURL = 'http://localhost:3000';
        break;
    case 'jrs-mycsa-client.herokuapp.com':
        APIURL = 'https://jrs-mycsa-server.herokuapp.com'
}

export default APIURL;
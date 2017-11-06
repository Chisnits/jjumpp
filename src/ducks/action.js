import axios from 'axios';

export default function getTwitterDataAction(params) {
    //params = username || ChaseDerr
    return axios.get(`http://localhost:8080/api/twitterData/${params}`)
    .then(response=> {console.log(response.data), response.data});
}
import axios from 'axios';


export default function getTwitterDataAction(params) {
    return axios.get(`http://localhost:8080/api/twitterData/${params}`)
    .then(response => response.data);
}
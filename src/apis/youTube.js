import axios from 'axios';

const KEY = 'AIzaSyBI_vy1LIvF13-2rDBbC0j-wJUsz1e5th0';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult: 5,
        key:KEY
    }
});
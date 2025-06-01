import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'6d2797a78b8f4e4b92cfb77e98c38486'
    }
})
import { useState, useEffect } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(`https://immense-eyrie-67673.herokuapp.com/${url}`);
            const result = request.data
            setData(result);
        }

        fetchData();

    }, [url])

    return data;
}

export default UseFetch;
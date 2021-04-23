import { useState, useEffect } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(`http://localhost:1337/${url}`);
            const result = request.data
            setData(result);
        }

        fetchData();

    }, [url])

    return data;
}

export default UseFetch;
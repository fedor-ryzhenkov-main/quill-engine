import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);
    console.log(process.env.REACT_APP_STRAPI_API_TOKEN)

    useEffect(() => {
        fetchData().catch(err => {
            if (err instanceof Error) {
                setError(err);
            } else {
                throw err;
            }
            setLoading(false);
        });
    }, []);

    const fetchData = async() => {
        setLoading(true);
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}`
                },
            });
            setData(response.data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                throw err;
            }
        } finally {
            setLoading(false);
        }
    }

    return { data, error, loading };
}

export default useFetch;
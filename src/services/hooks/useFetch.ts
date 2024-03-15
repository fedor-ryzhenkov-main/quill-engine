import {useEffect, useState} from "react";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


const useFetch = (url: string) => {
    const [data, setData] = useState <any | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            try {
                const response = await axios.get(url, {
                    headers: { Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}` },
                });
                const responseData = await response.data
                setData(responseData)
                setLoading(false)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error);
                } else {
                    throw error;
                }
                setLoading(false);
            }
        }

        fetchData()
    }, []);

    return { data, error, loading };
}

export default useFetch
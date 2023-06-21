import { useRef, useEffect, useState } from 'react'

export const useFetch = (url, _body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const body = useRef(_body); // only if you are utilizing an object, not like useCallback which is only for functions

    useEffect(() => {
        const controller = new AbortController(); // use if you wantt o abort a fetch
        const fetchData = async () => {
            setError("");
            setLoading(true);
            try {
                const response = await fetch(url, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const result = await response.json();
                setData(result);
                console.log("-----");
            }
            catch(error) {
                setError(error.Message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
        return () => controller.abort(); //if you want to abort a fetch
    }, [url, body]);

  return { data, loading, error }
}

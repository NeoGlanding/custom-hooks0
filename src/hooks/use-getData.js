import axios from 'axios';
import React, {useState, useEffect} from 'react'

const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (params) => {
        setLoading(true)
        try {
            let {data} = await axios.get(url, {params});
            setData(data)
            setError(false)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }

    return {
        data,
        loading,
        error,
        getData
    }
}

export default useGetData;
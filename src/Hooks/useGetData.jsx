import {useState,useEffect} from 'react'


export const useGetData = (url) => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [])
    return [data,setData]
}
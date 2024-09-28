import {useState,useEffect} from 'react'


export const useGetData = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [])
    return [data,setData]
}
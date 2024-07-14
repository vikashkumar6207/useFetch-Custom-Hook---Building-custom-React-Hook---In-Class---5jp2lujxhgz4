import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        setLoading(true);
        async function fetchData(){
            try{
                const response = await fetch(url);
                const data = await response.json();

                setData(data);
                // console.log(data);

            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);


    return {data, loading, error};
}
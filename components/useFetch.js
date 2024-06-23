
import React, { useEffect, useState } from "react";

export default function useFetch({ url }) {
  const [data, setData] = useState('');
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
  console.log(data);
  useEffect(() => {
    setLoding(true);

    fetch(url)
      .then((res) => res.json())    
      .then((res) => { 
        if(res.error){ setError(true)
        }else{
        setData(res)
        }
    })
      .catch((err)=> setError(true))
      .finally(() => setLoding(false));
  }, []);
  return{ data, loading, error };
}

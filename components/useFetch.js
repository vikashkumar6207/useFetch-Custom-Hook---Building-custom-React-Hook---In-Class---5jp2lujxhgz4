//write your code here
"use client"
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    setLoding(true);

    fetch(url)
      .then((res) => res.json())    
      .then((res) => { 
        if(res.error){ setError(true)
        }else{
        setData(res.data);
        
        }
    })
      .catch((err)=> setError(true))
      .finally(() => setLoding(false));
  }, []);
  return{ data , loading, error };
}

export default useFetch;